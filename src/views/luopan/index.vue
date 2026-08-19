<template>
  <div class="page-container luopan-page">
    <h1>{{ display('羅盤', false) }}</h1>
    <p class="lead">
      {{
        display(
          '研習地盤·廿四山陰陽、後天先天對照、洛書九數。紅標為當前朝向，N 隨子山指向磁北。可撥盤。',
          false,
        )
      }}
    </p>
    <LuopanDisk :heading="heading" @dragstart="handleDragStart" @drag="handleDrag" />
    <div class="readout">
      <strong>{{ headingText }}°</strong>
      <span>{{ display(current.dir, false) }}</span>
      <span>{{ display(mainLine, false) }}</span>
      <span class="sub">{{ display(guaLine, false) }}</span>
    </div>
    <div class="actions">
      <button
        v-if="needsPermission || (isMobile && !live)"
        type="button"
        class="start"
        @click="handleStart"
      >
        {{ display(live ? '指南針已開啟' : '開啟指南針', false) }}
      </button>
      <button v-if="paused && supported" type="button" class="start" @click="handleFollow">
        {{ display('跟隨指南針', false) }}
      </button>
    </div>
    <p v-if="denied" class="warn">{{ display('未獲得方向感應權限，可在系統設定中允許，亦可撥盤對照。', false) }}</p>
    <p v-if="!supported" class="hint">{{ display('此裝置沒有方向感應器，可撥盤子山對照。', false) }}</p>
    <p v-else-if="!live && !paused" class="hint">
      {{ display('手機請開啟指南針；電腦無磁感應，可撥盤作廿四山對照。', false) }}
    </p>
    <p class="hint">
      {{
        display(
          '電子羅盤受磁場干擾，不能替代實物羅盤實測。陰陽取三合地盤常例，先天後天僅方位對照。本頁不作風水斷事。',
          false,
        )
      }}
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import LuopanDisk from './components/LuopanDisk.vue';
import { useCompassHeading } from '@/composables/useCompassHeading';
import { useDisplayText } from '@/composables/useDisplayText';
import { useDevice } from '@/composables/useDevice';
import { houTianAt, LUOSHU_HAN, mountainAt, xianTianAt } from '@/utils/luopan';

export default defineComponent({
  name: 'LuopanPage',
  components: { LuopanDisk },
  setup() {
    const { display } = useDisplayText();
    const { isMobile } = useDevice();
    const {
      heading,
      live,
      paused,
      needsPermission,
      denied,
      supported,
      requestStart,
      pause,
      resume,
      setHeading,
    } = useCompassHeading();
    const current = computed(() => mountainAt(heading.value));
    const hou = computed(() => houTianAt(heading.value));
    const xian = computed(() => xianTianAt(heading.value));
    const headingText = computed(() => heading.value.toFixed(0).padStart(3, '0'));
    const mainLine = computed(() => {
      const m = current.value;
      const yinYang = m.yinYang === 'yang' ? '陽山' : '陰山';
      return `${m.name}山 · ${yinYang} · ${hou.value.name}卦 · 洛書${LUOSHU_HAN[hou.value.luoshu]}`;
    });
    const guaLine = computed(() => `後天${hou.value.name} · 先天${xian.value.name}`);
    const _methods = {
      handleStart() {
        resume();
        void requestStart();
      },
      handleDragStart() {
        pause();
      },
      handleDrag(deg: number) {
        setHeading(deg);
      },
      handleFollow() {
        resume();
        void requestStart();
      },
    };
    return {
      display,
      heading,
      live,
      paused,
      needsPermission,
      denied,
      supported,
      isMobile,
      current,
      headingText,
      mainLine,
      guaLine,
      ..._methods,
    };
  },
});
</script>

<style scoped>
.luopan-page {
  text-align: center;
  max-width: 720px;
}
h1 {
  margin: 0 0 8px;
  letter-spacing: 0.28em;
  font-size: 28px;
}
.lead,
.hint,
.warn {
  color: var(--zw-muted);
  font-size: 13px;
  line-height: 1.7;
  letter-spacing: 0.06em;
}
.warn {
  color: #b42318;
}
.readout {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 18px 0 12px;
  letter-spacing: 0.18em;
}
.readout strong {
  font-size: 40px;
  color: var(--zw-primary);
  letter-spacing: 0.08em;
  font-variant-numeric: tabular-nums;
}
.readout .sub {
  font-size: 13px;
  color: var(--zw-gold);
  letter-spacing: 0.12em;
}
.start {
  border: 1px solid var(--zw-gold);
  background: color-mix(in srgb, var(--zw-paper) 70%, var(--zw-gold));
  color: var(--zw-ink);
  padding: 10px 22px;
  border-radius: 999px;
  font-family: inherit;
  letter-spacing: 0.16em;
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
</style>
