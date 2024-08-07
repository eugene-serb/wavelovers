import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'patterns-view',
    component: () => import('@/views/PatternsView.vue'),
    meta: {
      layout: 'GAMEPAD',
    },
  },
  {
    path: '/custom',
    name: 'custom-view',
    component: () => import('@/views/CustomView.vue'),
    meta: {
      layout: 'GAMEPAD',
    },
  },
  {
    path: '/manual',
    name: 'manual-view',
    component: () => import('@/views/ManualView.vue'),
    meta: {
      layout: 'GAMEPAD',
    },
  },
  {
    path: '/diagnostic',
    name: 'diagnostic-view',
    component: () => import('@/views/DiagnosticView.vue'),
    meta: {
      layout: 'GAMEPAD',
    },
  },
  {
    path: '/mobile',
    redirect: '/phone',
  },
  {
    path: '/phone',
    name: 'phone-view',
    component: () => import('@/views/PhoneView.vue'),
    meta: {
      layout: 'PHONE',
    },
  },
  {
    path: '/mobile-custom',
    redirect: '/phone-custom',
  },
  {
    path: '/phone-custom',
    name: 'phone-custom-view',
    component: () => import('@/views/PhoneCustomView.vue'),
    meta: {
      layout: 'PHONE',
    },
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
