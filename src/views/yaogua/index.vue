<template>
  <div class="page-container yaogua-page">
    <h1>{{ display('搖卦', false) }}</h1>
    <p class="lead">
      {{
        display(
          '三錢起卦：自下而上共六爻。每次擲三錢得一爻；老陽、老陰為變爻。成卦後節選站內易經條目原文作大體講解，不另行編寫吉凶斷語。',
          false,
        )
      }}
    </p>

    <section class="panel stage" :style="cardStyle">
      <div class="mode-row">
        <span>{{ display('一次成卦', false) }}</span>
        <el-switch v-model="quickMode" :disabled="shaking" @change="handleModeChange" />
        <em>{{
          display(
            quickMode ? '自錢筒逐枚灑下：先出為初爻（最下），依次向上成卦' : '傳統三錢，逐爻搖六次',
            false,
          )
        }}</em>
      </div>

      <p class="step">
        <template v-if="done">{{ display('六爻已成', false) }}</template>
        <template v-else-if="quickMode">{{ display('準備一次搖出六爻', false) }}</template>
        <template v-else>
          {{ display(`第 ${lines.length + 1} 爻 · 共六爻（初→上）`, false) }}
        </template>
      </p>

      <TossCoins
        :faces="displayCoins"
        :tossing="shaking"
        :toss-key="tossKey"
        :revealed="!quickMode || done || shaking"
        :pour-schedule="pourSchedule"
      />
      <p class="coin-legend">
        {{ display('陽面計 3、陰面計 2；三錢相加：6老陰 · 7少陽 · 8少陰 · 9老陽。', false) }}
      </p>

      <div class="actions">
        <el-button type="primary" :disabled="shaking || done" @click="handleShake">
          {{
            display(
              done ? '已成卦' : shaking ? '搖動中…' : quickMode ? '從筒中灑出成卦' : '搖一搖',
              false,
            )
          }}
        </el-button>
        <el-button :disabled="shaking" @click="handleReset">{{ display('重來', false) }}</el-button>
        <el-button v-if="isMobile" :disabled="shaking || done" @click="handleEnableMotion">
          {{ display(motionOn ? '已啟用手機搖動' : '啟用手機搖動', false) }}
        </el-button>
      </div>
      <p v-if="isMobile" class="hint">
        {{ display('亦可真的晃動手機起爻（需授權運動感應）。', false) }}
      </p>
    </section>

    <section v-if="lines.length" class="panel" :style="cardStyle">
      <h2>{{ display('當前爻象', false) }}</h2>
      <HexagramLines :lines="lines" />
    </section>

    <section v-if="result" class="panel result" :style="cardStyle">
      <div class="gua-block">
        <div>
          <p class="eyebrow">{{ display('本卦', false) }}</p>
          <h2>{{ display(primaryName, false) }}</h2>
          <p class="meta">
            {{ display(`第 ${result.primaryIndex} 卦 · 上${primaryTrigrams.upper} · 下${primaryTrigrams.lower}`, false) }}
          </p>
          <HexagramLines :lines="result.lines" />
          <p v-if="primaryOverview" class="overview">{{ display(primaryOverview, false) }}</p>
          <p v-else class="overview muted">
            {{ display('本卦條目暫無可節選之卦體講解，請閱原文。', false) }}
          </p>
          <router-link
            class="link"
            :to="{ path: `/yijing/gua-${result.primaryIndex}`, query: { from: 'yaogua' } }"
            @click="markGotoYijing"
          >
            {{ display('查看易經原文', false) }}
          </router-link>
        </div>
        <div v-if="result.relatingIndex">
          <p class="eyebrow">{{ display('之卦', false) }}</p>
          <h2>{{ display(relatingName, false) }}</h2>
          <p class="meta">
            {{
              display(
                `第 ${result.relatingIndex} 卦 · 變爻：${changingLabels}`,
                false,
              )
            }}
          </p>
          <HexagramLines :lines="relatingLines" />
          <p v-if="relatingOverview" class="overview">{{ display(relatingOverview, false) }}</p>
          <p v-else class="overview muted">
            {{ display('之卦條目暫無可節選之卦體講解，請閱原文。', false) }}
          </p>
          <router-link
            class="link"
            :to="{ path: `/yijing/gua-${result.relatingIndex}`, query: { from: 'yaogua' } }"
            @click="markGotoYijing"
          >
            {{ display('查看易經原文', false) }}
          </router-link>
        </div>
        <p v-else class="note">{{ display('無變爻，僅得本卦。', false) }}</p>
      </div>
      <p class="overview-note">
        {{
          display(
            '以上講解摘自站內易經條目（倪海廈天紀《斷易天機》公開頁整理）原文節選，非臨時編寫；完整圖象與爻辭請點「查看易經原文」。',
            false,
          )
        }}
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUnmounted, ref } from 'vue';
import { ElMessage } from 'element-plus';
import tocData from '@/data/yijingToc.json';
import hexData from '@/data/yijingHexagrams.json';
import { useDisplayText } from '@/composables/useDisplayText';
import { useDevice } from '@/composables/useDevice';
import { useYaoguaSessionStore } from '@/store/yaoguaSession';
import { trigramsOf } from '@/utils/yijingTrigrams';
import { excerptHexagramOverview } from '@/utils/yijingExcerpt';
import {
  castFullHexagram,
  coinsToYao,
  createSixPourSchedule,
  finishCast,
  linesToDisplayFaces,
  tossThreeCoins,
  type CastResult,
  type CoinFace,
  type SixPourSchedule,
  type YaoLine,
} from '@/utils/yaogua';
import HexagramLines from './components/HexagramLines.vue';
import TossCoins from './components/TossCoins.vue';

