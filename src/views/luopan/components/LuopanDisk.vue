<template>
  <div class="disk" role="img" :aria-label="display('廿四山羅盤', false)">
    <svg class="plate" viewBox="0 0 400 400" :style="{ transform: `rotate(${-heading}deg)` }">
      <circle cx="200" cy="200" r="198" fill="var(--zw-paper)" stroke="var(--zw-gold)" />
      <circle cx="200" cy="200" r="168" fill="none" stroke="var(--zw-line)" />
      <circle cx="200" cy="200" r="128" fill="none" stroke="var(--zw-gold)" />
      <circle cx="200" cy="200" r="92" fill="none" stroke="var(--zw-line)" />
      <g v-for="tick in 72" :key="tick">
        <line
          :x1="200"
          :y1="tick % 6 === 0 ? 8 : 14"
          :x2="200"
          :y2="tick % 2 === 0 ? 22 : 18"
          stroke="var(--zw-ink)"
          :stroke-width="tick % 6 === 0 ? 1.4 : 0.7"
          :transform="`rotate(${tick * 5} 200 200)`"
        />
      </g>
      <text
        v-for="deg in [0, 90, 180, 270]"
        :key="`d-${deg}`"
        x="200"
        y="34"
        text-anchor="middle"
        fill="var(--zw-muted)"
        font-size="11"
        :transform="`rotate(${deg} 200 200)`"
      >
        {{ deg }}
      </text>
      <g v-for="item in mountains" :key="item.name">
        <text
          x="200"
          y="58"
          text-anchor="middle"
          :fill="item.deg % 90 === 0 ? '#b42318' : 'var(--zw-ink)'"
          font-size="15"
          font-weight="600"
          :transform="`rotate(${item.deg} 200 200)`"
        >
          {{ display(item.name, false) }}
        </text>
      </g>
      <g v-for="item in bagua" :key="item.name">
        <text
          x="200"
          y="108"
          text-anchor="middle"
          fill="var(--zw-primary)"
          font-size="13"
          :transform="`rotate(${item.deg} 200 200)`"
        >
          {{ display(item.name, false) }}
        </text>
      </g>
      <text x="200" y="18" text-anchor="middle" fill="#b42318" font-size="11" font-weight="700">N</text>
      <circle cx="200" cy="200" r="54" fill="color-mix(in srgb, var(--zw-paper) 70%, var(--zw-gold))" stroke="var(--zw-gold)" />
    </svg>
    <span class="cross" aria-hidden="true" />
    <span class="needle" aria-hidden="true" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { BAGUA_RING, MOUNTAINS } from '@/utils/luopan';
import { useDisplayText } from '@/composables/useDisplayText';

export default defineComponent({
  name: 'LuopanDisk',
  props: {
    heading: { type: Number, required: true },
  },
  setup() {
    const { display } = useDisplayText();
    return { display, mountains: MOUNTAINS, bagua: BAGUA_RING };
  },
});
</script>

<style scoped>
.disk {
  position: relative;
  width: min(88vw, 420px);
  aspect-ratio: 1;
  margin: 0 auto;
}
.plate {
  width: 100%;
  height: 100%;
  transform-origin: 50% 50%;
  will-change: transform;
  filter: drop-shadow(0 8px 18px rgba(44, 36, 22, 0.12));
}
.cross,
.needle {
  position: absolute;
  left: 50%;
  top: 50%;
  pointer-events: none;
}
.cross {
  width: 42%;
  height: 42%;
  margin: -21% 0 0 -21%;
  border: 1px solid rgba(180, 35, 24, 0.55);
  border-radius: 50%;
}
.cross::before,
.cross::after {
  content: '';
  position: absolute;
  background: rgba(180, 35, 24, 0.7);
}
.cross::before {
  left: 50%;
  top: 8%;
  bottom: 8%;
  width: 1px;
  margin-left: -0.5px;
}
.cross::after {
  top: 50%;
  left: 8%;
  right: 8%;
  height: 1px;
  margin-top: -0.5px;
}
.needle {
  width: 0;
  height: 0;
  margin: -46% 0 0 -7px;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 16px solid #b42318;
}
</style>
