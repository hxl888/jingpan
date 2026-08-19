import { onMounted, onUnmounted, ref } from 'vue';
import { lerpHeading, normalizeDeg } from '@/utils/luopan';

type DeviceOrientationCtor = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<PermissionState>;
};

interface CompassOrientationEvent extends DeviceOrientationEvent {
  webkitCompassHeading?: number;
}

function readHeading(event: CompassOrientationEvent): number | null {
  if (typeof event.webkitCompassHeading === 'number' && !Number.isNaN(event.webkitCompassHeading)) {
    return normalizeDeg(event.webkitCompassHeading);
  }
  if (event.absolute && typeof event.alpha === 'number') {
    return normalizeDeg(360 - event.alpha);
  }
  if (typeof event.alpha === 'number') {
    return normalizeDeg(360 - event.alpha);
  }
  return null;
}

export function useCompassHeading() {
  const heading = ref(0);
  const live = ref(false);
  const needsPermission = ref(false);
  const denied = ref(false);
  const supported = ref(false);

  let raw = 0;
  let raf = 0;

  const onOrient = (event: Event) => {
    const next = readHeading(event as CompassOrientationEvent);
    if (next === null) return;
    raw = next;
    live.value = true;
  };

  const tick = () => {
    heading.value = lerpHeading(heading.value, raw, live.value ? 0.18 : 1);
    raf = window.requestAnimationFrame(tick);
  };

  const bind = () => {
    window.addEventListener('deviceorientationabsolute', onOrient, true);
    window.addEventListener('deviceorientation', onOrient, true);
  };

  const unbind = () => {
    window.removeEventListener('deviceorientationabsolute', onOrient, true);
    window.removeEventListener('deviceorientation', onOrient, true);
  };

  const requestStart = async () => {
    denied.value = false;
    const Ctor = window.DeviceOrientationEvent as DeviceOrientationCtor | undefined;
    if (!Ctor) {
      supported.value = false;
      return;
    }
    supported.value = true;
    if (typeof Ctor.requestPermission === 'function') {
      try {
        const state = await Ctor.requestPermission();
        if (state !== 'granted') {
          denied.value = true;
          needsPermission.value = true;
          return;
        }
        needsPermission.value = false;
      } catch {
        denied.value = true;
        needsPermission.value = true;
        return;
      }
    }
    bind();
  };

  onMounted(() => {
    const Ctor = window.DeviceOrientationEvent as DeviceOrientationCtor | undefined;
    supported.value = Boolean(Ctor);
    needsPermission.value = Boolean(Ctor && typeof Ctor.requestPermission === 'function');
    if (Ctor && typeof Ctor.requestPermission !== 'function') {
      bind();
    }
    raf = window.requestAnimationFrame(tick);
  });

  onUnmounted(() => {
    unbind();
    window.cancelAnimationFrame(raf);
  });

  return { heading, live, needsPermission, denied, supported, requestStart };
}
