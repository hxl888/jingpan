<template>
  <div class="app-shell min-h-screen flex flex-col" :class="deviceClass">
    <RouteProgressBar />
    <AppHeader />
    <main class="flex-1">
      <!-- v-show 保住 keep-alive；懒加载期间由 isLoading 立刻换骨架 -->
      <div v-show="!isLoading">
        <router-view v-slot="{ Component }">
          <keep-alive include="ChartPage,NamingPage,YijingPage,YaoguaPage">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
      <RouteSkeleton v-if="isLoading" :type="skeletonType" />
    </main>
    <AppFooter />
    <OrbitalNavFab />
    <BackToTop />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
import BackToTop from '@/components/BackToTop.vue';
import OrbitalNavFab from '@/components/OrbitalNavFab.vue';
import RouteProgressBar from '@/components/RouteProgressBar.vue';
import RouteSkeleton from '@/components/RouteSkeleton.vue';
import { useDevice } from '@/composables/useDevice';
import { useRouteLoading } from '@/composables/useRouteLoading';

export default defineComponent({
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    BackToTop,
    OrbitalNavFab,
    RouteProgressBar,
    RouteSkeleton,
  },
  setup() {
    const { deviceClass } = useDevice();
    const { isLoading, skeletonType } = useRouteLoading();
    return { deviceClass, isLoading, skeletonType };
  },
});
</script>
