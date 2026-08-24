#!/usr/bin/env node
/**
 * Thin proxy: POST /api/chart-ai-reading → Cloudflare Workers AI (OpenAI-compatible).
 * Secrets via env only — never commit CF_API_TOKEN.
 */
import http from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
loadEnv(join(__dirname, '.env'));

const PORT = Number(process.env.PORT || 8787);
const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID || '';
const CF_API_TOKEN = process.env.CF_API_TOKEN || '';
const CF_AI_MODEL = process.env.CF_AI_MODEL || '@cf/zai-org/glm-4.7-flash';
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || '*';

function resolveOrigin(req) {
  const reqOrigin = req.headers.origin || '';
  if (ALLOWED_ORIGIN === '*') return '*';
  const allowed = ALLOWED_ORIGIN.split(',').map((s) => s.trim()).filter(Boolean);
  if (reqOrigin && allowed.includes(reqOrigin)) return reqOrigin;
  return allowed[0] || '*';
}

const CF_AI_BASE =
  process.env.CF_AI_BASE_URL ||
  (CF_ACCOUNT_ID
    ? `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/ai/v1`
    : '');

const FORBIDDEN = /大吉|大凶|吉凶|開運|改命|招財|破財|宜嫁娶|宜出行|命運好壞|福禍|凶吉/g;

const SYSTEM_PROMPT = `你是「经盘」紫微斗数研习站的 AI 助手，职责 ONLY 是根据用户消息中的 JSON 材料，用现代白话整理、串联已命中的古籍原文与格局歌诀。

硬性规则（违反即为失败）：
1. 只能使用用户消息 JSON 里出现的字段内容，不得引用、推断或补充任何外部知识。
2. 禁止吉凶裁决、祸福预测、命运好坏、开运改命、宜忌行事等任何决策性建议。
3. 每一段白话整理必须标明对应出处（章节名、格局名或 palace 字段）。
4. 材料中没有对应说明的条目，必须写「原文未载」，不得编造。
5. 输出使用 Markdown，固定结构：
   ## 总览
   （仅复述本盘提供的宫位数、命中格局数、摘句规模等客观信息，不作断语）
   ## 分宫整理
   （按 JSON.palaces 顺序，结合 palaceReadings 与 excerpts 中与本宫相关材料）
   ## 格局整理
   （仅整理 JSON.patterns）
   ## 研习提示
   （提醒用户对照站内原文链接核对，强调本站不编吉凶断语）`;

function loadEnv(filePath) {
  if (!existsSync(filePath)) return;
  for (const line of readFileSync(filePath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = val;
  }
}

function sendJson(res, status, body, origin) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

function hasMaterial(body) {
  const n = (arr) => (Array.isArray(arr) ? arr.length : 0);
  return n(body.excerpts) + n(body.patterns) + n(body.palaceReadings) > 0;
}

function violatesRules(text) {
  return FORBIDDEN.test(text);
}

async function callModel(payload, retry = false) {
  if (!CF_ACCOUNT_ID || !CF_API_TOKEN || !CF_AI_BASE) {
    throw new Error('Server missing CF_ACCOUNT_ID / CF_API_TOKEN configuration');
  }

  const userContent = JSON.stringify(payload, null, 2);
  const res = await fetch(`${CF_AI_BASE}/chat/completions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${CF_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: CF_AI_MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT + (retry ? '\n\n上次输出含违禁表述，请严格删除吉凶类用语后重写。' : '') },
        { role: 'user', content: userContent },
      ],
      temperature: 0.3,
      max_tokens: 4096,
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = data?.errors?.[0]?.message || data?.error?.message || res.statusText;
    throw new Error(`Cloudflare AI error: ${msg}`);
  }

  const content = data?.choices?.[0]?.message?.content?.trim();
  if (!content) throw new Error('Empty model response');
  return content;
}

async function handleChartAiReading(body, origin, res) {
  let payload;
  try {
    payload = JSON.parse(body || '{}');
  } catch {
    sendJson(res, 400, { error: 'Invalid JSON body' }, origin);
    return;
  }

  if (!hasMaterial(payload)) {
    sendJson(res, 400, { error: '本盤材料不足，無法生成 AI 研習說明。' }, origin);
    return;
  }

  try {
    let content = await callModel(payload, false);
    if (violatesRules(content)) {
      content = await callModel(payload, true);
      if (violatesRules(content)) {
        sendJson(res, 502, { error: 'AI 輸出含不宜表述，已拒絕返回，請稍後重試。' }, origin);
        return;
      }
    }
    sendJson(res, 200, { content }, origin);
  } catch (err) {
    sendJson(res, 502, { error: err instanceof Error ? err.message : 'Upstream error' }, origin);
  }
}

const server = http.createServer(async (req, res) => {
  const origin = resolveOrigin(req);

  if (req.method === 'OPTIONS') {
    sendJson(res, 204, {}, origin);
    return;
  }

  const url = new URL(req.url || '/', `http://127.0.0.1:${PORT}`);

  if (req.method === 'POST' && url.pathname === '/api/chart-ai-reading') {
    const body = await readBody(req);
    await handleChartAiReading(body, origin, res);
    return;
  }

  if (req.method === 'GET' && url.pathname === '/health') {
    sendJson(res, 200, { ok: true }, origin);
    return;
  }

  sendJson(res, 404, { error: 'Not found' }, origin);
});

server.listen(PORT, () => {
  console.log(`chart-ai-proxy listening on :${PORT}`);
});
