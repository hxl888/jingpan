/** 风水地盘廿四山：子在正北，顺时针每山 15 度。与常见电子罗盘一致。 */
export interface Mountain {
  name: string;
  gua: string;
  dir: string;
  deg: number;
}

export const MOUNTAINS: Mountain[] = [
  { name: '子', gua: '坎', dir: '正北', deg: 0 },
  { name: '癸', gua: '坎', dir: '北偏東', deg: 15 },
  { name: '丑', gua: '艮', dir: '東北偏北', deg: 30 },
  { name: '艮', gua: '艮', dir: '東北', deg: 45 },
  { name: '寅', gua: '艮', dir: '東北偏東', deg: 60 },
  { name: '甲', gua: '震', dir: '東偏北', deg: 75 },
  { name: '卯', gua: '震', dir: '正東', deg: 90 },
  { name: '乙', gua: '震', dir: '東偏南', deg: 105 },
  { name: '辰', gua: '巽', dir: '東南偏東', deg: 120 },
  { name: '巽', gua: '巽', dir: '東南', deg: 135 },
  { name: '巳', gua: '巽', dir: '東南偏南', deg: 150 },
  { name: '丙', gua: '離', dir: '南偏東', deg: 165 },
  { name: '午', gua: '離', dir: '正南', deg: 180 },
  { name: '丁', gua: '離', dir: '南偏西', deg: 195 },
  { name: '未', gua: '坤', dir: '西南偏南', deg: 210 },
  { name: '坤', gua: '坤', dir: '西南', deg: 225 },
  { name: '申', gua: '坤', dir: '西南偏西', deg: 240 },
  { name: '庚', gua: '兌', dir: '西偏南', deg: 255 },
  { name: '酉', gua: '兌', dir: '正西', deg: 270 },
  { name: '辛', gua: '兌', dir: '西偏北', deg: 285 },
  { name: '戌', gua: '乾', dir: '西北偏西', deg: 300 },
  { name: '乾', gua: '乾', dir: '西北', deg: 315 },
  { name: '亥', gua: '乾', dir: '西北偏北', deg: 330 },
  { name: '壬', gua: '坎', dir: '北偏西', deg: 345 },
];

export const BAGUA_RING = [
  { name: '坎', deg: 0 },
  { name: '艮', deg: 45 },
  { name: '震', deg: 90 },
  { name: '巽', deg: 135 },
  { name: '離', deg: 180 },
  { name: '坤', deg: 225 },
  { name: '兌', deg: 270 },
  { name: '乾', deg: 315 },
] as const;

export function normalizeDeg(deg: number): number {
  return ((deg % 360) + 360) % 360;
}

export function lerpHeading(from: number, to: number, t: number): number {
  const diff = ((to - from + 540) % 360) - 180;
  return normalizeDeg(from + diff * t);
}

export function mountainAt(heading: number): Mountain {
  const idx = Math.round(normalizeDeg(heading) / 15) % MOUNTAINS.length;
  return MOUNTAINS[idx];
}
