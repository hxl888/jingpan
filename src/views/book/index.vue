<template>
  <div class="page-container book-page">
    <div class="book-chrome">
      <div class="toolbar flex flex-wrap items-center gap-2">
        <div class="volume-tabs">
          <button
            v-for="v in volumes"
            :key="v"
            type="button"
            class="vol-btn"
            :class="{ active: activeVolume === v }"
            @click="handleVolume(v)"
          >
            {{ display(volumeLabel(v), false) }}
          </button>
        </div>
        <SheetSelect
          v-model="activeId"
          class="book-toc-sheet md:hidden"
          :options="tocOptions"
          :title="display('選擇章節', false)"
          :placeholder="display('選擇章節', false)"
          :cancel-text="display('取消', false)"
          @change="handleJump"
        />
        <button
          v-if="volumeHasVernacular"
          type="button"
          class="vernacular-toggle"
          :class="{ active: showVernacular }"
          @click="showVernacular = !showVernacular"
        >
          {{ display(showVernacular ? '隱藏白話' : '顯示白話', false) }}
        </button>
      </div>

      <p v-if="volumeHasVernacular" class="vernacular-hint">
        {{
          display(
            showVernacular
              ? '白話用直白口语对照原文，便于阅读；图表／标签句可能无白话。'
              : '可点「显示白话」查看卷一正文的直白今译（赋文、论断、问答、歌诀等）。',
            false,
          )
        }}
      </p>

      <p class="source-hint">{{ display(sourceHint, false) }}</p>
    </div>

    <div class="book-layout">
      <nav class="toc hidden md:block">
        <h2 class="mb-2 font-semibold">{{ display(volumeLabel(activeVolume) + '目錄', false) }}</h2>
        <a
          v-for="item in filteredToc"
          :key="item.id"
          :href="`#${item.id}`"
          class="toc-link"
          :class="{ active: activeId === item.id }"
          @click.prevent="handleJump(item.id)"
        >
          {{ display(item.title, false) }}
        </a>
      </nav>
      <div
        ref="scrollerRef"
        class="reader rounded-lg border p-5"
        data-scroll-root
        :style="cardStyle"
        @scroll="handleScroll"
      >
        <section
          v-for="chapter in filteredChapters"
          :id="chapter.id"
          :key="chapter.id"
          class="chapter"
          :data-chapter-id="chapter.id"
        >
          <h2 class="mb-4 text-2xl font-semibold" style="color: var(--zw-primary)">
            {{ display(chapter.title, false) }}
          </h2>
          <ClassicText
            v-if="isChapterMounted(chapter.id)"
            :blocks="chapter.blocks"
            :chapter-id="chapter.id"
            :show-vernacular="showVernacular"
          />
          <div
            v-else
            class="chapter-placeholder"
            :style="{ minHeight: `${placeholderHeight(chapter)}px` }"
            aria-hidden="true"
          />
        </section>
      </div>
    </div>

    <button
      v-if="showFloatBack"
      type="button"
      class="float-back"
      :class="{ dragging: floatDragging }"
      :style="floatStyle"
      @pointerdown="handleFloatDown"
      @click="handleFloatClick"
    >
      <span class="float-ico" aria-hidden="true">‹</span>
      <span class="float-txt">{{ display(floatBackLabel, false) }}</span>
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, onUnmounted, ref, watch } from 'vue';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';
import bookToc from '@/data/bookToc.json';
import bookChapters from '@/data/bookChapters.json';
import bookSources from '@/data/bookSources.json';
import type { BookChapter, BookTocItem, BookVolume } from '@/types';
import ClassicText from '@/components/ClassicText.vue';
import SheetSelect from '@/components/sheet/SheetSelect.vue';
import { useChartSessionStore } from '@/store/chartSession';
import { useNamingSessionStore } from '@/store/namingSession';
import { useDisplayText } from '@/composables/useDisplayText';
import { chapterHasVernacular } from '@/utils/bookVernacular';

