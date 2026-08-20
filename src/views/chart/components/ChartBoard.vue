<template>
  <div class="chart-board-wrap" @wheel.prevent="handleWheel">
    <div
      ref="boardRef"
      class="chart-board"
      :style="{ transform: `scale(${scale})`, transformOrigin: 'center center' }"
      @touchstart="handleTouchStart"
      @touchmove.prevent="handleTouchMove"
    >
      <div
        v-for="palace in palaces"
        :key="palace.earthlyBranch"
        class="palace"
        :style="palaceStyle(palace.earthlyBranch)"
        :class="{ 'is-ming': palace.name === '命宫' || palace.name === '命宮', 'is-shen': palace.isBodyPalace }"
      >
        <div class="palace-head">
          <span>{{ display(palace.aliasName || palace.name, false) }}</span>
          <span>{{ palace.heavenlyStem }}{{ palace.earthlyBranch }}</span>
        </div>
        <p v-if="palace.decadal" class="decadal">
          {{ palace.decadal.range[0] }}–{{ palace.decadal.range[1] }}
        </p>
        <div class="stars">
          <button
            v-for="star in palace.majorStars"
            :key="star.name + star.scope"
            class="star major"
            :class="[brightnessClass(star.brightness), mutagenClass(star.mutagen)]"
            :title="previewOf(star.name)"
            @click="$emit('star-click', star.name)"
          >
            {{ display(star.name, false) }}
            <small v-if="star.brightness">{{ display(star.brightness, false) }}</small>
            <i v-if="star.mutagen">{{ display(star.mutagen, false) }}</i>
          </button>
          <button
            v-for="star in palace.minorStars"
            :key="star.name + 'm'"
            class="star minor"
            :title="previewOf(star.name)"
            @click="$emit('star-click', star.name)"
          >
            {{ display(star.name, false) }}
            <i v-if="star.mutagen">{{ display(star.mutagen, false) }}</i>
          </button>
          <button
            v-for="star in palace.adjectiveStars"
            :key="star.name + 'a'"
            class="star adj"
            :class="shaClass(star)"
            :title="previewOf(star.name)"
            @click="$emit('star-click', star.name)"
          >
            {{ display(star.name, false) }}
          </button>
        </div>
      </div>
      <div class="center-panel">
        <p>{{ display('五行局', false) }}　{{ display(fiveElementsClass, false) }}</p>
        <p>{{ display('命宮', false) }}　{{ display(soul, false) }}</p>
        <p>{{ display('身宮', false) }}　{{ display(body, false) }}</p>
        <p>{{ lunarDate }}</p>
        <p>{{ chineseDate }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';
import type { ChartPalace } from '@/types';
import { BRANCH_GRID, BRIGHTNESS_CLASS, MUTAGEN_CLASS } from '@/utils/chart';
import { useDisplayText } from '@/composables/useDisplayText';
import starData from '@/data/starDict.json';
import type { StarEntry } from '@/types';

export default defineComponent({
  name: 'ChartBoard',
  props: {
    palaces: { type: Array as PropType<ChartPalace[]>, required: true },
    fiveElementsClass: { type: String, default: '' },
    soul: { type: String, default: '' },
    body: { type: String, default: '' },
    lunarDate: { type: String, default: '' },
    chineseDate: { type: String, default: '' },
  },
  emits: {
    'star-click': (_name: string) => true,
  },
  setup() {
    const { display } = useDisplayText();
    const boardRef = ref<HTMLElement>();
    const scale = ref(1);
    const dict = (starData as { dict: Record<string, StarEntry>; alias: Record<string, string> });
    let lastDist = 0;

    const palaceStyle = (branch: string) => {
      const pos = BRANCH_GRID[branch];
      if (!pos) return {};
      return { gridColumn: String(pos.col), gridRow: String(pos.row) };
    };

    const brightnessClass = (b: string) => BRIGHTNESS_CLASS[b] || '';
    const mutagenClass = (m: string) => MUTAGEN_CLASS[m] || '';
    const shaClass = (star: { name: string; type: string }) =>
      ['擎羊', '陀羅', '陀罗', '火星', '鈴星', '铃星', '地劫', '天空'].some((n) => star.name.includes(n))
        ? 'sha'
        : '';

    const previewOf = (name: string) => {
      const key = dict.alias[name] || name;
      const entry = dict.dict[key];
      if (!entry) return name;
      return (entry.answer || entry.xiYiSaid || entry.fullText).slice(0, 48);
    };

    const handleWheel = (e: WheelEvent) => {
      scale.value = Math.min(2.2, Math.max(0.6, scale.value + (e.deltaY > 0 ? -0.08 : 0.08)));
    };

    const distance = (e: TouchEvent) => {
      if (e.touches.length < 2) return 0;
      const a = e.touches[0];
      const b = e.touches[1];
      return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) lastDist = distance(e);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 2) return;
      const dist = distance(e);
      if (!lastDist) {
        lastDist = dist;
        return;
      }
      scale.value = Math.min(2.2, Math.max(0.6, scale.value * (dist / lastDist)));
      lastDist = dist;
    };

    return {
      display,
      boardRef,
      scale,
      palaceStyle,
      brightnessClass,
      mutagenClass,
      shaClass,
      previewOf,
      handleWheel,
      handleTouchStart,
      handleTouchMove,
    };
  },
});
</script>

<style scoped>
.chart-board-wrap {
  overflow: auto;
  touch-action: none;
  padding: 8px;
}
.chart-board {
  display: grid;
  grid-template-columns: repeat(4, minmax(110px, 1fr));
  grid-template-rows: repeat(4, minmax(110px, 1fr));
  gap: 4px;
  min-width: 520px;
  min-height: 520px;
}
.palace {
  border: 1px solid var(--zw-line);
  background: var(--zw-paper);
  padding: 6px;
  font-size: 12px;
  min-height: 110px;
}
.palace.is-ming {
  /* 用 border 代替 inset box-shadow，html2canvas 对后者易出缝/错位 */
  border: 2px solid var(--zw-gold);
  padding: 5px;
}
.palace.is-shen {
  background: var(--zw-paper-gold);
}
.palace-head {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: var(--zw-primary);
}
.decadal {
  color: var(--zw-muted);
  font-size: 11px;
}
.stars {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 4px;
}
.star {
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 0 2px;
  font-family: inherit;
  color: var(--zw-ink);
}
.star.major {
  font-weight: 700;
  color: var(--zw-primary);
}
.star.minor {
  color: var(--zw-gold);
}
.star.sha {
  color: #8a2f2f;
}
html.theme-nightsky .star.sha {
  color: #e07a7a;
}
.star small,
.star i {
  font-style: normal;
  font-size: 10px;
  margin-left: 2px;
  color: var(--zw-muted);
}
.star.is-miao small,
.star.is-wang small {
  color: #7a5b12;
}
.star.is-xian small,
.star.is-bu small {
  color: #8a2f2f;
  opacity: 0.85;
}
.star.muta-lu i { color: #2d6a4f; }
.star.muta-quan i { color: #3a2e5c; }
.star.muta-ke i { color: #1d4e89; }
.star.muta-ji i { color: #8a2f2f; }
.center-panel {
  grid-column: 2 / 4;
  grid-row: 2 / 4;
  border: 1px solid var(--zw-gold);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: var(--zw-paper);
  padding: 8px;
  line-height: 1.8;
}
</style>
