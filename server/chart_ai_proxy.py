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

DISCLAIMER_SPAN = re.compile(
    r'[^。！？\n]{0,30}(不[作做编編致提供]|禁止|勿|無|没有|並非|并非|僅供|仅供)[^。！？\n]{0,48}'
    r'(大吉|大凶|吉凶|開運|改命|宜忌|禍福|祸福|断语|斷語)[^。！？\n]{0,24}[。！？]?'
)

# 输出侧：仍像旧稿（引古文 / 逐宫）则判失败
STYLE_BAD = re.compile(
    r'古[诀訣][云雲说说說]|古人[说说說以]|古[书書][说说說形]|據《|据《|'
    r'##\s*分[宫宮]|##\s*材料串讲|##\s*材料串講|##\s*命盘概述|##\s*命盤概述|##\s*研习提示|##\s*研習提示|'
    r'\*\*[^*]{0,12}[宫宮]\*\*'
)

STYLE_NEED_OVERVIEW = re.compile(r'##\s*人物总览|##\s*人物總覽')
STYLE_NEED_STAGES = re.compile(r'##\s*人生阶段|##\s*人生階段')
STYLE_NEED_NEAR = re.compile(r'##\s*近前后五年|##\s*近前後五年')

# 大限宫名 → 生活主题（避免模型按宫罗列）
THEME_MAP = {
    '命宫': '自身与性格',
    '命宮': '自身与性格',
    '兄弟': '同辈与协作',
    '夫妻': '亲密关系',
    '子女': '晚辈与创造',
    '财帛': '钱财与资源',
    '財帛': '钱财与资源',
    '疾厄': '身心压力',
    '迁移': '外出与变动',
    '遷移': '外出与变动',
    '交友': '人际助力',
    '仆役': '人际助力',
    '僕役': '人际助力',
    '事业': '事业与职责',
    '事業': '事业与职责',
    '官禄': '事业与职责',
    '官祿': '事业与职责',
    '田宅': '家庭与资产',
    '福德': '内心满足与享乐',
    '父母': '长辈与出身背景',
}

CLASSIC_IN_VERNA = re.compile(
    r'古[书書][说说說形稱称为為]|古人[说说說以]|古[诀訣][云雲说说說]|'
    r'据《[^》]+》|據《[^》]+》|《[^》]{1,16}》'
)

SYSTEM_PROMPT = """你是「经盘」给普通人看的白话讲解助手。根据 JSON 写一篇详细、连贯的现代白话人生总览。

绝对禁止（出现即失败）：
- 任何文言原句、古诀、半文半白、「古书说/古人说/古诀云」、书名号引文
- 按宫位逐条讲解（禁止「命宫：」「兄弟：」「## 分宫要点」「## 材料串讲」「## 命盘概述」）
- 祸福断语、开运改命、宜忌、命运好坏评判

必须做到：
1. 只用 JSON 里的信息；不编造未给出的星曜、年龄或年份。
2. 全文现代白话、通俗易懂、详细、段落连贯，像在讲同一个人。
3. 把 sanFangMing（四面星曜）融进性格与人生总览，用「自身、对外发展、事业钱财、内心」等说法，不要强调宫名。
4. 按 decades 逐段写人生阶段：标题只用年龄（如 ### 6-15岁），写这段关注什么、容易遇到什么问题或压力；用 lifeTheme 作主题，不要写宫名标题。
5. 必须写「近前后五年」：依据 nearTerm（当前年前后各约 5 年）。用白话分「过去五年左右 / 眼下 / 未来五年左右」三段（也可按年份简述），说明这段日子的主题、容易遇到的问题与压力；结合 years 里的 age、lifeTheme、stars；不要吉凶断语，不要宫名清单。
6. notes 里已是白话要点，直接消化进叙事，不要再提出处。
7. 控制篇幅：总览+性格约 350～600 字；每个大限年龄段 60～120 字；近前后五年合计 200～350 字。

固定 Markdown 结构（标题必须一字不差用下面这些）：
## 人物总览
## 性格与处世
## 人生阶段
### {range}岁
（每个 decade 一节）
## 近前后五年
（过去五年 / 眼下 / 未来五年）
## 结尾说明
（本站只作材料研习参考，不提供吉凶预测或改运建议）"""

RETRY_HINT = (
    '上一稿不合格。请重写：全文只能是现代白话；禁止古书/古人/古诀/引文；'
    '禁止分宫清单；必须含「## 人物总览」与「## 人生阶段」，并按 decades 的年龄分段。'
)


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


def clean_vernacular(text: str) -> str:
    text = CLASSIC_IN_VERNA.sub('', text or '')
    return re.sub(r'\s{2,}', ' ', text).strip(' ，,。;；')


def life_theme(palace_name: str) -> str:
    name = (palace_name or '').strip()
    if name in THEME_MAP:
        return THEME_MAP[name]
    for key, val in THEME_MAP.items():
        if key in name:
            return val
    return '人生议题'


