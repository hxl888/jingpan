import type { BuiltChart } from '@/utils/chart';
import type { ChartPalace, ExcerptItem, MatchedPattern, PalaceReading } from '@/types';

const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'] as const;

export interface ChartAiDecade {
  /** 如 5-14 */
  range: string;
  start: number;
  end: number;
  /** 该大限落在的宫位主题名（别名优先） */
  themePalace: string;
  stars: string[];
}

export interface ChartAiSanFangCorner {
  palace: string;
  stars: string[];
}

export interface ChartAiNearTermYear {
  year: number;
  /** 约合虚岁，便于对照大限 */
  age: number;
  isCurrent: boolean;
  decadeRange: string;
  themePalace: string;
  stars: string[];
}

export interface ChartAiNearTerm {
  fromYear: number;
  toYear: number;
  currentYear: number;
  years: ChartAiNearTermYear[];
}

export interface ChartAiPayload {
  meta: {
    solarDate?: string;
    gender?: string;
    lunarDate?: string;
    fiveElementsClass?: string;
    soul?: string;
    body?: string;
  };
  /** 命宫三方四正：本宫、对宫、两合宫 */
  sanFangMing: {
    self: ChartAiSanFangCorner;
    opposite: ChartAiSanFangCorner;
    triA: ChartAiSanFangCorner;
    triB: ChartAiSanFangCorner;
  } | null;
  palaces: Array<{
    name: string;
    aliasName: string;
    stars: string[];
  }>;
  /** 按年龄排序的各大限段 */
  decades: ChartAiDecade[];
  /** 当前年前后各约 5 年 */
  nearTerm: ChartAiNearTerm | null;
  patterns: Array<{
    name: string;
    condition: string;
    /** 仅作素材；模型须改写成白话，不得原文照抄 */
    text: string;
  }>;
  excerpts: Array<{
    chapterTitle: string;
    chapterId?: string;
    text: string;
  }>;
  /** 只传白话译文，不传古文原句 */
  palaceReadings: Array<{
    palace: string;
    vernacular: string;
    source?: string;
  }>;
}

function palaceStars(p: ChartPalace): string[] {
  return [...p.majorStars, ...p.minorStars, ...p.adjectiveStars].map((s) => s.name);
}

function findByBranch(palaces: ChartPalace[], branch: string): ChartPalace | undefined {
  return palaces.find((p) => p.earthlyBranch === branch);
}

function nextBranch(branch: string, step: number): string {
  const i = BRANCHES.indexOf(branch as (typeof BRANCHES)[number]);
  if (i < 0) return branch;
  return BRANCHES[(i + step + 12) % 12];
}

function cornerOf(palace: ChartPalace | undefined): ChartAiSanFangCorner {
  if (!palace) return { palace: '', stars: [] };
  return {
    palace: palace.aliasName || palace.name,
    stars: palaceStars(palace),
  };
}

function buildSanFangMing(palaces: ChartPalace[]): ChartAiPayload['sanFangMing'] {
  const ming = palaces.find((p) => p.name === '命宫' || p.name === '命宮');
  if (!ming) return null;
  return {
    self: cornerOf(ming),
    opposite: cornerOf(findByBranch(palaces, nextBranch(ming.earthlyBranch, 6))),
    triA: cornerOf(findByBranch(palaces, nextBranch(ming.earthlyBranch, 4))),
    triB: cornerOf(findByBranch(palaces, nextBranch(ming.earthlyBranch, 8))),
  };
}

function buildDecades(palaces: ChartPalace[]): ChartAiDecade[] {
  return palaces
    .filter((p) => p.decadal?.range)
    .map((p) => {
      const [start, end] = p.decadal!.range;
      return {
        range: `${start}-${end}`,
        start,
        end,
        themePalace: p.aliasName || p.name,
        stars: palaceStars(p),
      };
    })
    .sort((a, b) => a.start - b.start);
}

function parseBirthYear(solarDate: string): number | null {
  const m = /^(\d{4})/.exec((solarDate || '').trim());
  if (!m) return null;
  const y = Number(m[1]);
  return Number.isFinite(y) ? y : null;
}

/** 当前公历年前后各 5 年，对照大限主题（虚岁约 = 年 - 出生年 + 1） */
function buildNearTerm(solarDate: string, decades: ChartAiDecade[]): ChartAiNearTerm | null {
  const birthYear = parseBirthYear(solarDate);
  if (!birthYear) return null;
  const currentYear = new Date().getFullYear();
  const fromYear = currentYear - 5;
  const toYear = currentYear + 5;
  const years: ChartAiNearTermYear[] = [];
  for (let year = fromYear; year <= toYear; year += 1) {
    const age = year - birthYear + 1;
    const hit =
      decades.find((d) => age >= d.start && age <= d.end) ||
      decades.find((d) => age >= d.start && age <= d.end + 1);
    years.push({
      year,
      age,
      isCurrent: year === currentYear,
      decadeRange: hit?.range || '',
      themePalace: hit?.themePalace || '',
      stars: hit ? hit.stars.slice(0, 8) : [],
    });
  }
  return { fromYear, toYear, currentYear, years };
}

export function buildChartAiPayload(input: {
  chart: BuiltChart;
  palaces: ChartPalace[];
  patterns: MatchedPattern[];
  excerpts: ExcerptItem[];
  readings: PalaceReading[];
}): ChartAiPayload {
  const { chart, palaces, patterns, excerpts, readings } = input;
  const decades = buildDecades(palaces);

  return {
    meta: {
      solarDate: chart.solarDate,
      gender: chart.gender,
      lunarDate: chart.lunarDate,
      fiveElementsClass: chart.fiveElementsClass,
      soul: chart.soul,
      body: chart.body,
    },
    sanFangMing: buildSanFangMing(palaces),
    palaces: palaces.map((p) => ({
      name: p.name,
      aliasName: p.aliasName,
      stars: palaceStars(p),
    })),
    decades,
    nearTerm: buildNearTerm(chart.solarDate, decades),
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
      r.quotes
        .map((q) => ({
          palace: r.aliasName,
          vernacular: (q.vernacular || '').trim(),
          source: q.cite.title,
        }))
        .filter((q) => q.vernacular.length > 0),
    ),
  };
}

export function hasChartAiMaterial(payload: ChartAiPayload): boolean {
  return payload.patterns.length > 0 || payload.excerpts.length > 0 || payload.palaceReadings.length > 0;
}
