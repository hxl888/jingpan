import { ElMessage } from 'element-plus';

export async function copyText(text: string): Promise<void> {
  const value = text.trim();
  if (!value) {
    ElMessage.warning('沒有可複製的文本');
    return;
  }
  try {
    await navigator.clipboard.writeText(value);
    ElMessage.success('已複製原文');
  } catch {
    const ta = document.createElement('textarea');
    ta.value = value;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    ElMessage.success('已複製原文');
  }
}

export function copySelection(): void {
  const sel = window.getSelection()?.toString() ?? '';
  void copyText(sel);
}
