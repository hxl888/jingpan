import type { BuiltChart } from '@/utils/chart';
import type { ChartPalace, ExcerptItem, MatchedPattern, PalaceReading } from '@/types';

export interface ChartAiPayload {
  meta: {
    solarDate?: string;
    gender?: string;
    lunarDate?: string;
    fiveElementsClass?: string;
  };
  palaces: Array<{
    name: string;
    aliasName: string;
    stars: string[];
  }>;
  patterns: Array<{
    name: string;
    condition: string;
    text: string;
  }>;
  excerpts: Array<{
    chapterTitle: string;
    chapterId?: string;
    text: string;
  }>;
  palaceReadings: Array<{
    palace: string;
    classic: string;
    vernacular?: string;
    source?: string;
  }>;
}

function palaceStars(p: ChartPalace): string[] {
  return [...p.majorStars, ...p.minorStars, ...p.adjectiveStars].map((s) => s.name);
}

export function buildChartAiPayload(input: {
  chart: BuiltChart;
  palaces: ChartPalace[];
  patterns: MatchedPattern[];
  excerpts: ExcerptItem[];
  readings: PalaceReading[];
}): ChartAiPayload {
  const { chart, palaces, patterns, excerpts, readings } = input;

  return {
    meta: {
      solarDate: chart.solarDate,
      gender: chart.gender,
      lunarDate: chart.lunarDate,
      fiveElementsClass: chart.fiveElementsClass,
    },
    palaces: palaces.map((p) => ({
      name: p.name,
      aliasName: p.aliasName,
      stars: palaceStars(p),
    })),
    patterns: patterns.map((p) => ({
      name: p.name,
      condition: p.condition,
      text: p.originalText,
    })),
    excerpts: excerpts.map((e) => ({
      chapterTitle: e.chapterTitle,
      chapterId: e.chapterId,
      text: e.text,
    })),
    palaceReadings: readings.flatMap((r) =>
      r.quotes.map((q) => ({
        palace: r.aliasName,
        classic: q.classic,
        vernacular: q.vernacular || undefined,
        source: q.cite.title,
      })),
    ),
  };
}

export function hasChartAiMaterial(payload: ChartAiPayload): boolean {
  return payload.patterns.length > 0 || payload.excerpts.length > 0 || payload.palaceReadings.length > 0;
}
