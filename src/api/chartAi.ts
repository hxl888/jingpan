import type { ChartAiPayload } from '@/utils/chartAiPayload';

const API_URL = (import.meta.env.VITE_CHART_AI_API as string | undefined)?.trim() || '';

export function isChartAiConfigured(): boolean {
  return Boolean(API_URL);
}

export async function fetchChartAiReading(payload: ChartAiPayload): Promise<string> {
  if (!API_URL) {
    throw new Error('AI 研習服務未配置，請聯繫站點管理員。');
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const data = (await res.json().catch(() => ({}))) as { content?: string; error?: string };

  if (!res.ok) {
    throw new Error(data.error || `請求失敗（${res.status}）`);
  }

  if (!data.content?.trim()) {
    throw new Error('AI 返回內容為空，請稍後重試。');
  }

  return data.content.trim();
}