const volumes: BookVolume[] = [1, 2, 3];
const VERNACULAR_PREF_KEY = 'jingpan-book-vernacular';
/** 切卷时先挂载章数；滚动时再按需扩展 */
const INITIAL_MOUNT_COUNT = 2;
/** IntersectionObserver 预加载边距 */
const LAZY_ROOT_MARGIN = '800px 0px';
/** 命中一章时额外挂载前后邻居数 */
const LAZY_NEIGHBOR = 1;

function volumeLabel(v: BookVolume): string {
  return v === 1 ? '卷一' : v === 2 ? '卷二' : '卷三';
}

function placeholderHeight(chapter: BookChapter): number {
  const n = chapter.blocks?.length ?? 1;
  return Math.min(1800, Math.max(140, n * 42));
}

export default defineComponent({
  name: 'BookPage',
  components: { ClassicText, SheetSelect },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const session = useChartSessionStore();
    const namingSession = useNamingSessionStore();
    const { display } = useDisplayText();
    const toc = bookToc as BookTocItem[];
    const chapters = bookChapters as BookChapter[];
    const sources = bookSources as Record<string, { title: string; note: string; url: string }>;

    const resolveVolumeById = (id: string): BookVolume => {
      const item = toc.find((t) => t.id === id);
      return (item?.volume ?? 1) as BookVolume;
    };

    const hashId = route.hash.replace('#', '');
    const activeVolume = ref<BookVolume>(hashId ? resolveVolumeById(hashId) : 1);
    const filteredToc = computed(() => toc.filter((t) => (t.volume ?? 1) === activeVolume.value));
    const filteredChapters = computed(() =>
      chapters.filter((c) => (c.volume ?? 1) === activeVolume.value),
    );
    const tocOptions = computed(() =>
      filteredToc.value.map((item) => ({
        label: display(item.title, false),
        value: item.id,
      })),
    );
    const activeId = ref(filteredToc.value[0]?.id ?? '');
    const showVernacular = ref(sessionStorage.getItem(VERNACULAR_PREF_KEY) === '1');
    const scrollerRef = ref<HTMLElement>();
    const mountedChapterIds = ref<Set<string>>(new Set());
    const cardStyle = {
      background: 'var(--zw-paper)',
      borderColor: 'var(--zw-line)',
    };

    let chapterObserver: IntersectionObserver | null = null;

    const sourceHint = computed(() => {
      const key = activeVolume.value === 1 ? 'juan1' : activeVolume.value === 2 ? 'juan2' : 'juan3';
      const s = sources[key];
      if (!s) return '';
      return `${s.note} 底本：${s.url}`;
    });

    const volumeHasVernacular = computed(() =>
      filteredToc.value.some((item) => chapterHasVernacular(item.id)),
    );

    const isChapterMounted = (id: string) => mountedChapterIds.value.has(id);

    const ensureChaptersMounted = (...ids: string[]) => {
      let changed = false;
      const next = new Set(mountedChapterIds.value);
      for (const id of ids) {
        if (!id || next.has(id)) continue;
        next.add(id);
        changed = true;
      }
      if (changed) mountedChapterIds.value = next;
    };

    const seedMountedChapters = (preferId?: string) => {
      const list = filteredChapters.value;
      const seed = new Set<string>();
      for (const ch of list.slice(0, INITIAL_MOUNT_COUNT)) seed.add(ch.id);
      if (preferId) {
        const idx = list.findIndex((c) => c.id === preferId);
        if (idx >= 0) {
          for (
            let i = Math.max(0, idx - LAZY_NEIGHBOR);
            i <= Math.min(list.length - 1, idx + LAZY_NEIGHBOR);
            i += 1
          ) {
            seed.add(list[i].id);
          }
        }
      }
      mountedChapterIds.value = seed;
    };

    const mountAroundChapter = (id: string) => {
      const list = filteredChapters.value;
      const idx = list.findIndex((c) => c.id === id);
      if (idx < 0) {
        ensureChaptersMounted(id);
        return;
      }
      const ids: string[] = [];
      for (
        let i = Math.max(0, idx - LAZY_NEIGHBOR);
        i <= Math.min(list.length - 1, idx + LAZY_NEIGHBOR);
        i += 1
      ) {
        ids.push(list[i].id);
      }
      ensureChaptersMounted(...ids);
    };

    const observeChapters = async () => {
      await nextTick();
      chapterObserver?.disconnect();
      const rootEl = scrollerRef.value;
      // 正文已改为区域滚动：始终以阅读区为 IntersectionObserver root
      chapterObserver = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const id =
              (entry.target as HTMLElement).dataset.chapterId ||
              (entry.target as HTMLElement).id;
            if (id) mountAroundChapter(id);
          }
        },
        {
          root: rootEl || null,
          rootMargin: LAZY_ROOT_MARGIN,
          threshold: 0,
        },
      );
      for (const chapter of filteredChapters.value) {
        const el = document.getElementById(chapter.id);
        if (el) chapterObserver.observe(el);
      }
    };

    watch(showVernacular, (on) => {
      sessionStorage.setItem(VERNACULAR_PREF_KEY, on ? '1' : '0');
    });

    watch(filteredChapters, () => {
      void observeChapters();
    });

    // 首屏同步挂载，避免先闪占位再补正文
    seedMountedChapters(hashId || filteredToc.value[0]?.id);

    const handleJump = async (id: string | number) => {
      const sid = String(id);
      activeId.value = sid;
      mountAroundChapter(sid);
      await nextTick();
      const el = document.getElementById(sid);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleVolume = async (v: BookVolume) => {
      if (activeVolume.value === v) return;
      activeVolume.value = v;
      const first = toc.find((t) => (t.volume ?? 1) === v);
      activeId.value = first?.id ?? '';
      seedMountedChapters(first?.id);
      await nextTick();
      scrollerRef.value?.scrollTo({ top: 0, behavior: 'auto' });
      void observeChapters();
    };

    const handleScroll = () => {
      const root = scrollerRef.value;
      if (!root) return;
      let current = filteredToc.value[0]?.id ?? '';
      for (const item of filteredToc.value) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - 120 <= 0) current = item.id;
      }
      activeId.value = current;
    };

    const fromNaming = computed(
      () => route.query.from === 'naming' || namingSession.isFromNaming(),
    );
    const fromChart = computed(
      () => route.query.from === 'chart' || session.isFromChart(),
    );
    const showFloatBack = computed(() => fromChart.value || fromNaming.value);
    const floatBackLabel = computed(() =>
      fromNaming.value ? '返回起名詳情' : '返回排盤',
    );

    const floatLeft = ref(0);
    const floatTop = ref(0);
    const floatDragging = ref(false);
    const floatMoved = ref(false);
    let floatOrigin = { x: 0, y: 0, left: 0, top: 0 };

    const floatStyle = computed(() => ({
      left: `${floatLeft.value}px`,
      top: `${floatTop.value}px`,
    }));

    const clampFloat = (left: number, top: number) => {
      const w = 148;
      const h = 44;
      const maxL = Math.max(8, window.innerWidth - w - 8);
      const maxT = Math.max(8, window.innerHeight - h - 8);
      return {
        left: Math.min(maxL, Math.max(8, left)),
        top: Math.min(maxT, Math.max(72, top)),
      };
    };

    /** 默认贴在阅读区右缘中部偏上（接近截图标注位置） */
    const placeFloatDefault = () => {
      const reader = scrollerRef.value?.getBoundingClientRect();
      const w = 148;
      const h = 44;
      let left: number;
      let top: number;
      if (reader && reader.width > 40) {
        left = reader.right - w - 12;
        top = reader.top + Math.max(72, reader.height * 0.28) - h / 2;
      } else {
        left = window.innerWidth - w - 20;
        top = Math.round(window.innerHeight * 0.38);
      }
      const next = clampFloat(left, top);
      floatLeft.value = next.left;
      floatTop.value = next.top;
    };

    const handleFloatMove = (e: PointerEvent) => {
      const dx = e.clientX - floatOrigin.x;
      const dy = e.clientY - floatOrigin.y;
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) floatMoved.value = true;
      const next = clampFloat(floatOrigin.left + dx, floatOrigin.top + dy);
      floatLeft.value = next.left;
      floatTop.value = next.top;
    };

    const handleFloatUp = (e: PointerEvent) => {
      floatDragging.value = false;
      window.removeEventListener('pointermove', handleFloatMove);
      window.removeEventListener('pointerup', handleFloatUp);
      try {
        (e.target as HTMLElement)?.releasePointerCapture?.(e.pointerId);
      } catch {
        /* ignore */
      }
    };

    const handleFloatDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      floatDragging.value = true;
      floatMoved.value = false;
      floatOrigin = {
        x: e.clientX,
        y: e.clientY,
        left: floatLeft.value,
        top: floatTop.value,
      };
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
      window.addEventListener('pointermove', handleFloatMove);
      window.addEventListener('pointerup', handleFloatUp);
    };

    const handleBack = () => {
      if (window.history.length > 1) {
        router.back();
        return;
      }
      void router.push({ path: fromNaming.value ? '/naming' : '/chart' });
    };

    const handleFloatClick = () => {
      if (floatMoved.value) return;
      handleBack();
    };

    watch(
      () => route.hash,
      (hash) => {
        const id = hash.replace('#', '');
        if (!id) return;
        const v = resolveVolumeById(id);
        if (v !== activeVolume.value) {
          activeVolume.value = v;
          seedMountedChapters(id);
        }
        void handleJump(id);
      },
    );

    const keepFloatInView = () => {
      const next = clampFloat(floatLeft.value, floatTop.value);
      floatLeft.value = next.left;
      floatTop.value = next.top;
    };

    const onViewportChange = () => {
      keepFloatInView();
      void observeChapters();
    };

    onMounted(() => {
      window.addEventListener('resize', onViewportChange, { passive: true });
      const hash = route.hash.replace('#', '');
      if (hash) {
        activeVolume.value = resolveVolumeById(hash);
        seedMountedChapters(hash);
        void handleJump(hash);
      } else if (filteredToc.value[0]) {
        activeId.value = filteredToc.value[0].id;
        seedMountedChapters(filteredToc.value[0].id);
      } else {
        seedMountedChapters();
      }
      void observeChapters();
      void nextTick(() => {
        if (showFloatBack.value) placeFloatDefault();
      });
    });

    watch(showFloatBack, (on) => {
      if (on) void nextTick(placeFloatDefault);
    });

    onUnmounted(() => {
      chapterObserver?.disconnect();
      chapterObserver = null;
      window.removeEventListener('resize', onViewportChange);
      window.removeEventListener('pointermove', handleFloatMove);
      window.removeEventListener('pointerup', handleFloatUp);
    });

    onBeforeRouteLeave((to) => {
      if (to.name !== 'chart') session.clearFromChart();
      if (to.name !== 'naming') namingSession.clearFromNaming();
    });

    return {
      toc,
      volumes,
      volumeLabel,
      activeVolume,
      filteredToc,
      tocOptions,
      filteredChapters,
      activeId,
      scrollerRef,
      display,
      cardStyle,
      sourceHint,
      handleJump,
      handleVolume,
      handleScroll,
      showVernacular,
      volumeHasVernacular,
      isChapterMounted,
      placeholderHeight,
      showFloatBack,
      floatBackLabel,
      floatStyle,
      floatDragging,
      handleFloatDown,
      handleFloatClick,
      handleBack,
    };
  },
});
</script>

