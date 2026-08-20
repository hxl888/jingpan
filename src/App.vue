<template>
  <div class="app-shell min-h-screen flex flex-col" :class="deviceClass">
    <AppHeader />
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <keep-alive include="ChartPage,NamingPage,YijingPage,YaoguaPage">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import { useDevice } from '@/composables/useDevice';

export default defineComponent({
  name: 'App',
  components: { AppHeader, AppFooter },
  setup() {
    const { deviceClass } = useDevice();
    return { deviceClass };
  },
});
</script>
