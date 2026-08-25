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

const FORBIDDEN = /大吉|大凶|開運|改命|招財|破財|宜嫁娶|宜出行|命運好壞/g;

const SYSTEM_PROMPT = `你是「经盘」紫微斗数研习站的 AI 助手。根据用户消息里的 JSON，用现代白话把本盘已算出的信息串成连贯叙述，说明「这盘材料在谈怎样一个人」，而不是做目录式罗列。

硬性规则（违反即为失败）：
1. 只能使用 JSON 中出现的内容（meta、palaces 星曜、patterns、excerpts、palaceReadings），不得补充外部斗数知识或编造未给出的句子。
2. 禁止祸福预测、命运好坏判断、开运改命、宜忌行事等决策性建议。可描述材料如何谈性格倾向、处事风格、关注领域，但不得下吉凶断语。
3. 关键论断旁用括号标出处（格局名、章节名或宫位名）。有 vernacular 优先用白话；无白话则把 classic/text 译成白话后再串讲。
4. 禁止对无材料的宫位写「原文未载」或空列表。没有对应材料的宫位直接跳过，不要凑满十二宫。
5. 输出使用 Markdown，固定结构：
   ## 命盘概述
   （结合 meta 与命宫/身宫等星曜，用 3～6 句白话概括这盘在谈怎样一个人；点出命中格局名）
   ## 材料串讲
   （把 patterns、excerpts、palaceReadings 串成流畅段落，像在讲一个人，不要逐条编号堆砌）
   ## 分宫要点
   （仅写有 palaceReadings 或摘句能对应到的宫位；每宫 2～4 句白话。若无一宫有材料，可省略本节）
   ## 研习提示
   （提醒对照站内「命盘解读」「古籍原文」核对；本站只整理材料，不提供行事决策）`;

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
      reasoning_effort: 'low',
      chat_template_kwargs: { enable_thinking: false },
    }),
    signal: AbortSignal.timeout(300_000),
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
