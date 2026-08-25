import html2canvas, { type Options } from 'html2canvas';

/** 导出图四周留白（屏上盘面贴边，保存时需外圈 padding） */
const CAPTURE_PADDING_PX = 20;

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

interface CaptureMetrics {
  width: number;
  height: number;
  boardWidth: number;
  boardHeight: number;
}

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

function resolveCaptureRoot(source: HTMLElement): HTMLElement {
  const wrap = source.querySelector('.chart-board-wrap');
  return wrap instanceof HTMLElement ? wrap : source;
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
    const inline = clone.getAttribute('style') || '';
    if (cssText) clone.style.cssText = `${cssText};${inline}`;
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

function measureCapture(source: HTMLElement): CaptureMetrics {
  const board = source.querySelector('.chart-board');
  const wrap = source.classList.contains('chart-board-wrap') ? source : source.querySelector('.chart-board-wrap') ?? source;
  const wrapRect = wrap.getBoundingClientRect();
  const boardRect = board instanceof HTMLElement ? board.getBoundingClientRect() : wrapRect;
  return {
    width: Math.max(1, Math.ceil(wrapRect.width)),
    height: Math.max(1, Math.ceil(wrapRect.height)),
    boardWidth: Math.max(1, Math.ceil(boardRect.width)),
    boardHeight: Math.max(1, Math.ceil(boardRect.height)),
  };
}

/** 锁定 H5 上由内容撑开的行高，避免离屏克隆塌缩；略加缓冲防 html2canvas 裁切首行字形 */
function lockPalaceHeights(source: HTMLElement, clone: HTMLElement) {
  const sourcePalaces = source.querySelectorAll('.palace');
  const clonePalaces = clone.querySelectorAll('.palace');
  for (let i = 0; i < sourcePalaces.length && i < clonePalaces.length; i += 1) {
    const src = sourcePalaces[i];
    const dst = clonePalaces[i];
    if (!(src instanceof HTMLElement) || !(dst instanceof HTMLElement)) continue;
    const h = Math.ceil(src.getBoundingClientRect().height);
    // +8：中文字形 ascent 在 html2canvas 里常比布局盒略高，精确等高会切掉第一行顶缘
    dst.style.minHeight = `${h + 8}px`;
    dst.style.height = 'auto';
    dst.style.boxSizing = 'border-box';
    dst.style.overflow = 'visible';
  }
}

/** 从已写入的 inline padding 读取单边，缺省用 fallback */
function readPaddingTop(el: HTMLElement, fallback: number): number {
  const v = parseFloat(el.style.paddingTop);
  return Number.isFinite(v) ? v : fallback;
}

/** 导出时保证宫名行 / 大限标签 / 星曜不被 html2canvas 切掉顶缘 */
function fixPalaceTextClip(cloneRoot: HTMLElement) {
  cloneRoot.querySelectorAll('.palace').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    el.style.overflow = 'visible';
    // 宋体 ascent 在 canvas 栅格化时高出布局盒，顶 padding 必须加大
    const pt = readPaddingTop(el, 7);
    el.style.paddingTop = `${pt + 8}px`;
  });

  cloneRoot.querySelectorAll('.palace-head').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    el.style.overflow = 'visible';
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'space-between';
    el.style.gap = '4px';
    el.style.lineHeight = '1.85';
    el.style.minHeight = '1.85em';
    el.style.paddingTop = '3px';
    el.style.paddingBottom = '2px';
    el.style.margin = '0';
    el.style.letterSpacing = 'normal';
  });

  cloneRoot.querySelectorAll('.palace-head span').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    el.style.overflow = 'visible';
    el.style.textOverflow = 'clip';
    el.style.whiteSpace = 'nowrap';
    el.style.display = 'inline-block';
    el.style.lineHeight = '1.85';
    el.style.paddingTop = '2px';
    el.style.paddingBottom = '2px';
    el.style.letterSpacing = 'normal';
    el.style.verticalAlign = 'middle';
  });

  cloneRoot.querySelectorAll('.limit-tags').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    el.style.overflow = 'visible';
    el.style.margin = '4px 0';
  });

  cloneRoot.querySelectorAll('.limit-tags em').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    el.style.display = 'inline-block';
    el.style.lineHeight = '1.6';
    el.style.padding = '3px 6px';
    el.style.overflow = 'visible';
    el.style.boxSizing = 'border-box';
  });

  cloneRoot.querySelectorAll('.decadal').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    el.style.overflow = 'visible';
    el.style.lineHeight = '1.5';
    el.style.margin = '2px 0 6px';
    el.style.paddingTop = '1px';
  });

  cloneRoot.querySelectorAll('.stars').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    el.style.overflow = 'visible';
  });

  cloneRoot.querySelectorAll('.star').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    el.style.overflow = 'visible';
    el.style.lineHeight = '1.55';
    el.style.paddingTop = '1px';
    el.style.paddingBottom = '1px';
  });

  cloneRoot.querySelectorAll('.center-panel').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    el.style.overflow = 'visible';
    el.style.paddingTop = '14px';
  });

  cloneRoot.querySelectorAll('.center-panel p').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    el.style.lineHeight = '1.85';
    el.style.paddingTop = '2px';
    el.style.overflow = 'visible';
  });
}