def compact_payload(body: dict) -> dict:
    """只送给模型白话要点 + 星曜结构；不传古文原文，避免模型照抄。"""
    meta_in = body.get('meta') if isinstance(body.get('meta'), dict) else {}
    meta = {
        k: meta_in[k]
        for k in ('solarDate', 'gender', 'lunarDate', 'fiveElementsClass', 'soul', 'body')
        if meta_in.get(k)
    }
    if not meta.get('fiveElementsClass') and body.get('fiveElementsClass'):
        meta['fiveElementsClass'] = body['fiveElementsClass']

    decades = []
    for item in (body.get('decades') or [])[:12]:
        if not isinstance(item, dict):
            continue
        # 控制输出长度：默认写到约 85 岁，降低超时
        start = item.get('start')
        if isinstance(start, int) and start > 85:
            continue
        if len(decades) >= 8:
            break
        stars = item.get('stars') or []
        if not isinstance(stars, list):
            stars = []
        theme_palace = str(item.get('themePalace') or '')
        decades.append(
            {
                'range': item.get('range', ''),
                'start': item.get('start'),
                'end': item.get('end'),
                'lifeTheme': life_theme(theme_palace),
                'stars': [str(s) for s in stars[:8]],
            }
        )

    def corner(raw: object) -> dict:
        if not isinstance(raw, dict):
            return {'theme': '', 'stars': []}
        stars = raw.get('stars') or []
        if not isinstance(stars, list):
            stars = []
        return {
            'theme': life_theme(str(raw.get('palace') or '')),
            'stars': [str(s) for s in stars[:8]],
        }

    san_raw = body.get('sanFangMing')
    san_fang = None
    if isinstance(san_raw, dict):
        san_fang = {
            'self': corner(san_raw.get('self')),
            'opposite': corner(san_raw.get('opposite')),
            'triA': corner(san_raw.get('triA')),
            'triB': corner(san_raw.get('triB')),
        }

    notes: list[str] = []
    for item in (body.get('palaceReadings') or [])[:20]:
        if not isinstance(item, dict):
            continue
        v = clean_vernacular(str(item.get('vernacular') or ''))
        if len(v) >= 8:
            notes.append(trim_text(v, 90))

    pattern_names = []
    for item in (body.get('patterns') or [])[:6]:
        if isinstance(item, dict) and item.get('name'):
            pattern_names.append(str(item.get('name')))

    near_raw = body.get('nearTerm') if isinstance(body.get('nearTerm'), dict) else None
    near_term = None
    if near_raw:
        years_out = []
        for item in (near_raw.get('years') or [])[:11]:
            if not isinstance(item, dict):
                continue
            stars = item.get('stars') or []
            if not isinstance(stars, list):
                stars = []
            years_out.append(
                {
                    'year': item.get('year'),
                    'age': item.get('age'),
                    'isCurrent': bool(item.get('isCurrent')),
                    'decadeRange': item.get('decadeRange', ''),
                    'lifeTheme': life_theme(str(item.get('themePalace') or '')),
                    'stars': [str(s) for s in stars[:6]],
                }
            )
        near_term = {
            'fromYear': near_raw.get('fromYear'),
            'toYear': near_raw.get('toYear'),
            'currentYear': near_raw.get('currentYear'),
            'years': years_out,
        }

    return {
        'meta': meta,
        'sanFangMing': san_fang,
        'decades': decades,
        'nearTerm': near_term,
        'patternNames': pattern_names,
        'notes': notes[:16],
    }


def has_material(body: dict) -> bool:
    def count(key: str) -> int:
        val = body.get(key)
        return len(val) if isinstance(val, list) else 0

    return count('excerpts') + count('patterns') + count('palaceReadings') > 0


def violates_rules(text: str) -> bool:
    cleaned = DISCLAIMER_SPAN.sub('', text or '')
    return bool(FORBIDDEN.search(cleaned))


def violates_style(text: str) -> bool:
    raw = text or ''
    if STYLE_BAD.search(raw):
        return True
    if not STYLE_NEED_OVERVIEW.search(raw):
        return True
    if not STYLE_NEED_STAGES.search(raw):
        return True
    if not STYLE_NEED_NEAR.search(raw):
        return True
    return False


def call_model(payload: dict, extra_user: str = '') -> str:
    account_id = os.environ.get('CF_ACCOUNT_ID', '')
    token = os.environ.get('CF_API_TOKEN', '')
    model = os.environ.get('CF_AI_MODEL', '@cf/zai-org/glm-4.7-flash')
    base = os.environ.get(
        'CF_AI_BASE_URL',
        f'https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1' if account_id else '',
    )
    if not account_id or not token or not base:
        raise RuntimeError('Server missing CF_ACCOUNT_ID / CF_API_TOKEN configuration')

    user_content = json.dumps(payload, ensure_ascii=False, separators=(',', ':'))
    if extra_user:
        user_content = extra_user + '\n\n' + user_content

    req_body = json.dumps(
        {
            'model': model,
            'messages': [
                {'role': 'system', 'content': SYSTEM_PROMPT},
                {'role': 'user', 'content': user_content},
            ],
            'temperature': 0.3,
            'max_tokens': 2800,
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
        with request.urlopen(req, timeout=100) as resp:
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
            self._send_json(200, {'ok': True, 'prompt': 'vernacular-stages-near-v3'})
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
            # 默认不二次请求，避免双倍超时；格式不对直接拒绝，便于改提示语
            if violates_rules(content):
                sys.stderr.write('chart-ai: forbidden hit, reject\n')
                self._send_json(502, {'error': 'AI 輸出含不宜表述，已拒絕返回，請稍後重試。'})
                return
            if violates_style(content):
                sys.stderr.write('chart-ai: style bad, reject (no retry)\n')
                self._send_json(502, {'error': 'AI 輸出格式不符（需全白話總覽與年齡段），請稍後重試。'})
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
