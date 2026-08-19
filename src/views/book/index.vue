<template>
  <div class="page-container book-page">
    <div v-if="showBack" class="back-bar">
      <button type="button" class="back-btn" @click="handleBack">
        {{ display('← 返回排盤', false) }}
      </button>
    </div>
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
      <el-select
        v-model="activeId"
        class="md:hidden w-full"
        :placeholder="display('選擇章節', false)"
        @change="handleJump"
      >
        <el-option
          v-for="item in filteredToc"
          :key="item.id"
          :label="display(item.title, false)"
          :value="item.id"
        />
      </el-select>
      <el-button size="small" @click="store.bumpFont(-1)">A-</el-button>
      <el-button size="small" @click="store.bumpFont(1)">A+</el-button>
      <el-button size="small" @click="store.toggleScript">{{ display('簡繁切換', false) }}</el-button>
      <el-button size="small" @click="handleCopy">{{ display('複製選中', false) }}</el-button>
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
      <div ref="scrollerRef" class="reader rounded-lg border p-5" :style="cardStyle" @scroll="handleScroll">
        <section v-for="chapter in filteredChapters" :id="chapter.id" :key="chapter.id" class="chapter">
          <h2 class="mb-4 text-2xl font-semibold" style="color: var(--zw-primary)">
            {{ display(chapter.title, false) }}
          </h2>
          <ClassicText :blocks="chapter.blocks" />
        </section>
      </div>
    </div>

    <button
      v-show="showToTop"
      type="button"
      class="to-top"
      :aria-label="display('回到頂部', false)"
      @click="handleToTop"
    >
      {{ display('頂', false) }}
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
import { useAppStore } from '@/store/app';
import { useChartSessionStore } from '@/store/chartSession';
import { useDisplayText } from '@/composables/useDisplayText';
import { copySelection } from '@/utils/copy';

const volumes: BookVolume[] = [1, 2, 3];

function volumeLabel(v: BookVolume): string {
  return v === 1 ? '卷一' : v === 2 ? '卷二' : '卷三';
}

export default defineComponent({
  name: 'BookPage',
  components: { ClassicText },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useAppStore();
    const session = useChartSessionStore();
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
    const activeId = ref(filteredToc.value[0]?.id ?? '');
    const scrollerRef = ref<HTMLElement>();
    const showToTop = ref(false);
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

    const handleJump = async (id: string) => {
      activeId.value = id;
      await nextTick();
      const el = document.getElementById(id);
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

    const updateToTop = () => {
      const readerTop = scrollerRef.value?.scrollTop ?? 0;
      showToTop.value = readerTop > 240 || window.scrollY > 240;
    };

    const handleToTop = () => {
      scrollerRef.value?.scrollTo({ top: 0, behavior: 'smooth' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      updateToTop();
    };

    const handleCopy = () => copySelection();

    const showBack = computed(() => route.query.from === 'chart' || session.isFromChart());

    const handleBack = () => {
      if (window.history.length > 1) {
        router.back();
        return;
      }
      void router.push({ path: '/chart' });
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

    onMounted(() => {
      window.addEventListener('scroll', updateToTop, { passive: true });
      const hash = route.hash.replace('#', '');
      if (hash) {
        activeVolume.value = resolveVolumeById(hash);
        void handleJump(hash);
      } else if (filteredToc.value[0]) {
        activeId.value = filteredToc.value[0].id;
      }
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', updateToTop);
    });

    onBeforeRouteLeave((to) => {
      if (to.name !== 'chart') session.clearFromChart();
    });

    return {
      toc,
      volumes,
      volumeLabel,
      activeVolume,
      filteredToc,
      filteredChapters,
      activeId,
      scrollerRef,
      store,
      display,
      cardStyle,
      sourceHint,
      showToTop,
      handleToTop,
      handleJump,
      handleVolume,
      handleScroll,
      handleCopy,
      showBack,
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
.back-bar {
  margin-bottom: 12px;
}
.back-btn {
  border: 1px solid var(--zw-gold);
  background: transparent;
  color: var(--zw-ink);
  padding: 8px 14px;
  font-family: inherit;
  font-size: 14px;
  letter-spacing: 0.16em;
  cursor: pointer;
  border-radius: 8px;
}
.back-btn:hover,
.back-btn:focus-visible {
  color: var(--zw-primary);
  background: color-mix(in srgb, var(--zw-paper) 70%, var(--zw-gold));
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
.to-top {
  position: fixed;
  right: 16px;
  bottom: calc(24px + env(safe-area-inset-bottom));
  z-index: 60;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--zw-gold);
  background: color-mix(in srgb, var(--zw-paper) 88%, var(--zw-gold));
  color: var(--zw-primary);
  font-family: inherit;
  font-size: 14px;
  letter-spacing: 0.12em;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(44, 36, 22, 0.16);
}
.to-top:hover,
.to-top:focus-visible {
  color: var(--zw-ink);
  background: var(--zw-paper);
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
