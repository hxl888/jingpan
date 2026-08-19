<template>
  <teleport to="body">
    <transition name="drawer-fade">
      <div v-if="modelValue" class="mask" @click="handleClose" />
    </transition>
    <transition name="drawer-slide">
      <aside v-if="modelValue" class="sheet" role="dialog" aria-modal="true">
        <div class="handle" />
        <header class="sheet-head">
          <img src="/assets/decor/yin-yang.svg" alt="" class="yin" width="28" height="28" />
          <strong>{{ display('快捷入口', false) }}</strong>
          <button type="button" class="close" @click="handleClose">{{ display('關閉', false) }}</button>
        </header>
        <nav class="grid">
          <router-link
            v-for="item in links"
            :key="item.path"
            :to="item.path"
            class="cell"
            @click="handleClose"
          >
            <span class="tag">{{ display(item.tag, false) }}</span>
            <b>{{ display(item.label, false) }}</b>
            <em>{{ display(item.desc, false) }}</em>
          </router-link>
        </nav>
        <div class="tools">
          <button type="button" @click="store.toggleScript">
            {{ store.script === 'hant' ? display('繁／簡', false) : '繁/简' }}
          </button>
          <button type="button" @click="store.toggleTheme">
            {{ display(store.isDark ? '宣紙' : '夜空', false) }}
          </button>
          <button type="button" @click="store.bumpFont(-1)">A-</button>
          <button type="button" @click="store.bumpFont(1)">A+</button>
        </div>
      </aside>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useAppStore } from '@/store/app';
import { useDisplayText } from '@/composables/useDisplayText';

export default defineComponent({
  name: 'MobileDrawer',
  props: {
    modelValue: { type: Boolean, default: false },
  },
  emits: {
    'update:modelValue': (_v: boolean) => true,
  },
  setup(_props, { emit }) {
    const store = useAppStore();
    const { display } = useDisplayText();
    const links = [
      { path: '/', label: '首頁', tag: '首', desc: '研習總覽' },
      { path: '/chart', label: '排盤', tag: '盤', desc: '十二宮命盤' },
      { path: '/book', label: '古籍', tag: '卷', desc: '全書三卷' },
      { path: '/star-dict', label: '星曜', tag: '星', desc: '諸星問答' },
      { path: '/pattern-dict', label: '格局', tag: '格', desc: '古本歌訣' },
      { path: '/luopan', label: '羅盤', tag: '針', desc: '八卦廿四山' },
      { path: '/almanac', label: '老黃曆', tag: '曆', desc: '農曆宜忌' },
      { path: '/about', label: '關於', tag: '註', desc: '來源聲明' },
    ];
    const handleClose = () => emit('update:modelValue', false);
    return { store, display, links, handleClose };
  },
});
</script>

<style scoped>
.mask {
  position: fixed;
  inset: 0;
  z-index: 80;
  background: rgba(20, 14, 30, 0.48);
}
.sheet {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90;
  max-height: min(78vh, 640px);
  overflow: auto;
  padding: 10px 16px calc(18px + env(safe-area-inset-bottom));
  border-radius: 18px 18px 0 0;
  background: var(--zw-paper);
  border-top: 1px solid var(--zw-gold);
  box-shadow: 0 -12px 40px rgba(0, 0, 0, 0.22);
}
.handle {
  width: 42px;
  height: 4px;
  margin: 4px auto 12px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--zw-gold) 70%, transparent);
}
.sheet-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}
.sheet-head strong {
  letter-spacing: 0.22em;
}
.yin {
  border-radius: 50%;
}
.close {
  margin-left: auto;
  border: 0;
  background: transparent;
  color: var(--zw-muted);
  font-family: inherit;
  letter-spacing: 0.12em;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.cell {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 12px;
  border: 1px solid var(--zw-line);
  border-radius: 12px;
  text-decoration: none;
  color: var(--zw-ink);
  background: color-mix(in srgb, var(--zw-bg) 55%, var(--zw-paper));
}
.tag {
  width: 28px;
  height: 28px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid var(--zw-gold);
  color: var(--zw-gold);
  font-size: 13px;
}
.cell b {
  font-size: 18px;
  letter-spacing: 0.18em;
}
.cell em {
  font-style: normal;
  font-size: 12px;
  color: var(--zw-muted);
  letter-spacing: 0.08em;
}
.tools {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 14px;
}
.tools button {
  border: 1px solid var(--zw-line);
  background: transparent;
  color: var(--zw-ink);
  padding: 10px 0;
  font-family: inherit;
  letter-spacing: 0.08em;
  border-radius: 10px;
}
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.22s ease;
}
.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
}
.drawer-slide-enter-active,
.drawer-slide-leave-active {
  transition: transform 0.28s ease;
}
.drawer-slide-enter-from,
.drawer-slide-leave-to {
  transform: translateY(100%);
}
</style>
