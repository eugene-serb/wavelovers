import { RouteRecordRaw } from 'vue-router';
import metaPatterns from '@/router/assets/metas/Patterns';
import metaCustom from '@/router/assets/metas/Custom';
import metaManual from '@/router/assets/metas/Manual';
import metaDiagnostic from '@/router/assets/metas/Diagnostic';
import metaFaq from '@/router/assets/metas/Faq';
import metaAbout from '@/router/assets/metas/About';
import metaDonate from '@/router/assets/metas/Donate';
import meta404 from '@/router/assets/metas/404';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'patterns-view',
    component: () => import('@/views/PatternsView.vue'),
    meta: metaPatterns,
  },
  {
    path: '/custom',
    name: 'custom-view',
    component: () => import('@/views/CustomView.vue'),
    meta: metaCustom,
  },
  {
    path: '/manual',
    name: 'manual-view',
    component: () => import('@/views/ManualView.vue'),
    meta: metaManual,
  },
  {
    path: '/diagnostic',
    name: 'diagnostic-view',
    component: () => import('@/views/DiagnosticView.vue'),
    meta: metaDiagnostic,
  },
  {
    path: '/faq',
    name: 'faq-view',
    component: () => import('@/views/FaqView.vue'),
    meta: metaFaq,
  },
  {
    path: '/about',
    name: 'about-view',
    component: () => import('@/views/AboutView.vue'),
    meta: metaAbout,
  },
  {
    path: '/donate',
    name: 'donate-view',
    component: () => import('@/views/DonateView.vue'),
    meta: metaDonate,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/NotFoundView.vue'),
    meta: meta404,
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/404',
  },
];

export default routes;
