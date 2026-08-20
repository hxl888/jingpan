<template>
  <div class="page-container chart-page">
    <el-tabs v-model="pageTab" class="chart-tabs">
      <el-tab-pane :label="display('生辰排盤', false)" name="chart">
    <div class="layout">
      <section class="form-col rounded-lg border p-4" :style="cardStyle">
        <h2 class="mb-3 font-semibold">{{ display('生辰排盤', false) }}</h2>
        <ChartForm :loading="loading" :seed="formSeed" @submit="handleGenerate" @reset="handleReset" />
        <p v-if="trueSolarNote" class="mt-3 text-xs" style="color: var(--zw-muted)">{{ trueSolarNote }}</p>
        <div v-if="chart" class="mt-4 space-y-2">
          <el-form-item :label="display('大限／流年', false)">
            <el-date-picker
              v-model="targetDate"
              type="date"
              value-format="YYYY-M-D"
              :placeholder="display('選擇推運日期', false)"
              @change="handleHoroscope"
            />
            <p class="horoscope-hint">
              {{
                display(
                  '選一個公曆日期，查看該日所在大限（約十年一段）與流年，盤面宮位會標出對應大限起迄歲。預設為出生當天。',
                  false,
                )
              }}
            </p>
          </el-form-item>
          <p v-if="horoscope" class="text-sm">
            {{ display('大限', false) }} {{ horoscope.decadalRange }}　
            {{ display('流年', false) }} {{ horoscope.yearly }}
          </p>
          <el-button @click="handleExport">{{ display('導出命盤圖片', false) }}</el-button>
        </div>
      </section>

      <section class="board-col">
        <div v-if="chart" ref="captureRef">
          <ChartBoard
            :palaces="displayPalaces"
            :five-elements-class="chart.fiveElementsClass"
            :soul="chart.soul"
            :body="chart.body"
            :lunar-date="chart.lunarDate"
            :chinese-date="chart.chineseDate"
            @star-click="handleStarClick"
          />
        </div>
        <p v-else class="rounded-lg border p-8 text-center" :style="cardStyle">
          {{ display('請輸入公曆生辰後生成命盤。點擊星曜只彈出《諸星問答論》原文。解讀頁籤中的白話是卷一原句今譯，並附出處。', false) }}
        </p>
        <ChartResultTabs
          v-if="chart"
          :readings="readings"
          :patterns="patterns"
          :excerpts="excerpts"
          @goto="handleGoto"
        />
        <ChartPersonSummary
          v-if="chart"
          :readings="readings"
          :patterns="patterns"
          :five-elements-class="chart.fiveElementsClass"
          :soul="chart.soul"
          :body="chart.body"
          :gender="chart.gender"
          :lunar-date="chart.lunarDate"
          :chinese-date="chart.chineseDate"
          :horoscope="horoscope"
          @goto="handleGoto"
        />
      </section>
    </div>

    <StarDialog v-model="dialogVisible" :star-name="activeStar" />
      </el-tab-pane>
      <el-tab-pane :label="display('六十納音', false)" name="nayin">
        <div class="nayin-wrap">
          <NayinPanel />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onActivated, onMounted, reactive, ref, toRefs } from 'vue';
import { onBeforeRouteLeave, useRouter } from 'vue-router';
import { captureElement } from '@/utils/captureHtml';
import ChartForm, { type ChartFormValue } from './components/ChartForm.vue';
import ChartBoard from './components/ChartBoard.vue';
import ChartResultTabs from './components/ChartResultTabs.vue';
import ChartPersonSummary from './components/ChartPersonSummary.vue';
import NayinPanel from './components/NayinPanel.vue';
import StarDialog from '@/components/StarDialog.vue';
import { buildChart, getHoroscope, palacesWithHoroscope, type BuiltChart, type HoroscopeView } from '@/utils/chart';
import { computeTrueSolar } from '@/utils/trueSolar';
import { matchPatterns } from '@/utils/patternMatch';
import { extractExcerpts } from '@/utils/excerpt';
import { buildPalaceReadings } from '@/utils/palaceReading';
import { useAppStore } from '@/store/app';
import { useChartSessionStore } from '@/store/chartSession';
import { useDisplayText } from '@/composables/useDisplayText';
import type { ExcerptItem, MatchedPattern } from '@/types';
import { ElMessage } from 'element-plus';

