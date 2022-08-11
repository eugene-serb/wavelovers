import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PatternsView from '@/views/PatternsView.vue';
import VueRouterQueryRoutes from '@/router/modules/VueRouterQueryRoute';
import VueRouterMetaTags from '@/router/modules/VueRouterMetaTags';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'patterns-view',
        component: PatternsView,
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
        path: '/404',
        name: '404',
        component: () => import('@/views/NotFoundView.vue'),
    },
    {
        path: '/:catchAll(.*)*',
        redirect: '/404',
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(VueRouterQueryRoutes.update);
router.beforeEach(VueRouterMetaTags.update);

export default router;

