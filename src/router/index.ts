import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 };
    }
    if (to.name === 'chart') {
      return false;
    }
    return { top: 0 };
  },
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/home/index.vue') },
    { path: '/chart', name: 'chart', component: () => import('@/views/chart/index.vue') },
    { path: '/book', name: 'book', component: () => import('@/views/book/index.vue') },
    { path: '/star-dict', name: 'star-dict', component: () => import('@/views/star-dict/index.vue') },
    {
      path: '/star-dict/:name',
      name: 'star-dict-detail',
      component: () => import('@/views/star-dict/detail/index.vue'),
    },
    { path: '/pattern-dict', name: 'pattern-dict', component: () => import('@/views/pattern-dict/index.vue') },
    { path: '/luopan', name: 'luopan', component: () => import('@/views/luopan/index.vue') },
    { path: '/almanac', name: 'almanac', component: () => import('@/views/almanac/index.vue') },
    { path: '/about', name: 'about', component: () => import('@/views/about/index.vue') },
  ],
});

export default router;