/** 离屏克隆无父级宽度时 H5 的 grid/flex 会塌，锁定与屏上一致的像素尺寸 */
function lockCaptureLayout(source: HTMLElement, clone: HTMLElement, metrics: CaptureMetrics) {
  clone.style.boxSizing = 'border-box';
  clone.style.width = `${metrics.width}px`;
  clone.style.maxWidth = `${metrics.width}px`;
  clone.style.height = 'auto';
  clone.style.overflow = 'visible';
  clone.style.margin = '0';
  clone.style.padding = '0';

  const sourceBoard = source.querySelector('.chart-board');
  const cloneBoard = clone.querySelector('.chart-board');
  if (sourceBoard instanceof HTMLElement && cloneBoard instanceof HTMLElement) {
    const cs = getComputedStyle(sourceBoard);
    cloneBoard.style.boxSizing = 'border-box';
    cloneBoard.style.width = `${metrics.boardWidth}px`;
    cloneBoard.style.minWidth = `${metrics.boardWidth}px`;
    cloneBoard.style.maxWidth = `${metrics.boardWidth}px`;
    // 不锁死总高，让行高随宫位内容（含缓冲）撑开，避免首行被挤切
    cloneBoard.style.minHeight = `${metrics.boardHeight}px`;
    cloneBoard.style.height = 'auto';
    cloneBoard.style.transform = 'none';
    cloneBoard.style.display = 'grid';
    cloneBoard.style.gridTemplateColumns = cs.gridTemplateColumns;
    cloneBoard.style.gridTemplateRows = 'repeat(4, minmax(0, auto))';
    cloneBoard.style.gap = cs.gap;
    cloneBoard.style.overflow = 'visible';
  }

  lockPalaceHeights(source, clone);
}

/** 仅去掉 html2canvas 默认 button 外观，不覆盖星曜按钮的布局样式 */
function fixCaptureButtons(root: HTMLElement) {
  root.querySelectorAll('button').forEach((btn) => {
    if (!(btn instanceof HTMLElement)) return;
    btn.style.appearance = 'none';
    btn.style.setProperty('-webkit-appearance', 'none');
    if (!btn.classList.contains('star')) {
      btn.style.border = 'none';
      btn.style.background = 'transparent';
      btn.style.margin = '0';
    }
    btn.style.fontFamily = 'inherit';
    btn.style.lineHeight = 'inherit';
    btn.style.textAlign = 'inherit';
  });
}

