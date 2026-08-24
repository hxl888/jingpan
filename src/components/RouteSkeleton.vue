<template>
  <div class="route-skeleton" aria-hidden="true">
    <template v-if="type === 'list'">
      <div class="sk-title" />
      <div class="sk-grid">
        <div v-for="i in 4" :key="i" class="sk-card" />
      </div>
    </template>

    <template v-else-if="type === 'detail'">
      <div class="sk-title sk-title--md" />
      <div class="sk-hero" />
      <div class="sk-line" />
      <div class="sk-line sk-line--90" />
      <div class="sk-line sk-line--80" />
      <div class="sk-line sk-line--70" />
    </template>

    <template v-else>
      <div class="sk-title" />
      <div class="sk-field" />
      <div class="sk-field" />
      <div class="sk-field" />
      <div class="sk-result" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { SkeletonType } from '@/composables/useRouteLoading';

export default defineComponent({
  name: 'RouteSkeleton',
  props: {
    type: {
      type: String as PropType<SkeletonType>,
      default: 'list',
    },
  },
});
</script>

<style scoped>
.route-skeleton {
  max-width: 960px;
  margin: 0 auto;
  padding: 1.25rem 1rem 2.5rem;
  pointer-events: none;
}

.sk-title {
  height: 1.25rem;
  width: 28%;
  margin-bottom: 1.25rem;
  border-radius: 4px;
  background: color-mix(in srgb, var(--zw-ink, #2a2620) 10%, transparent);
}

.sk-title--md {
  width: 42%;
}

.sk-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.sk-card {
  height: 5.5rem;
  border-radius: 8px;
  background: color-mix(in srgb, var(--zw-ink, #2a2620) 8%, transparent);
}

.sk-hero {
  height: 7.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  background: color-mix(in srgb, var(--zw-ink, #2a2620) 8%, transparent);
}

.sk-line {
  height: 0.7rem;
  width: 95%;
  margin-bottom: 0.55rem;
  border-radius: 4px;
  background: color-mix(in srgb, var(--zw-ink, #2a2620) 8%, transparent);
}

.sk-line--90 {
  width: 90%;
}

.sk-line--80 {
  width: 80%;
}

.sk-line--70 {
  width: 70%;
}

.sk-field {
  height: 2.5rem;
  margin-bottom: 0.65rem;
  border-radius: 6px;
  background: color-mix(in srgb, var(--zw-ink, #2a2620) 8%, transparent);
}

.sk-result {
  height: 10rem;
  margin-top: 0.5rem;
  border-radius: 8px;
  background: color-mix(in srgb, var(--zw-ink, #2a2620) 8%, transparent);
}

@media (min-width: 768px) {
  .route-skeleton {
    padding: 1.75rem 1.5rem 3rem;
  }

  .sk-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .sk-grid .sk-card:nth-child(4) {
    display: none;
  }
}
</style>