export default defineComponent({
  name: 'ChartPage',
  components: { ChartForm, ChartBoard, ChartResultTabs, ChartPersonSummary, NayinPanel, StarDialog },
  setup() {
    const router = useRouter();
    const store = useAppStore();
    const session = useChartSessionStore();
    const { display } = useDisplayText();
    const captureRef = ref<HTMLElement>();
    const formSeed = session.getSnapshot()?.form ?? null;
    const restoredOnce = ref(false);
    const _data = reactive({
      pageTab: 'chart',
      loading: false,
      chart: null as BuiltChart | null,
      patterns: [] as MatchedPattern[],
      excerpts: [] as ExcerptItem[],
      dialogVisible: false,
      activeStar: '',
      targetDate: '',
      horoscope: null as HoroscopeView | null,
      trueSolarNote: '',
    });

    const displayPalaces = computed(() => {
      if (!_data.chart) return [];
      if (!_data.targetDate) return _data.chart.palaces;
      return palacesWithHoroscope(_data.chart.astrolabe, _data.chart.palaces, _data.targetDate);
    });

    const readings = computed(() => buildPalaceReadings(displayPalaces.value));

    const cardStyle = {
      background: 'var(--zw-paper)',
      borderColor: 'var(--zw-line)',
    };

    const _inner = {
      refreshDerived() {
        if (!_data.chart) return;
        _data.patterns = matchPatterns(_data.chart);
        _data.excerpts = extractExcerpts(_data.chart);
      },
    };

    const _methods = {
      /** 生成命盘 */
      handleGenerate(form: ChartFormValue) {
        _data.loading = true;
        try {
          let solarDate = form.solarDate;
          let timeIndex = form.timeIndex;
          _data.trueSolarNote = '';
          if (form.useTrueSolar && form.clock) {
            const [h, m] = form.clock.split(':').map(Number);
            const ts = computeTrueSolar(form.solarDate, h, m, form.lng);
            solarDate = ts.dateStr;
            timeIndex = ts.timeIndex;
            _data.trueSolarNote = `真太陽時 ${ts.trueClock}，時差 ${ts.offsetMinutes} 分`;
          }
          _data.chart = buildChart({
            solarDate,
            timeIndex,
            gender: form.gender,
            language: store.iztroLang,
          });
          _data.targetDate = solarDate;
          _inner.refreshDerived();
          _methods.handleHoroscope(solarDate);
          session.saveSnapshot({
            form,
            targetDate: _data.targetDate,
            trueSolarNote: _data.trueSolarNote,
          });
        } catch (err) {
          ElMessage.error(err instanceof Error ? err.message : '排盤失敗');
        } finally {
          _data.loading = false;
        }
      },
      handleStarClick(name: string) {
        _data.activeStar = name;
        _data.dialogVisible = true;
      },
      handleHoroscope(date: string) {
        if (!_data.chart || !date) return;
        _data.horoscope = getHoroscope(_data.chart.astrolabe, date);
        const snap = session.getSnapshot();
        if (snap) {
          session.saveSnapshot({ ...snap, targetDate: date });
        }
      },
      async handleExport() {
        if (!captureRef.value) return;
        try {
          const canvas = await captureElement(captureRef.value);
          const a = document.createElement('a');
          a.href = canvas.toDataURL('image/png');
          a.download = 'ziwei-chart.png';
          a.click();
        } catch (err) {
          ElMessage.error(err instanceof Error ? err.message : '導出失敗');
        }
      },
      handleGoto(id: string) {
        session.markFromChart();
        void router.push({ path: '/book', query: { from: 'chart' }, hash: `#${id}` });
      },
      handleReset() {
        _data.chart = null;
        _data.patterns = [];
        _data.excerpts = [];
        _data.horoscope = null;
        _data.targetDate = '';
        _data.trueSolarNote = '';
        _data.dialogVisible = false;
        _data.activeStar = '';
        session.clearSnapshot();
        ElMessage.success(display('已重置表單與命盤', false));
      },
    };

    const restoreSession = () => {
      if (_data.chart || restoredOnce.value) return;
      const snap = session.getSnapshot();
      if (!snap) return;
      restoredOnce.value = true;
      _methods.handleGenerate(snap.form);
      if (snap.targetDate) {
        _data.targetDate = snap.targetDate;
        _methods.handleHoroscope(snap.targetDate);
      }
      _data.trueSolarNote = snap.trueSolarNote;
    };

    const restoreScroll = () => {
      const y = session.getScrollY();
      if (!y) return;
      void nextTick(() => {
        window.scrollTo({ top: y, left: 0, behavior: 'auto' });
        requestAnimationFrame(() => window.scrollTo({ top: y, left: 0, behavior: 'auto' }));
      });
    };

    onMounted(() => {
      restoreSession();
      restoreScroll();
    });

    onActivated(() => {
      restoreScroll();
    });

    onBeforeRouteLeave(() => {
      session.saveScroll();
    });

    return {
      display,
      captureRef,
      cardStyle,
      displayPalaces,
      readings,
      formSeed,
      ...toRefs(_data),
      ..._methods,
    };
  },
});
</script>

<style scoped>
.chart-tabs :deep(.el-tabs__item) {
  color: var(--zw-muted);
  letter-spacing: 0.16em;
}
.chart-tabs :deep(.el-tabs__item.is-active) {
  color: var(--zw-primary);
}
.chart-tabs :deep(.el-tabs__active-bar) {
  background: var(--zw-gold);
}
.chart-tabs :deep(.el-tabs__nav-wrap::after) {
  background: var(--zw-line);
}
.nayin-wrap {
  max-width: 720px;
}
.layout {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 16px;
  align-items: start;
}
.horoscope-hint {
  margin: 6px 0 0;
  font-size: 0.75em;
  line-height: 1.55;
  letter-spacing: 0.04em;
  color: var(--zw-muted);
}
@media (max-width: 1100px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
