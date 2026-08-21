<template>
  <div class="page-container book-page">
    <div class="toolbar mb-4 flex flex-wrap items-center gap-2">
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
    </div>

    <p class="source-hint">{{ display(sourceHint, false) }}</p>

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
        <section v-for="chapter in filteredChapters" :id="chapter.id" :key="chapter.id" class="chapter">
          <h2 class="mb-4 text-2xl font-semibold" style="color: var(--zw-primary)">
            {{ display(chapter.title, false) }}
          </h2>
          <ClassicText :blocks="chapter.blocks" />
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

const volumes: BookVolume[] = [1, 2, 3];

function volumeLabel(v: BookVolume): string {
  return v === 1 ? '卷一' : v === 2 ? '卷二' : '卷三';
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
    const scrollerRef = ref<HTMLElement>();
    const cardStyle = {
      background: 'var(--zw-paper)',
      borderColor: 'var(--zw-line)',
    };

    const sourceHint = computed(() => {
      const key = activeVolume.value === 1 ? 'juan1' : activeVolume.value === 2 ? 'juan2' : 'juan3';
      const s = sources[key];
      if (!s) return '';
      return `${s.note} 底本：${s.url}`;
    });

    const handleJump = async (id: string | number) => {
      const sid = String(id);
      activeId.value = sid;
      await nextTick();
      const el = document.getElementById(sid);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleVolume = async (v: BookVolume) => {
      if (activeVolume.value === v) return;
      activeVolume.value = v;
      const first = toc.find((t) => (t.volume ?? 1) === v);
      activeId.value = first?.id ?? '';
      await nextTick();
      // 只复位阅读区；勿 scrollIntoView 首章，否则 H5 整页会跟着跳下去
      scrollerRef.value?.scrollTo({ top: 0, behavior: 'auto' });
      const tabs = document.querySelector('.book-page .volume-tabs');
      if (tabs) {
        const y = tabs.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: Math.max(0, y), behavior: 'auto' });
      }
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
        if (v !== activeVolume.value) activeVolume.value = v;
        void handleJump(id);
      },
    );

    const keepFloatInView = () => {
      const next = clampFloat(floatLeft.value, floatTop.value);
      floatLeft.value = next.left;
      floatTop.value = next.top;
    };

    onMounted(() => {
      window.addEventListener('resize', keepFloatInView, { passive: true });
      const hash = route.hash.replace('#', '');
      if (hash) {
        activeVolume.value = resolveVolumeById(hash);
        void handleJump(hash);
      } else if (filteredToc.value[0]) {
        activeId.value = filteredToc.value[0].id;
      }
      void nextTick(() => {
        if (showFloatBack.value) placeFloatDefault();
      });
    });

    watch(showFloatBack, (on) => {
      if (on) void nextTick(placeFloatDefault);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', keepFloatInView);
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
.book-layout {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 16px;
  align-items: start;
}
.book-toc-sheet {
  width: 100%;
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
  margin: 0 0 12px;
  font-size: 12px;
  line-height: 1.6;
  color: color-mix(in srgb, var(--zw-ink) 72%, transparent);
  word-break: break-all;
}
.toc {
  position: sticky;
  top: 88px;
  max-height: calc(100vh - 120px);
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
  max-height: calc(100vh - 180px);
  overflow: auto;
}
.chapter {
  scroll-margin-top: 88px;
  margin-bottom: 48px;
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
  .book-layout {
    grid-template-columns: 1fr;
  }
  .reader {
    max-height: none;
  }
  .volume-tabs {
    width: 100%;
  }
}
</style>
