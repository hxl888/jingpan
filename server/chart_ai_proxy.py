#!/usr/bin/env python3
"""Thin proxy: POST /api/chart-ai-reading → Cloudflare Workers AI (OpenAI-compatible)."""
from __future__ import annotations

import json
import os
import re
import sys
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib import error, request

ROOT = Path(__file__).resolve().parent
ENV_FILE = ROOT / '.env'

# 仅拦「行动性」断语。勿含「大吉/大凶/吉凶」——模型常在研习提示写「不作大吉大凶」，会误杀并触发二次请求。
FORBIDDEN = re.compile(r'開運方法|改命|招財術|破財免|宜嫁娶|宜出行|命運好壞|必主大富|必主橫財')

# 否定语境整句先挖掉再检查（「禁止开运改命」等）
DISCLAIMER_SPAN = re.compile(
    r'[^。！？\n]{0,30}(不[作做编編致提供]|禁止|勿|無|没有|並非|并非|僅供|仅供)[^。！？\n]{0,48}'
    r'(大吉|大凶|吉凶|開運|改命|宜忌|禍福|祸福|断语|斷語)[^。！？\n]{0,24}[。！？]?'
)

SYSTEM_PROMPT = """你是「经盘」紫微斗数研习站的 AI 助手，职责 ONLY 是根据用户消息中的 JSON 材料，用现代白话整理、串联已命中的古籍原文与格局歌诀。

硬性规则（违反即为失败）：
1. 只能使用用户消息 JSON 里出现的字段内容，不得引用、推断或补充任何外部知识。
2. 禁止祸福预测、命运好坏判断、开运改命、宜忌行事等任何决策性建议。
3. 每一段白话整理必须标明对应出处（章节名、格局名或 palace 字段）。
4. 材料中没有对应说明的条目，必须写「原文未载」，不得编造。
5. 输出使用 Markdown，固定结构且尽量简洁：
   ## 总览
   （客观复述宫位数、格局数、摘句规模，不作断语）
   ## 分宫整理
   （按材料整理，每宫 2～4 句）
   ## 格局整理
   （仅整理 JSON.patterns）
   ## 研习提示
   （提醒对照站内原文；本站只做原文整理，不提供行事决策）"""


def load_env() -> None:
    if not ENV_FILE.is_file():
        return
    for line in ENV_FILE.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if not line or line.startswith('#') or '=' not in line:
            continue
        key, val = line.split('=', 1)
        key = key.strip()
        val = val.strip()
        if (val.startswith('"') and val.endswith('"')) or (val.startswith("'") and val.endswith("'")):
            val = val[1:-1]
        os.environ.setdefault(key, val)


def resolve_origin(req_origin: str) -> str:
    allowed = os.environ.get('ALLOWED_ORIGIN', '*')
    if allowed == '*':
        return '*'
    items = [s.strip() for s in allowed.split(',') if s.strip()]
    if req_origin and req_origin in items:
        return req_origin
    return items[0] if items else '*'


def trim_text(text: str, limit: int) -> str:
    text = (text or '').strip()
    if len(text) <= limit:
        return text
    return text[:limit] + '…'


def compact_payload(body: dict) -> dict:
    """缩小请求体，降低推理耗时与超时概率。"""
    return {
        'patterns': [
            {
                'name': item.get('name', ''),
                'condition': trim_text(str(item.get('condition', '')), 80),
                'text': trim_text(str(item.get('text', '')), 200),
            }
            for item in (body.get('patterns') or [])[:8]
            if isinstance(item, dict)
        ],
        'excerpts': [
            {
                'chapterTitle': item.get('chapterTitle', ''),
                'chapterId': item.get('chapterId'),
                'text': trim_text(str(item.get('text', '')), 180),
            }
            for item in (body.get('excerpts') or [])[:10]
            if isinstance(item, dict)
        ],
        'palaceReadings': [
            {
                'palace': item.get('palace', ''),
                'classic': trim_text(str(item.get('classic', '')), 100),
                'vernacular': trim_text(str(item.get('vernacular', '') or ''), 100) or None,
                'source': trim_text(str(item.get('source', '') or ''), 40) or None,
            }
            for item in (body.get('palaceReadings') or [])[:24]
            if isinstance(item, dict)
        ],
        # 可选摘要字段，有则保留
        **{
            k: body[k]
            for k in ('palaces', 'soul', 'body', 'fiveElementsClass')
            if k in body
        },
    }


def has_material(body: dict) -> bool:
    def count(key: str) -> int:
        val = body.get(key)
        return len(val) if isinstance(val, list) else 0

    return count('excerpts') + count('patterns') + count('palaceReadings') > 0


def violates_rules(text: str) -> bool:
    cleaned = DISCLAIMER_SPAN.sub('', text or '')
    return bool(FORBIDDEN.search(cleaned))