<style scoped>
.book-page {
  display: flex;
  flex-direction: column;
  gap: 0;
  height: calc(100dvh - var(--zw-header-h, 58px));
  max-height: calc(100dvh - var(--zw-header-h, 58px));
  min-height: 0;
  overflow: hidden;
  box-sizing: border-box;
  padding-top: 12px;
  padding-bottom: 16px;
}
.book-chrome {
  flex: none;
  z-index: 25;
  margin: 0 -2px 10px;
  padding: 0 2px 10px;
  background: color-mix(in srgb, var(--zw-bg) 94%, transparent);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid color-mix(in srgb, var(--zw-line) 70%, transparent);
}
.book-layout {
  flex: 1 1 auto;
  min-height: 0;
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 16px;
  align-items: stretch;
}
.book-toc-sheet {
  width: 100%;
}
.toolbar {
  margin-bottom: 0;
}
.vernacular-toggle {
  border: 1px solid var(--zw-line);
  background: transparent;
  color: var(--zw-ink);
  padding: 6px 12px;
  font-family: inherit;
  font-size: 13px;
  letter-spacing: 0.08em;
  cursor: pointer;
  border-radius: 6px;
  white-space: nowrap;
}
.vernacular-toggle.active {
  border-color: var(--zw-gold);
  color: var(--zw-primary);
  background: color-mix(in srgb, var(--zw-paper) 70%, var(--zw-gold));
}
.vernacular-hint {
  margin: 8px 0 0;
  font-size: 12px;
  line-height: 1.6;
  color: color-mix(in srgb, var(--zw-ink) 70%, var(--zw-muted));
}
.volume-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-right: auto;
}
.vol-btn {
  border: 1px solid var(--zw-line);
  background: transparent;
  color: var(--zw-ink);
  padding: 6px 12px;
  font-family: inherit;
  font-size: 13px;
  letter-spacing: 0.12em;
  cursor: pointer;
  border-radius: 6px;
}
.vol-btn.active {
  border-color: var(--zw-gold);
  color: var(--zw-primary);
  font-weight: 600;
  background: color-mix(in srgb, var(--zw-paper) 70%, var(--zw-gold));
}
.source-hint {
  margin: 8px 0 0;
  font-size: 12px;
  line-height: 1.6;
  color: color-mix(in srgb, var(--zw-ink) 72%, transparent);
  word-break: break-all;
}
.toc {
  min-height: 0;
  max-height: 100%;
  overflow: auto;
  padding-right: 8px;
}
.toc-link {
  display: block;
  padding: 6px 8px;
  color: var(--zw-ink);
  text-decoration: none;
  border-left: 2px solid transparent;
  font-size: 13px;
  line-height: 1.4;
}
.toc-link.active {
  border-left-color: var(--zw-gold);
  color: var(--zw-primary);
  font-weight: 600;
}
.reader {
  min-height: 0;
  height: 100%;
  max-height: none;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}