const POS_LABEL = ['初', '二', '三', '四', '五', '上'];
const DEFAULT_THREE: CoinFace[] = [3, 2, 3];
const DEFAULT_SIX: CoinFace[] = [3, 2, 3, 3, 2, 3];

interface YijingHexEntry {
  id: string;
  index: number;
  name: string;
  blocks: { type: 'heading' | 'prose' | 'image'; text?: string }[];
}

export default defineComponent({
  name: 'YaoguaPage',
  components: { HexagramLines, TossCoins },
  setup() {
    const { display } = useDisplayText();
    const { isMobile } = useDevice();
    const yaoguaSession = useYaoguaSessionStore();
    const hexList = (hexData as { hexagrams: YijingHexEntry[] }).hexagrams;
    const hexByIndex = new Map(hexList.map((h) => [h.index, h]));
    const quickMode = ref(false);
    const lines = ref<YaoLine[]>([]);
    const shaking = ref(false);
    const tossKey = ref(0);
    const displayCoins = ref<CoinFace[]>([...DEFAULT_THREE]);
    const pourSchedule = ref<SixPourSchedule | null>(null);
    const result = ref<CastResult | null>(null);
    const motionOn = ref(false);
    let lastShakeAt = 0;
    let lastMag = 9.8;

    const nameByIndex = (() => {
      const map = new Map<number, string>();
      for (const g of tocData.groups) {
        for (const item of g.items) map.set(item.index, item.name);
      }
      return map;
    })();

    const done = computed(() => lines.value.length >= 6);
    const primaryName = computed(() =>
      result.value ? nameByIndex.get(result.value.primaryIndex) ?? '' : '',
    );
    const relatingName = computed(() =>
      result.value?.relatingIndex ? nameByIndex.get(result.value.relatingIndex) ?? '' : '',
    );
    const primaryTrigrams = computed(() => trigramsOf(result.value?.primaryIndex ?? 0));
    const primaryOverview = computed(() => {
      if (!result.value) return null;
      const entry = hexByIndex.get(result.value.primaryIndex);
      return excerptHexagramOverview(entry?.blocks, entry?.name ?? primaryName.value);
    });
    const relatingOverview = computed(() => {
      if (!result.value?.relatingIndex) return null;
      const entry = hexByIndex.get(result.value.relatingIndex);
      return excerptHexagramOverview(entry?.blocks, entry?.name ?? relatingName.value);
    });
    const changingLabels = computed(() => {
      if (!result.value) return '';
      return result.value.changingPositions.map((p) => POS_LABEL[p]).join('、');
    });
    const relatingLines = computed((): YaoLine[] => {
      if (!result.value?.relatingIndex) return [];
      return result.value.lines.map((l) => {
        if (!l.changing) return { ...l, label: l.yang ? '少陽' : '少陰', changing: false };
        const yang = (l.yang ? 0 : 1) as 0 | 1;
        return {
          ...l,
          yang,
          changing: false,
          kind: yang ? 'youngYang' : 'youngYin',
          label: yang ? '少陽' : '少陰',
          sum: yang ? 7 : 8,
        };
      });
    });

    const cardStyle = {
      background: 'var(--zw-paper)',
      borderColor: 'var(--zw-line)',
    };

    const runToss = async () => {
      if (shaking.value || done.value) return;

      if (quickMode.value) {
        const full = castFullHexagram();
        displayCoins.value = linesToDisplayFaces(full);
        tossKey.value += 1;
        const schedule = createSixPourSchedule(tossKey.value + Date.now());
        pourSchedule.value = schedule;
        shaking.value = true;
        await new Promise((r) => setTimeout(r, schedule.totalMs));
        lines.value = full;
        result.value = finishCast(full);
        shaking.value = false;
        ElMessage.success(display('六爻已成', false));
        return;
      }

      const coins = tossThreeCoins();
      displayCoins.value = coins;
      tossKey.value += 1;
      shaking.value = true;
      await new Promise((r) => setTimeout(r, 1350));

      const yao = coinsToYao(coins, lines.value.length);
      lines.value = [...lines.value, yao];
      shaking.value = false;

      if (lines.value.length >= 6) {
        result.value = finishCast(lines.value);
        ElMessage.success(display('六爻已成', false));
      }
    };

    const markGotoYijing = () => {
      yaoguaSession.markFromYaogua();
    };

    const handleShake = () => {
      void runToss();
    };

    const handleReset = () => {
      lines.value = [];
      result.value = null;
      displayCoins.value = quickMode.value ? [...DEFAULT_SIX] : [...DEFAULT_THREE];
      pourSchedule.value = null;
      shaking.value = false;
    };

    const handleModeChange = () => {
      handleReset();
    };

    const onDeviceMotion = (e: DeviceMotionEvent) => {
      const a = e.accelerationIncludingGravity;
      if (!a || a.x == null || a.y == null || a.z == null) return;
      const now = Date.now();
      if (now - lastShakeAt < 1400) return;
      const mag = Math.hypot(a.x, a.y, a.z);
      const delta = Math.abs(mag - lastMag);
      lastMag = mag;
      if (delta < 12) return;
      lastShakeAt = now;
      void runToss();
    };

    const handleEnableMotion = async () => {
      try {
        const req = (
          DeviceMotionEvent as unknown as { requestPermission?: () => Promise<PermissionState> }
        ).requestPermission;
        if (typeof req === 'function') {
          const state = await req();
          if (state !== 'granted') {
            ElMessage.warning(display('未獲得運動感應權限', false));
            return;
          }
        }
        if (!motionOn.value) {
          window.addEventListener('devicemotion', onDeviceMotion, { passive: true });
          motionOn.value = true;
          ElMessage.success(display('已啟用：晃動手機即可起爻', false));
        }
      } catch {
        ElMessage.warning(display('此裝置不支持運動感應', false));
      }
    };

    onUnmounted(() => {
      window.removeEventListener('devicemotion', onDeviceMotion);
    });

    return {
      display,
      isMobile,
      cardStyle,
      lines,
      shaking,
      tossKey,
      displayCoins,
      pourSchedule,
      result,
      done,
      quickMode,
      motionOn,
      primaryName,
      relatingName,
      primaryTrigrams,
      primaryOverview,
      relatingOverview,
      changingLabels,
      relatingLines,
      handleShake,
      handleReset,
      handleModeChange,
      handleEnableMotion,
      markGotoYijing,
    };
  },
});
</script>

