import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'patterns-view',
    component: () => import('@/views/PatternsView.vue'),
  },
  {
    path: '/custom',
    name: 'custom-view',
    component: () => import('@/views/CustomView.vue'),
  },
  {
    path: '/manual',
    name: 'manual-view',
    component: () => import('@/views/ManualView.vue'),
  },
  {
    path: '/diagnostic',
    name: 'diagnostic-view',
    component: () => import('@/views/DiagnosticView.vue'),
  },
  {
    path: '/faq',
    name: 'faq-view',
    component: () => import('@/views/FaqView.vue'),
  },
  {
    path: '/about',
    name: 'about-view',
    component: () => import('@/views/AboutView.vue'),
  },
  {
    path: '/donate',
    name: 'donate-view',
    component: () => import('@/views/DonateView.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/NotFoundView.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/404',
  },
];

export default routes;
