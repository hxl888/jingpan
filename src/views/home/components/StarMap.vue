<template>
  <div class="star-map-stage">
    <svg
      class="star-map"
      viewBox="0 0 800 480"
      role="img"
      :aria-label="display('紫微垣星象示意', false)"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient :id="skyId" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stop-color="#2a2148" />
          <stop offset="100%" stop-color="#0b1020" />
        </radialGradient>
        <filter :id="glowId" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient :id="lineGlowId" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#C8A967" stop-opacity="0.15" />
          <stop offset="45%" stop-color="#C8A967" stop-opacity="0.35" />
          <stop offset="50%" stop-color="#f3e2b0" stop-opacity="0.95" />
          <stop offset="55%" stop-color="#C8A967" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#C8A967" stop-opacity="0.15" />
          <animate attributeName="x1" values="-100%;100%" dur="4.5s" repeatCount="indefinite" />
          <animate attributeName="x2" values="0%;200%" dur="4.5s" repeatCount="indefinite" />
        </linearGradient>
      </defs>

      <rect width="800" height="480" :fill="`url(#${skyId})`" />
      <rect
        x="12"
        y="12"
        width="776"
        height="456"
        fill="none"
        stroke="#C8A967"
        stroke-opacity="0.35"
      />
      <text
        x="40"
        y="48"
        fill="#C8A967"
        font-family="Noto Serif SC, Songti SC, serif"
        font-size="18"
        letter-spacing="6"
      >
        {{ display('紫微垣 · 星象示意', false) }}
      </text>

      <g class="stars" fill="#f3ebd8" :filter="`url(#${glowId})`">
        <circle
          v-for="(s, i) in stars"
          :key="i"
          class="star"
          :cx="s[0]"
          :cy="s[1]"
          :r="s[2]"
          :style="starAnim(i)"
        />
      </g>

      <g class="constellation" fill="none" stroke-width="1.15">
        <path
          class="line-base"
          d="M280 250 L340 210 L400 240 L460 200 L520 260 L460 300 L400 280 L340 300 Z"
        />
        <path
          class="line-flow"
          :stroke="`url(#${lineGlowId})`"
          d="M280 250 L340 210 L400 240 L460 200 L520 260 L460 300 L400 280 L340 300 Z"
        />
        <path class="line-base line-arc" d="M180 70 L240 110 L300 80 L360 130 L420 95" />
        <path
          class="line-flow line-arc"
          :stroke="`url(#${lineGlowId})`"
          d="M180 70 L240 110 L300 80 L360 130 L420 95"
        />
        <circle class="ziwei-ring" cx="400" cy="250" r="38" />
      </g>

      <text
        x="400"
        y="256"
        text-anchor="middle"
        fill="#C8A967"
        font-family="Noto Serif SC, Songti SC, serif"
        font-size="14"
      >
        {{ display('紫微', false) }}
      </text>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDisplayText } from '@/composables/useDisplayText';

/** [cx, cy, r] */
const STARS: Array<[number, number, number]> = [
  [120, 90, 1.5],
  [180, 70, 1],
  [240, 110, 1.8],
  [300, 80, 1.2],
  [360, 130, 1],
  [420, 95, 2],
  [480, 70, 1.3],
  [540, 120, 1],
  [600, 85, 1.6],
  [660, 140, 1.1],
  [720, 100, 1.4],
  [100, 200, 1],
  [160, 230, 1.5],
  [220, 190, 1.2],
  [280, 250, 2],
  [340, 210, 1],
  [400, 240, 1.7],
  [460, 200, 1.3],
  [520, 260, 1],
  [580, 220, 1.8],
  [640, 270, 1.2],
  [700, 230, 1.5],
  [140, 320, 1.4],
  [200, 360, 1],
  [260, 330, 1.6],
  [320, 380, 1.2],
  [380, 340, 2],
  [440, 370, 1],
  [500, 330, 1.5],
  [560, 390, 1.1],
  [620, 350, 1.7],
  [680, 400, 1],
  [740, 360, 1.3],
];

export default defineComponent({
  name: 'StarMap',
  setup() {
    const { display } = useDisplayText();
    const uid = Math.random().toString(36).slice(2, 8);

    const starAnim = (i: number) => ({
      animationDelay: `${(i % 7) * 0.35}s`,
      animationDuration: `${2.4 + (i % 5) * 0.4}s`,
    });

    return {
      display,
      stars: STARS,
      starAnim,
      skyId: `starSky-${uid}`,
      glowId: `starGlow-${uid}`,
      lineGlowId: `starLineGlow-${uid}`,
    };
  },
});
</script>

<style scoped>
.star-map-stage {
  width: 100%;
  height: 100%;
}

.star-map {
  width: 100%;
  height: 100%;
  display: block;
}

.line-base {
  stroke: #c8a967;
  stroke-opacity: 0.4;
}

.line-flow {
  stroke-opacity: 1;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 28 220;
  animation: line-dash 5.5s linear infinite;
}

.line-flow.line-arc {
  animation-duration: 4.2s;
  animation-direction: reverse;
  stroke-dasharray: 18 160;
}

.ziwei-ring {
  stroke: #c8a967;
  stroke-opacity: 0.65;
  stroke-dasharray: 4 6;
}

.star {
  opacity: 0.75;
  animation-name: twinkle;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}

@keyframes line-dash {
  to {
    stroke-dashoffset: -248;
  }
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.45;
  }
  50% {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .line-flow,
  .star {
    animation: none;
  }
  .star {
    opacity: 0.85;
  }
}
</style>