def call_model(payload: dict) -> str:
    account_id = os.environ.get('CF_ACCOUNT_ID', '')
    token = os.environ.get('CF_API_TOKEN', '')
    model = os.environ.get('CF_AI_MODEL', '@cf/zai-org/glm-4.7-flash')
    base = os.environ.get(
        'CF_AI_BASE_URL',
        f'https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1' if account_id else '',
    )
    if not account_id or not token or not base:
        raise RuntimeError('Server missing CF_ACCOUNT_ID / CF_API_TOKEN configuration')

    # 紧凑 JSON，少 token；限制输出长度，缩短等待
    req_body = json.dumps(
        {
            'model': model,
            'messages': [
                {'role': 'system', 'content': SYSTEM_PROMPT},
                {'role': 'user', 'content': json.dumps(payload, ensure_ascii=False, separators=(',', ':'))},
            ],
            'temperature': 0.2,
            'max_tokens': 1800,
            'reasoning_effort': 'low',
            'chat_template_kwargs': {'enable_thinking': False},
        },
        ensure_ascii=False,
        separators=(',', ':'),
    ).encode('utf-8')

    req = request.Request(
        f'{base.rstrip("/")}/chat/completions',
        data=req_body,
        headers={
            'Authorization': f'Bearer {token}',
            'Content-Type': 'application/json',
        },
        method='POST',
    )

    try:
        with request.urlopen(req, timeout=120) as resp:
            data = json.loads(resp.read().decode('utf-8'))
    except error.HTTPError as exc:
        detail = exc.read().decode('utf-8', errors='replace')
        try:
            parsed = json.loads(detail)
            msg = parsed.get('errors', [{}])[0].get('message') or parsed.get('error', {}).get('message')
        except json.JSONDecodeError:
            msg = detail or exc.reason
        raise RuntimeError(f'Cloudflare AI error: {msg}') from exc
    except error.URLError as exc:
        reason = str(getattr(exc, 'reason', exc))
        if 'timed out' in reason.lower() or 'timeout' in reason.lower():
            raise RuntimeError('模型回應逾時，請稍後重試。') from exc
        raise RuntimeError(f'Upstream error: {reason}') from exc

    message = ((data.get('choices') or [{}])[0].get('message') or {})
    content = message.get('content')
    if content is None:
        content = ''
    content = str(content).strip()
    if not content:
        raise RuntimeError('Empty model response (content is null; try again)')
    return content


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt: str, *args) -> None:
        sys.stderr.write('%s - %s\n' % (self.address_string(), fmt % args))

    def _cors_origin(self) -> str:
        return resolve_origin(self.headers.get('Origin', ''))

    def _send_json(self, status: int, body: dict) -> None:
        payload = json.dumps(body, ensure_ascii=False).encode('utf-8')
        origin = self._cors_origin()
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', origin)
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        self.wfile.write(payload)

    def do_OPTIONS(self) -> None:  # noqa: N802
        if self.path.split('?', 1)[0] != '/api/chart-ai-reading':
            self.send_error(404)
            return
        self._send_json(204, {})

    def do_GET(self) -> None:  # noqa: N802
        if self.path.split('?', 1)[0] == '/health':
            self._send_json(200, {'ok': True})
            return
        self.send_error(404)

    def do_POST(self) -> None:  # noqa: N802
        if self.path.split('?', 1)[0] != '/api/chart-ai-reading':
            self.send_error(404)
            return

        length = int(self.headers.get('Content-Length', '0') or 0)
        raw = self.rfile.read(length).decode('utf-8') if length else '{}'
        try:
            payload = json.loads(raw or '{}')
        except json.JSONDecodeError:
            self._send_json(400, {'error': 'Invalid JSON body'})
            return

        if not has_material(payload):
            self._send_json(400, {'error': '本盤材料不足，無法生成 AI 研習說明。'})
            return

        try:
            compact = compact_payload(payload)
            content = call_model(compact)
            # 不再二次请求：误杀会导致用户空等两倍时间。硬违禁才拒绝。
            if violates_rules(content):
                sys.stderr.write('chart-ai: forbidden hit, reject\n')
                self._send_json(502, {'error': 'AI 輸出含不宜表述，已拒絕返回，請稍後重試。'})
                return
            self._send_json(200, {'content': content})
        except Exception as exc:  # noqa: BLE001
            msg = str(exc)
            if 'timed out' in msg.lower() or 'timeout' in msg.lower():
                msg = '模型回應逾時，請稍後重試。'
            self._send_json(502, {'error': msg})


def main() -> None:
    load_env()
    host = os.environ.get('LISTEN_HOST', '127.0.0.1')
    port = int(os.environ.get('PORT', '8787'))
    server = ThreadingHTTPServer((host, port), Handler)
    print(f'chart-ai-proxy listening on {host}:{port}', flush=True)
    server.serve_forever()


if __name__ == '__main__':
    main()
