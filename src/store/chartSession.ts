import { defineStore } from 'pinia';
import type { ChartFormValue } from '@/views/chart/components/ChartForm.vue';

const STORAGE_KEY = 'zw-chart-session';

export interface ChartSessionSnapshot {
  form: ChartFormValue;
  targetDate: string;
  trueSolarNote: string;
}

interface PersistedSession extends ChartSessionSnapshot {
  scrollY: number;
}

function loadSession(): PersistedSession | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PersistedSession;
  } catch {
    return null;
  }
}

export const useChartSessionStore = defineStore('chartSession', () => {
  const restored = loadSession();
  let snapshot: ChartSessionSnapshot | null = restored
    ? {
        form: restored.form,
        targetDate: restored.targetDate,
        trueSolarNote: restored.trueSolarNote,
      }
    : null;
  let scrollY = restored?.scrollY ?? 0;
  let fromChart = false;

  function persist() {
    if (!snapshot) return;
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...snapshot, scrollY } satisfies PersistedSession),
    );
  }

  function saveSnapshot(next: ChartSessionSnapshot) {
    snapshot = {
      form: { ...next.form },
      targetDate: next.targetDate,
      trueSolarNote: next.trueSolarNote,
    };
    persist();
  }

  function saveScroll() {
    scrollY = window.scrollY;
    persist();
  }

  function markFromChart() {
    fromChart = true;
    saveScroll();
  }

  function clearFromChart() {
    fromChart = false;
  }

  function getSnapshot() {
    return snapshot;
  }

  function getScrollY() {
    return scrollY;
  }

  function isFromChart() {
    return fromChart;
  }

  return {
    saveSnapshot,
    saveScroll,
    markFromChart,
    clearFromChart,
    getSnapshot,
    getScrollY,
    isFromChart,
  };
});
