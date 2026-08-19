<template>
  <div class="page-container almanac-page">
    <header class="head">
      <button type="button" @click="handleShift(-1)">{{ display('前一日', false) }}</button>
      <div>
        <h1>{{ display('老黃曆', false) }}</h1>
        <input v-model="iso" class="date" type="date" @change="handlePick" />
      </div>
      <button type="button" @click="handleShift(1)">{{ display('後一日', false) }}</button>
    </header>

    <section v-if="day" class="sheet">
          <p class="solar">{{ display(day.solarText, false) }}　{{ display(day.week, false) }}</p>
          <p class="lunar">{{ display(day.lunarText, false) }}　{{ display(day.shengxiao, false) }}年</p>
          <p v-if="day.festivals.length" class="fest">{{ display(day.festivals.join(' · '), false) }}</p>
          <p v-if="day.jieQi" class="fest">{{ display(`節氣 ${day.jieQi}`, false) }}</p>

          <dl class="pillars">
            <div>
              <dt>{{ display('年柱', false) }}</dt>
              <dd>{{ display(day.yearGanZhi, false) }}</dd>
            </div>
            <div>
              <dt>{{ display('月柱', false) }}</dt>
              <dd>{{ display(day.monthGanZhi, false) }}</dd>
            </div>
            <div>
              <dt>{{ display('日柱', false) }}</dt>
              <dd>{{ display(day.dayGanZhi, false) }}</dd>
            </div>
            <div>
              <dt>{{ display(day.isToday ? '時柱' : '午時', false) }}</dt>
              <dd>{{ display(day.timeGanZhi, false) }}</dd>
            </div>
          </dl>

          <div class="split">
            <article>
              <h2>{{ display('宜', false) }}</h2>
              <p>{{ display(day.yi.join('、') || '—', false) }}</p>
            </article>
            <article>
              <h2 class="ji">{{ display('忌', false) }}</h2>
              <p>{{ display(day.ji.join('、') || '—', false) }}</p>
            </article>
          </div>

          <dl class="meta">
            <div>
              <dt>{{ display('沖煞', false) }}</dt>
              <dd>{{ display(`${day.chong}　煞${day.sha}`, false) }}</dd>
            </div>
            <div>
              <dt>{{ display('納音', false) }}</dt>
              <dd>{{ display(day.nayin, false) }}</dd>
            </div>
            <div>
              <dt>{{ display('值神', false) }}</dt>
              <dd>{{ display(day.tianShen, false) }}</dd>
            </div>
            <div>
              <dt>{{ display('星宿', false) }}</dt>
              <dd>{{ display(day.xiu, false) }}</dd>
            </div>
            <div>
              <dt>{{ display('胎神', false) }}</dt>
              <dd>{{ display(day.taiShen, false) }}</dd>
            </div>
            <div>
              <dt>{{ display('彭祖百忌', false) }}</dt>
              <dd>{{ display(day.pengZu, false) }}</dd>
            </div>
          </dl>
    </section>

    <p class="hint">
      {{
        display(
          '曆注取自公開農曆庫 lunar-typescript（壽星天文曆），只作文獻曆法對照，不構成行事或吉凶裁決。',
          false,
        )
      }}
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue';
import { useDisplayText } from '@/composables/useDisplayText';
import { loadAlmanacDay, shiftIsoDate, toIsoDate } from '@/utils/almanac';

export default defineComponent({
  name: 'AlmanacPage',
  setup() {
    const { display } = useDisplayText();
    const _data = reactive({
      iso: toIsoDate(new Date()),
    });
    const day = computed(() => loadAlmanacDay(_data.iso));
    const _methods = {
      handleShift(days: number) {
        _data.iso = shiftIsoDate(_data.iso, days);
      },
      handlePick() {
        if (!_data.iso) _data.iso = toIsoDate(new Date());
      },
    };
    return { display, day, ...toRefs(_data), ..._methods };
  },
});
</script>

<style scoped>
.almanac-page {
  max-width: 720px;
}
.head {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  align-items: center;
  margin-bottom: 16px;
}
.head h1 {
  margin: 0;
  letter-spacing: 0.28em;
  font-size: 22px;
  text-align: center;
}
.head button,
.date {
  border: 1px solid var(--zw-line);
  background: var(--zw-paper);
  color: var(--zw-ink);
  padding: 8px 12px;
  border-radius: 8px;
  font-family: inherit;
  letter-spacing: 0.08em;
}
.date {
  display: block;
  margin: 8px auto 0;
}
.sheet {
  border: 1px solid var(--zw-gold);
  background: var(--zw-paper);
  border-radius: 14px;
  padding: 20px 18px 12px;
}
.solar {
  margin: 0;
  letter-spacing: 0.12em;
}
.lunar {
  margin: 6px 0 0;
  font-size: 20px;
  letter-spacing: 0.16em;
  color: var(--zw-primary);
}
.fest {
  margin: 8px 0 0;
  color: #b42318;
  letter-spacing: 0.08em;
}
.pillars {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin: 18px 0;
}
.pillars div,
.meta div {
  text-align: center;
}
.pillars dt,
.meta dt {
  color: var(--zw-muted);
  font-size: 12px;
  letter-spacing: 0.16em;
}
.pillars dd {
  margin: 6px 0 0;
  font-size: 20px;
  letter-spacing: 0.12em;
}
.split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.split article {
  border: 1px solid var(--zw-line);
  border-radius: 10px;
  padding: 10px 12px;
}
.split h2 {
  margin: 0 0 8px;
  font-size: 14px;
  letter-spacing: 0.24em;
  color: var(--zw-primary);
}
.split .ji {
  color: #b42318;
}
.split p {
  margin: 0;
  line-height: 1.7;
  font-size: 14px;
}
.meta {
  margin: 16px 0 8px;
  display: grid;
  gap: 10px;
}
.meta dd {
  margin: 4px 0 0;
  letter-spacing: 0.06em;
}
.hint {
  margin-top: 16px;
  font-size: 12px;
  color: var(--zw-muted);
  line-height: 1.7;
}
@media (max-width: 767.98px) {
  .pillars {
    grid-template-columns: repeat(2, 1fr);
  }
  .split {
    grid-template-columns: 1fr;
  }
}
</style>
