import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import type { ScriptMode, ThemeMode } from '@/types';

const STORAGE_KEY = 'zw-site-prefs';

interface Prefs {
  theme: ThemeMode;
  script: ScriptMode;
  fontSize: number;
}

function loadPrefs(): Prefs {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { theme: 'xuanpaper', script: 'hant', fontSize: 18, ...JSON.parse(raw) };
  } catch {
    /* ignore */
  }
  return { theme: 'xuanpaper', script: 'hant', fontSize: 18 };
}

export const useAppStore = defineStore('app', () => {
  const initial = loadPrefs();
  const theme = ref<ThemeMode>(initial.theme);
  const script = ref<ScriptMode>(initial.script);
  const fontSize = ref(initial.fontSize);

  const isDark = computed(() => theme.value === 'nightsky');
  const iztroLang = computed(() => (script.value === 'hans' ? 'zh-CN' : 'zh-TW'));

  function persist() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ theme: theme.value, script: script.value, fontSize: fontSize.value }),
    );
  }

  function applyDom() {
    const root = document.documentElement;
    root.classList.toggle('dark', isDark.value);
    root.classList.toggle('theme-nightsky', isDark.value);
    root.classList.toggle('theme-xuanpaper', !isDark.value);
    root.style.setProperty('--zw-font-size', `${fontSize.value}px`);
    root.lang = script.value === 'hans' ? 'zh-Hans' : 'zh-Hant';
  }

  function setTheme(next: ThemeMode) {
    theme.value = next;
  }

  function toggleTheme() {
    theme.value = isDark.value ? 'xuanpaper' : 'nightsky';
  }

  function setScript(next: ScriptMode) {
    script.value = next;
  }

  function toggleScript() {
    script.value = script.value === 'hans' ? 'hant' : 'hans';
  }

  function bumpFont(delta: number) {
    fontSize.value = Math.min(24, Math.max(14, fontSize.value + delta));
  }

  watch([theme, script, fontSize], () => {
    persist();
    applyDom();
  });

  applyDom();

  return {
    theme,
    script,
    fontSize,
    isDark,
    iztroLang,
    setTheme,
    toggleTheme,
    setScript,
    toggleScript,
    bumpFont,
  };
});