<style scoped>
.yaogua-page {
  padding-bottom: 2.5rem;
}
h1 {
  margin: 0 0 0.35rem;
  font-size: 1.55rem;
}
.lead {
  margin: 0 0 1.25rem;
  max-width: 40rem;
  line-height: 1.7;
  font-size: 0.9rem;
  color: var(--zw-muted);
}
.panel {
  padding: 1.1rem 1.15rem;
  margin-bottom: 1.15rem;
  border: 1px solid var(--zw-line);
  border-radius: 12px;
}
.panel h2 {
  margin: 0 0 0.75rem;
  font-size: 1rem;
  letter-spacing: 0.16em;
  color: var(--zw-primary);
}
.step {
  margin: 0 0 1rem;
  text-align: center;
  letter-spacing: 0.14em;
  color: var(--zw-muted);
  font-size: 0.9rem;
}
.mode-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.55rem 0.75rem;
  margin-bottom: 0.85rem;
  font-size: 0.88rem;
  letter-spacing: 0.08em;
  color: var(--zw-ink);
}
.mode-row em {
  flex: 1 1 12rem;
  font-style: normal;
  font-size: 0.78rem;
  color: var(--zw-muted);
  letter-spacing: 0.04em;
  line-height: 1.45;
}
.coin-legend {
  margin: -0.35rem 0 1rem;
  text-align: center;
  font-size: 0.78rem;
  line-height: 1.55;
  color: var(--zw-muted);
  letter-spacing: 0.04em;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}
.hint {
  margin: 0.75rem 0 0;
  text-align: center;
  font-size: 0.78rem;
  color: var(--zw-muted);
}
.gua-block {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}
.eyebrow {
  margin: 0 0 0.25rem;
  font-size: 0.75rem;
  letter-spacing: 0.18em;
  color: var(--zw-gold);
}
.gua-block h2 {
  margin: 0 0 0.35rem;
  font-size: 1.35rem;
  letter-spacing: 0.12em;
}
.meta {
  margin: 0 0 0.85rem;
  font-size: 0.82rem;
  color: var(--zw-muted);
}
.overview {
  margin: 0.85rem 0 0.65rem;
  padding: 0.75rem 0.85rem;
  border-left: 3px solid color-mix(in srgb, var(--zw-gold) 70%, transparent);
  background: color-mix(in srgb, var(--zw-gold) 8%, transparent);
  font-size: 0.88rem;
  line-height: 1.75;
  letter-spacing: 0.04em;
  color: var(--zw-ink);
}
.overview.muted {
  border-left-color: var(--zw-line);
  background: transparent;
  color: var(--zw-muted);
}
.overview-note {
  margin: 1.1rem 0 0;
  font-size: 0.75rem;
  line-height: 1.55;
  color: var(--zw-muted);
  letter-spacing: 0.03em;
}
.link {
  display: inline-block;
  margin-top: 0.85rem;
  color: var(--zw-primary);
  text-decoration: underline;
  letter-spacing: 0.08em;
  font-size: 0.88rem;
}
.note {
  margin: 0;
  color: var(--zw-muted);
  font-size: 0.88rem;
}
</style>