.chapter {
  scroll-margin-top: 12px;
  margin-bottom: 48px;
}
.chapter-placeholder {
  border-radius: 6px;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--zw-line) 35%, transparent),
    transparent 72%
  );
}
.float-back {
  position: fixed;
  z-index: 65;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-height: 40px;
  padding: 8px 14px 8px 10px;
  border: 1px solid color-mix(in srgb, var(--zw-gold) 70%, var(--zw-line));
  border-radius: 999px;
  background: color-mix(in srgb, var(--zw-paper) 92%, var(--zw-gold));
  color: var(--zw-primary);
  font-family: inherit;
  font-size: 13px;
  letter-spacing: 0.14em;
  line-height: 1.2;
  cursor: grab;
  touch-action: none;
  user-select: none;
  box-shadow:
    0 1px 0 color-mix(in srgb, #fff 55%, transparent) inset,
    0 8px 22px rgba(44, 36, 22, 0.14);
  backdrop-filter: blur(8px);
  transition: box-shadow 0.15s ease, transform 0.15s ease, background 0.15s ease;
}
.float-back .float-ico {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.35rem;
  height: 1.35rem;
  border-radius: 50%;
  background: color-mix(in srgb, var(--zw-gold) 28%, transparent);
  color: var(--zw-primary);
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1;
}
.float-back .float-txt {
  white-space: nowrap;
}
.float-back.dragging {
  cursor: grabbing;
  transform: scale(1.03);
  box-shadow: 0 10px 28px rgba(44, 36, 22, 0.22);
}
.float-back:hover,
.float-back:focus-visible {
  color: var(--zw-ink);
  background: var(--zw-paper);
  outline: none;
}
.float-back:focus-visible {
  box-shadow:
    0 0 0 2px color-mix(in srgb, var(--zw-gold) 55%, transparent),
    0 8px 22px rgba(44, 36, 22, 0.14);
}
@media (max-width: 768px) {
  .book-page {
    /* 给底部「盘」悬浮钮留空，避免挡最后几行 */
    padding-bottom: calc(72px + env(safe-area-inset-bottom));
  }
  .book-layout {
    grid-template-columns: 1fr;
  }
  .volume-tabs {
    width: 100%;
  }
}
</style>
