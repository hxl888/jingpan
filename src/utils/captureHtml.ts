import html2canvas, { type Options } from 'html2canvas';

/** html2canvas 1.x 无法解析的现代颜色语法 */
const UNSUPPORTED_COLOR_RE = /\b(color-mix|color|oklch|oklab|lab|lch)\s*\(/i;

/** 截图时易出问题的属性：跳过或另行处理 */
const SKIP_PROPS = new Set([
  'all',
  'd',
  'content',
  'transform',
  'transform-origin',
  'zoom',
  'perspective',
  'filter',
  'backdrop-filter',
  'box-shadow',
]);

const precomputedStyles = new WeakMap<Element, string>();

function isUnsupportedColorValue(value: string): boolean {
  return Boolean(value && UNSUPPORTED_COLOR_RE.test(value));
}

/** 将 color-mix / color(srgb …) 等转为 #rrggbb，供 html2canvas 使用 */
function normalizeColorValue(value: string): string {
  if (!value || !isUnsupportedColorValue(value)) return value;
  try {
    const ctx = document.createElement('canvas').getContext('2d');
    if (!ctx) return value;
    ctx.fillStyle = '#000000';
    ctx.fillStyle = value;
    return ctx.fillStyle;
  } catch {
    return value;
  }
}

function isColorLikeProp(prop: string): boolean {
  return (
    prop.includes('color') ||
    prop === 'background' ||
    prop.startsWith('border') ||
    prop === 'fill' ||
    prop === 'stroke' ||
    prop === 'box-shadow' ||
    prop === 'outline'
  );
}

/** 在样式表仍启用时采集已解析样式，供导出克隆节点使用 */
function captureSubtreeStyles(source: Element) {
  if (source instanceof HTMLElement) {
    const cs = getComputedStyle(source);
    const parts: string[] = [];
    for (let i = 0; i < cs.length; i += 1) {
      const prop = cs.item(i);
      if (!prop || SKIP_PROPS.has(prop)) continue;
      let value = cs.getPropertyValue(prop);
      if (isColorLikeProp(prop)) {
        value = normalizeColorValue(value);
      }
      if (isUnsupportedColorValue(value)) continue;
      parts.push(`${prop}:${value}${cs.getPropertyPriority(prop) ? ' !important' : ''}`);
    }
    parts.push('transform:none', 'transform-origin:center center', 'box-shadow:none');
    precomputedStyles.set(source, parts.join(';'));
  }
  for (let i = 0; i < source.children.length; i += 1) {
    captureSubtreeStyles(source.children[i]);
  }
}

function clearCapturedStyles(source: Element) {
  precomputedStyles.delete(source);
  for (let i = 0; i < source.children.length; i += 1) {
    clearCapturedStyles(source.children[i]);
  }
}

function applyCapturedStyles(source: Element, clone: Element) {
  if (source instanceof HTMLElement && clone instanceof HTMLElement) {
    const cssText = precomputedStyles.get(source);
    if (cssText) clone.style.cssText = `${cssText};${clone.style.cssText}`;
  }
  const sourceKids = source.children;
  const cloneKids = clone.children;
  for (let i = 0; i < sourceKids.length && i < cloneKids.length; i += 1) {
    applyCapturedStyles(sourceKids[i], cloneKids[i]);
  }
}

/** 去掉克隆文档中的样式表，避免 html2canvas 再次解析 color-mix 等 */
function stripCloneStyles(doc: Document, root: HTMLElement) {
  doc.querySelectorAll('style, link[rel="stylesheet"]').forEach((node) => node.remove());
  root.querySelectorAll('style, link[rel="stylesheet"]').forEach((node) => node.remove());
}

/** 命宫：把 inset 金框改成实线边框，避免 html2canvas 画成底条白缝 */
function fixMingBorders(cloneRoot: HTMLElement, gold: string) {
  cloneRoot.querySelectorAll('.is-ming').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    el.style.boxShadow = 'none';
    el.style.border = `2px solid ${gold}`;
    el.style.padding = '5px';
  });
}

function createOffscreenClone(source: HTMLElement): { wrapper: HTMLElement; clone: HTMLElement } {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('aria-hidden', 'true');
  wrapper.style.cssText = [
    'position:fixed',
    'left:-10000px',
    'top:0',
    'width:max-content',
    'pointer-events:none',
    'opacity:0',
    'z-index:-1',
  ].join(';');
  const clone = source.cloneNode(true) as HTMLElement;
  wrapper.appendChild(clone);
  document.body.appendChild(wrapper);
  return { wrapper, clone };
}

export async function captureElement(
  source: HTMLElement,
  options?: Partial<Options>,
): Promise<HTMLCanvasElement> {
  captureSubtreeStyles(source);
  const paper = getComputedStyle(document.documentElement).getPropertyValue('--zw-paper').trim();
  const gold = getComputedStyle(document.documentElement).getPropertyValue('--zw-gold').trim() || '#c8a967';

  const { wrapper, clone } = createOffscreenClone(source);
  applyCapturedStyles(source, clone);
  fixMingBorders(clone, gold);

  try {
    return await html2canvas(clone, {
      backgroundColor: paper || '#fbf4e4',
      scale: 2,
      logging: false,
      useCORS: true,
      ...options,
      onclone: (doc, iframeClone) => {
        stripCloneStyles(doc, iframeClone);
        applyCapturedStyles(clone, iframeClone);
        fixMingBorders(iframeClone, gold);
        options?.onclone?.(doc, iframeClone);
      },
    });
  } finally {
    wrapper.remove();
    clearCapturedStyles(source);
  }
}
