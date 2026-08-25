<template>
  <section class="summary">
    <p class="note">
      {{
        display(
          '以下只匯總本盤安星結果，以及本盤已命中的卷一原文。不另寫吉凶，不補古書沒有的斷語。',
          false,
        )
      }}
    </p>

    <h3>{{ display('盤面', false) }}</h3>
    <ul class="facts">
      <li>{{ display('五行局', false) }}　{{ display(fiveElementsClass, false) }}</li>
      <li>{{ display('命宮', false) }}　{{ display(soul, false) }}</li>
      <li>{{ display('身宮', false) }}　{{ display(body, false) }}</li>
      <li v-if="gender">{{ display('性別', false) }}　{{ display(gender, false) }}</li>
      <li v-if="lunarDate">{{ lunarDate }}</li>
      <li v-if="chineseDate">{{ chineseDate }}</li>
      <li v-if="horoscope">
        {{ display('大限', false) }} {{ horoscope.decadalRange }}　
        {{ display('流年', false) }} {{ horoscope.yearly }}
      </li>
    </ul>

    <h3>{{ display('十二宮星曜', false) }}</h3>
    <ol class="palaces">
      <li v-for="item in readings" :key="item.name + item.earthlyBranch">
        <strong>
          {{ display(item.aliasName, false) }}
          {{ item.heavenlyStem }}{{ item.earthlyBranch }}
          <span v-if="item.isBodyPalace">{{ display('（身宮）', false) }}</span>
        </strong>
        <p>{{ display('星曜', false) }}　{{ display(item.starLine, false) }}</p>
        <p v-if="item.mutagenLine">{{ display('四化', false) }}　{{ display(item.mutagenLine, false) }}</p>
      </li>
    </ol>

    <h3>{{ display('本盤命中的卷一原文', false) }}</h3>
    <p v-if="!classicHits.length" class="empty">
      {{ display('本盤主星未抽到對應原句。可點盤上星曜，查看《諸星問答論》全文。', false) }}
    </p>
    <article v-for="hit in classicHits" :key="hit.key" class="hit">
      <header>
        {{ display(hit.palace, false) }}
        <span>　{{ display(hit.source, false) }}</span>
      </header>
      <p class="classic">{{ display(hit.classic) }}</p>
      <button v-if="hit.bookId" type="button" class="link" @click="$emit('goto', hit.bookId)">
        {{ display('站內原文', false) }}
      </button>
    </article>

    <h3>{{ display('本盤格局歌訣', false) }}</h3>
    <p v-if="!patterns.length" class="empty">
      {{ display('本盤未匹配到卷一格局歌訣。', false) }}
    </p>
    <article v-for="p in patterns" :key="p.name" class="hit">
      <header>{{ display(p.name, false) }}</header>
      <p class="meta">{{ display(p.condition) }}</p>
      <p class="classic">{{ display(p.originalText) }}</p>
    </article>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue';
import type { HoroscopeView } from '@/utils/chart';
import type { MatchedPattern, PalaceReading } from '@/types';
import { useDisplayText } from '@/composables/useDisplayText';

interface ClassicHit {
  key: string;
  palace: string;
  source: string;
  classic: string;
  bookId?: string;
}

export default defineComponent({
  name: 'ChartPersonSummary',
  props: {
    readings: { type: Array as PropType<PalaceReading[]>, default: () => [] },
    patterns: { type: Array as PropType<MatchedPattern[]>, default: () => [] },
    fiveElementsClass: { type: String, default: '' },
    soul: { type: String, default: '' },
    body: { type: String, default: '' },
    gender: { type: String, default: '' },
    lunarDate: { type: String, default: '' },
    chineseDate: { type: String, default: '' },
    horoscope: { type: Object as PropType<HoroscopeView | null>, default: null },
  },
  emits: {
    goto: (_id: string) => true,
  },
  setup(props) {
    const { display } = useDisplayText();

    const classicHits = computed<ClassicHit[]>(() => {
      const seen = new Set<string>();
      const list: ClassicHit[] = [];
      props.readings.forEach((item) => {
        item.quotes.forEach((q) => {
          const key = `${item.aliasName}-${q.classic}`;
          if (seen.has(q.classic)) return;
          seen.add(q.classic);
          list.push({
            key,
            palace: `${item.aliasName}（${item.heavenlyStem}${item.earthlyBranch}）`,
            source: q.cite.title,
            classic: q.classic,
            bookId: q.cite.bookId,
          });
        });
      });
      return list;
    });

    return { display, classicHits };
  },
});
</script>

<style scoped>
h3 {
  margin: 20px 0 8px;
  font-size: 0.95em;
  letter-spacing: 0.16em;
  color: var(--zw-primary);
}
h3:first-of-type {
  margin-top: 4px;
}
.note,
.empty,
.meta {
  font-size: 0.75em;
  color: var(--zw-muted);
  line-height: 1.7;
}
.facts,
.palaces {
  margin: 0;
  padding: 0;
  list-style: none;
}
.facts li,
.palaces li {
  padding: 8px 0;
  border-bottom: 1px solid var(--zw-line);
  font-size: 0.9em;
  line-height: 1.7;
}
.palaces p {
  margin: 4px 0 0;
  color: var(--zw-muted);
  font-size: 0.85em;
}
.hit {
  padding: 12px 0;
  border-bottom: 1px solid var(--zw-line);
}
.hit header {
  font-size: 0.85em;
  color: var(--zw-gold);
  margin-bottom: 6px;
}
.classic {
  font-size: 0.9em;
  line-height: 1.85;
  margin: 0;
}
.link {
  margin-top: 6px;
  color: var(--zw-gold);
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.75em;
  text-decoration: underline;
}
</style>
