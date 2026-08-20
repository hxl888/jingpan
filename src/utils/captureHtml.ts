import html2canvas, { type Options } from 'html2canvas';

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

/** html2canvas 1.x 不支持 color-mix()，导出前去掉样式表并内联已解析颜色。 */
function stripCloneStyles(doc: Document, root: HTMLElement) {
  doc.querySelectorAll('style, link[rel="stylesheet"]').forEach((node) => node.remove());
  root.querySelectorAll('style, link[rel="stylesheet"]').forEach((node) => node.remove());
}

function inlineSubtreeStyles(source: Element, clone: Element) {
  if (source instanceof HTMLElement && clone instanceof HTMLElement) {
    const cs = getComputedStyle(source);
    for (let i = 0; i < cs.length; i += 1) {
      const prop = cs.item(i);
      if (!prop || SKIP_PROPS.has(prop)) continue;
      clone.style.setProperty(prop, cs.getPropertyValue(prop), cs.getPropertyPriority(prop));
    }
    // 强制复位缩放，避免截图像素缝与边框错位
    clone.style.setProperty('transform', 'none');
    clone.style.setProperty('transform-origin', 'center center');
    clone.style.setProperty('box-shadow', 'none');
  }
  const sourceKids = source.children;
  const cloneKids = clone.children;
  for (let i = 0; i < sourceKids.length && i < cloneKids.length; i += 1) {
    inlineSubtreeStyles(sourceKids[i], cloneKids[i]);
  }
}

/** 命宫：把 inset 金框改成实线边框，避免 html2canvas 画成底条白缝 */
function fixMingBorders(cloneRoot: HTMLElement) {
  const gold =
    getComputedStyle(document.documentElement).getPropertyValue('--zw-gold').trim() || '#c8a967';
  cloneRoot.querySelectorAll('.is-ming').forEach((el) => {
    if (!(el instanceof HTMLElement)) return;
    el.style.boxShadow = 'none';
    el.style.border = `2px solid ${gold}`;
    el.style.padding = '5px';
  });
}

export async function captureElement(
  source: HTMLElement,
  options?: Partial<Options>,
): Promise<HTMLCanvasElement> {
  const paper = getComputedStyle(document.documentElement).getPropertyValue('--zw-paper').trim();
  return html2canvas(source, {
    backgroundColor: paper || '#fbf4e4',
    scale: 2,
    logging: false,
    useCORS: true,
    ...options,
    onclone: (doc, clone) => {
      stripCloneStyles(doc, clone);
      inlineSubtreeStyles(source, clone);
      fixMingBorders(clone);
      options?.onclone?.(doc, clone);
    },
  });
}
