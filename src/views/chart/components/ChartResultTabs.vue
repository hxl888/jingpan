<template>
  <section class="result-tabs rounded-lg border mt-4" :style="panelStyle">
    <el-tabs v-model="activeTab">
      <el-tab-pane :label="display('命盤解讀', false)" name="reading">
        <p class="note">
          {{
            display(
              '古文摘自國學典籍網《紫微斗數全書》卷一；其下白話只譯該句，不另造斷語。每宮先列三方四正，再對本宮星曜、四化選句。點出處核對原文。',
              false,
            )
          }}
        </p>
        <div class="method-box">
          <p class="classic">{{ display(sanFangDef.classic) }}</p>
          <p class="vernacular">{{ display(sanFangDef.vernacular, false) }}</p>
          <p class="cites">
            <a :href="sanFangDef.cite.url" target="_blank" rel="noopener noreferrer">{{ display(sanFangDef.cite.title, false) }}</a>
            <button v-if="sanFangDef.cite.bookId" type="button" @click="$emit('goto', sanFangDef.cite.bookId)">
              {{ display('站內原文', false) }}
            </button>
          </p>
          <p class="classic">{{ display(sanFangBaike.classic) }}</p>
          <p class="vernacular">{{ display(sanFangBaike.vernacular, false) }}</p>
          <p class="cites">
            <a :href="sanFangBaike.cite.url" target="_blank" rel="noopener noreferrer">{{ display(sanFangBaike.cite.title, false) }}</a>
          </p>
        </div>
        <ChartLegend class="mb-4" />
        <article v-for="item in readings" :key="item.name + item.earthlyBranch" class="palace-card">
          <header class="palace-head">
            <h3>
              {{ display(item.aliasName, false) }}
              <small>{{ item.heavenlyStem }}{{ item.earthlyBranch }}</small>
              <span v-if="item.isBodyPalace" class="tag">{{ display('身宮', false) }}</span>
            </h3>
            <p class="meta">{{ display('本宮星曜', false) }}　{{ display(item.starLine, false) }}</p>
            <p v-if="item.mutagenLine" class="meta">{{ display('本宮四化', false) }}　{{ display(item.mutagenLine, false) }}</p>
            <p class="meta sanfang">
              {{ display('三方四正', false) }}　
              {{ display('本宮', false) }} {{ display(item.sanFang.self, false) }}　
              {{ display('對宮', false) }} {{ display(item.sanFang.opposite, false) }}　
              {{ display('三合', false) }} {{ display(item.sanFang.triA, false) }}　
              {{ display(item.sanFang.triB, false) }}
            </p>
          </header>
          <ol v-if="item.quotes.length" class="quotes">
            <li v-for="(q, idx) in item.quotes" :key="idx">
              <p class="classic">{{ display(q.classic) }}</p>
              <p class="vernacular">{{ display(q.vernacular, false) }}</p>
              <p class="cites">
                <a :href="q.cite.url" target="_blank" rel="noopener noreferrer">{{ display(q.cite.title, false) }}</a>
                <button v-if="q.cite.bookId" type="button" @click="$emit('goto', q.cite.bookId)">
                  {{ display('站內原文', false) }}
                </button>
              </p>
            </li>
          </ol>
          <p v-else class="note">
            {{ display('本宮暫無對應卷一選句。請點盤上星曜，查看《諸星問答論》原文。', false) }}
          </p>
        </article>
      </el-tab-pane>

      <el-tab-pane :label="display('命盤格局', false)" name="pattern">
        <p v-if="!patterns.length" class="note">
          {{ display('本盤未匹配到卷一格局歌訣。格局只錄古本原句，不另作白話。', false) }}
        </p>
        <article v-for="p in patterns" :key="p.name" class="mb-4">
          <h4 style="color: var(--zw-gold)">{{ display(p.name, false) }}</h4>
          <p class="text-sm" style="color: var(--zw-muted)">{{ display(p.condition) }}</p>
          <div class="song-card">{{ formatSong(display(p.originalText)) }}</div>
        </article>
      </el-tab-pane>

      <el-tab-pane :label="display('古籍原文', false)" name="excerpt">
        <ExcerptPanel :items="excerpts" @goto="$emit('goto', $event)" />
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue';
import type { ExcerptItem, MatchedPattern, PalaceReading } from '@/types';
import { useDisplayText } from '@/composables/useDisplayText';
import ChartLegend from './ChartLegend.vue';
import ExcerptPanel from './ExcerptPanel.vue';
import { SANFANG_BAIKE, SANFANG_DEF, toReadingQuote } from '@/data/readingQuotes';

export default defineComponent({
  name: 'ChartResultTabs',
  components: { ChartLegend, ExcerptPanel },
  props: {
    readings: { type: Array as PropType<PalaceReading[]>, default: () => [] },
    patterns: { type: Array as PropType<MatchedPattern[]>, default: () => [] },
    excerpts: { type: Array as PropType<ExcerptItem[]>, default: () => [] },
  },
  emits: {
    goto: (_id: string) => true,
  },
  setup() {
    const { display } = useDisplayText();
    const activeTab = ref('reading');
    const panelStyle = {
      background: 'var(--zw-paper)',
      borderColor: 'var(--zw-line)',
      padding: '12px 16px 16px',
    };
    const formatSong = (text: string) =>
      text
        .split(/[，,]/)
        .map((s) => s.trim())
        .filter(Boolean)
        .join('\n');
    return {
      display,
      activeTab,
      panelStyle,
      formatSong,
      sanFangDef: toReadingQuote(SANFANG_DEF),
      sanFangBaike: toReadingQuote(SANFANG_BAIKE),
    };
  },
});
</script>

<style scoped>
.note {
  font-size: 12px;
  color: var(--zw-muted);
  line-height: 1.7;
  margin-bottom: 12px;
}
.method-box {
  border: 1px solid var(--zw-line);
  background: var(--zw-quote);
  padding: 12px 14px;
  margin-bottom: 14px;
}
.palace-card {
  border-top: 1px solid var(--zw-line);
  padding: 16px 0;
}
.palace-head h3 {
  font-size: 16px;
  margin-bottom: 6px;
}
.palace-head small {
  margin-left: 8px;
  color: var(--zw-muted);
  font-weight: 400;
}
.tag {
  margin-left: 8px;
  font-size: 11px;
  color: var(--zw-gold);
}
.meta {
  font-size: 12px;
  color: var(--zw-muted);
  line-height: 1.7;
}
.sanfang {
  color: var(--zw-primary);
}
.quotes {
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
}
.quotes li {
  margin-bottom: 12px;
}
.classic {
  font-size: 14px;
  line-height: 1.8;
}
.vernacular {
  margin-top: 4px;
  font-size: 13px;
  color: var(--zw-muted);
  line-height: 1.7;
}
.cites {
  margin-top: 4px;
  font-size: 12px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.cites a,
.cites button {
  color: var(--zw-gold);
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
  text-decoration: underline;
}
.result-tabs :deep(.excerpt-panel) {
  border: 0;
  padding: 0;
}
.result-tabs :deep(.el-tabs__item) {
  color: var(--zw-muted);
}
.result-tabs :deep(.el-tabs__item.is-active) {
  color: var(--zw-primary);
}
.result-tabs :deep(.el-tabs__active-bar) {
  background: var(--zw-gold);
}
</style>
