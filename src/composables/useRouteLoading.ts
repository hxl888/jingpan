import { ref, readonly } from 'vue';

export type SkeletonType = 'list' | 'detail' | 'tool';

const isLoading = ref(false);
const skeletonType = ref<SkeletonType>('list');
const progress = ref(0);

let generation = 0;
let climbTimer: ReturnType<typeof setInterval> | null = null;
let finishTimer: ReturnType<typeof setTimeout> | null = null;

function clearTimers() {
  if (climbTimer != null) {
    clearInterval(climbTimer);
    climbTimer = null;
  }
  if (finishTimer != null) {
    clearTimeout(finishTimer);
    finishTimer = null;
  }
}

function startClimb(gen: number) {
  clearTimers();
  progress.value = 0;
  climbTimer = setInterval(() => {
    if (gen !== generation) return;
    if (progress.value >= 80) return;
    const step = progress.value < 40 ? 8 : progress.value < 65 ? 4 : 1.5;
    progress.value = Math.min(80, progress.value + step);
  }, 120);
}

function start(type: SkeletonType = 'list') {
  generation += 1;
  const gen = generation;
  clearTimers();
  skeletonType.value = type;
  isLoading.value = true;
  startClimb(gen);
}

function done() {
  const gen = generation;
  clearTimers();
  // 骨架立刻收起，进度条再冲到 100% 后淡出
  isLoading.value = false;
  progress.value = 100;
  finishTimer = setTimeout(() => {
    if (gen !== generation) return;
    progress.value = 0;
    finishTimer = null;
  }, 180);
}

function fail() {
  generation += 1;
  clearTimers();
  isLoading.value = false;
  progress.value = 0;
}

/** 路由加载态（模块单例，供 router 钩子与组件共用） */
export function useRouteLoading() {
  return {
    isLoading: readonly(isLoading),
    skeletonType: readonly(skeletonType),
    progress: readonly(progress),
    start,
    done,
    fail,
  };
}
