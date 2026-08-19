<template>
  <header class="site-header" :class="deviceClass">
    <div class="bar">
      <button
        v-if="showChartBack"
        type="button"
        class="back"
        @click="handleChartBack"
      >
        {{ display('返回', false) }}
      </button>
      <router-link to="/" class="logo">
        <img src="/assets/decor/yin-yang.svg" alt="" class="mark" width="22" height="22" />
        <span>{{ display('經盤', false) }}</span>
      </router-link>

      <!-- PC 横栏 -->
      <nav v-if="isPc" class="nav" :aria-label="display('主導航', false)">
        <router-link
          v-for="item in navs"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :active-class="item.path === '/' ? undefined : 'is-active'"
          exact-active-class="is-active"
        >
          {{ display(item.label, false) }}
        </router-link>
      </nav>
      <div v-if="isPc" class="tools">
        <button type="button" class="tool" @click="store.toggleScript">
          {{ store.script === 'hant' ? display('繁／簡', false) : '繁/简' }}
        </button>
        <button type="button" class="tool" @click="store.toggleTheme">
          {{ display(store.isDark ? '宣紙' : '夜空', false) }}
        </button>
        <button type="button" class="tool" @click="store.bumpFont(-1)">A-</button>
        <button type="button" class="tool" @click="store.bumpFont(1)">A+</button>
        <button type="button" class="tool" @click="handleCopy">{{ display('複製', false) }}</button>
      </div>

      <!-- H5 汉堡 -->
      <button
        v-else
        type="button"
        class="burger"
        :aria-label="display('打開菜單', false)"
        @click="drawerOpen = true"
      >
        <i /><i /><i />
      </button>
    </div>
    <MobileDrawer v-model="drawerOpen" />
  </header>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAppStore } from '@/store/app';
import { useChartSessionStore } from '@/store/chartSession';
import { useDisplayText } from '@/composables/useDisplayText';
import { useDevice } from '@/composables/useDevice';
import { copySelection } from '@/utils/copy';
import MobileDrawer from '@/components/MobileDrawer.vue';

export default defineComponent({
  name: 'AppHeader',
  components: { MobileDrawer },
  setup() {
    const store = useAppStore();
    const session = useChartSessionStore();
    const route = useRoute();
    const router = useRouter();
    const { display } = useDisplayText();
    const { isPc, deviceClass } = useDevice();
    const drawerOpen = ref(false);
    const navs = [
      { path: '/', label: '首頁' },
      { path: '/chart', label: '排盤' },
      { path: '/book', label: '古籍' },
      { path: '/star-dict', label: '星曜' },
      { path: '/pattern-dict', label: '格局' },
      { path: '/luopan', label: '羅盤' },
      { path: '/almanac', label: '黃曆' },
      { path: '/about', label: '關於' },
    ];
    const handleCopy = () => copySelection();
    const showChartBack = computed(
      () => route.path === '/book' && (route.query.from === 'chart' || session.isFromChart()),
    );
    const handleChartBack = () => {
      if (window.history.length > 1) {
        router.back();
        return;
      }
      void router.push({ path: '/chart' });
    };
    return {
      store,
      display,
      navs,
      handleCopy,
      isPc,
      deviceClass,
      drawerOpen,
      showChartBack,
      handleChartBack,
    };
  },
});
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  border-bottom: 1px solid var(--zw-line);
  background: color-mix(in srgb, var(--zw-paper) 86%, transparent);
  backdrop-filter: blur(12px);
}
.bar {
  display: flex;
  align-items: center;
  gap: 10px 16px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 12px 24px;
}
.logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--zw-primary);
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.18em;
  font-size: 15px;
}
.back {
  flex: none;
  border: 1px solid var(--zw-gold);
  background: transparent;
  color: var(--zw-ink);
  padding: 6px 10px;
  font-family: inherit;
  font-size: 13px;
  letter-spacing: 0.12em;
  cursor: pointer;
  border-radius: 8px;
}
.mark {
  border-radius: 50%;
  flex: none;
}
.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 2px;
}
.nav-link {
  position: relative;
  padding: 6px 10px;
  color: var(--zw-ink);
  text-decoration: none;
  letter-spacing: 0.16em;
  font-size: 14px;
}
.nav-link.is-active::after,
.nav-link:hover::after {
  content: '';
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 2px;
  height: 1px;
  background: var(--zw-gold);
}
.tools {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-left: auto;
}
.tool {
  border: 1px solid var(--zw-line);
  background: transparent;
  color: var(--zw-ink);
  padding: 4px 10px;
  font-family: inherit;
  font-size: 12px;
  letter-spacing: 0.08em;
  cursor: pointer;
}
.tool:hover {
  border-color: var(--zw-gold);
  color: var(--zw-primary);
}
.burger {
  margin-left: auto;
  width: 42px;
  height: 42px;
  border: 1px solid var(--zw-line);
  border-radius: 10px;
  background: transparent;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0;
}
.burger i {
  display: block;
  width: 18px;
  height: 1.5px;
  background: var(--zw-ink);
}
.is-h5 .bar {
  padding: 10px 14px;
}
.is-h5 .logo span {
  letter-spacing: 0.14em;
}
</style>