/** 命宫 / 大限 / 流年：实线边框，避免 html2canvas 画 inset 阴影错位；同步补回被边框吃掉的内边距 */
function fixMingBorders(cloneRoot: HTMLElement, gold: string) {
  const primary =
    getComputedStyle(document.documentElement).getPropertyValue('--zw-primary').trim() || '#3a2e5c';

  cloneRoot.querySelectorAll('.palace.is-ming, .palace.is-yearly').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    el.style.boxShadow = 'none';
    el.style.border = `2px solid ${gold}`;
  });
  cloneRoot.querySelectorAll('.palace.is-decadal').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    el.style.boxShadow = 'none';
    el.style.border = `2px solid ${primary}`;
  });
}

function prepareClone(source: HTMLElement, clone: HTMLElement, metrics: CaptureMetrics, gold: string) {
  applyCapturedStyles(source, clone);
  lockCaptureLayout(source, clone, metrics);
  fixCaptureButtons(clone);
  fixMingBorders(clone, gold);
  // 必须在改边框之后再加大顶距，否则 2px 金框会重新挤切首行
  fixPalaceTextClip(clone);
}

function createOffscreenClone(
  source: HTMLElement,
  metrics: CaptureMetrics,
  paper: string,
): { wrapper: HTMLElement; frame: HTMLElement; clone: HTMLElement } {
  const pad = CAPTURE_PADDING_PX;
  const frameW = metrics.width + pad * 2;

  const wrapper = document.createElement('div');
  wrapper.setAttribute('aria-hidden', 'true');
  wrapper.style.cssText = [
    'position:fixed',
    'left:-10000px',
    'top:0',
    `width:${frameW}px`,
    'pointer-events:none',
    'opacity:0',
    'z-index:-1',
    'overflow:visible',
  ].join(';');

  // 外框：纸色底 + 四周留白，避免盘面贴到图片边缘
  const frame = document.createElement('div');
  frame.style.cssText = [
    'box-sizing:border-box',
    `width:${frameW}px`,
    `padding:${pad}px`,
    `background:${paper || '#fbf4e4'}`,
    'overflow:visible',
  ].join(';');

  const clone = source.cloneNode(true) as HTMLElement;
  frame.appendChild(clone);
  wrapper.appendChild(frame);
  document.body.appendChild(wrapper);
  return { wrapper, frame, clone };
}

export async function captureElement(
  source: HTMLElement,
  options?: Partial<Options>,
): Promise<HTMLCanvasElement> {
  source.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  await new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });

  const target = resolveCaptureRoot(source);
  captureSubtreeStyles(target);
  const metrics = measureCapture(target);
  const paper =
    getComputedStyle(document.documentElement).getPropertyValue('--zw-paper').trim() || '#fbf4e4';
  const gold = getComputedStyle(document.documentElement).getPropertyValue('--zw-gold').trim() || '#c8a967';
  const pad = CAPTURE_PADDING_PX;

  const { wrapper, frame, clone } = createOffscreenClone(target, metrics, paper);
  prepareClone(target, clone, metrics, gold);

  try {
    // 先布局再量真实高度：宫位缓冲后总高可能大于屏上
    const layoutH = Math.max(
      metrics.height,
      metrics.boardHeight,
      Math.ceil(clone.getBoundingClientRect().height),
      Math.ceil(frame.scrollHeight),
    );
    const captureWidth = metrics.width + pad * 2;
    const captureHeight = layoutH + pad * 2;
    frame.style.width = `${captureWidth}px`;
    return await html2canvas(frame, {
      backgroundColor: paper,
      scale: Math.min(2, window.devicePixelRatio || 2),
      logging: false,
      useCORS: true,
      width: captureWidth,
      height: captureHeight,
      windowWidth: captureWidth,
      windowHeight: captureHeight,
      scrollX: 0,
      scrollY: 0,
      ...options,
      onclone: (doc, iframeClone) => {
        stripCloneStyles(doc, iframeClone);
        // iframeClone 是 frame；内部第一个子节点才是盘面克隆
        const boardClone = iframeClone.firstElementChild;
        if (boardClone instanceof HTMLElement) {
          prepareClone(target, boardClone, metrics, gold);
        }
        options?.onclone?.(doc, iframeClone);
      },
    });
  } finally {
    wrapper.remove();
    clearCapturedStyles(target);
  }
}
