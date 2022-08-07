import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PatternsView from '@/views/PatternsView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'patterns-view',
        component: PatternsView,
    },
    {
        path: '/manual',
        name: 'manual-view',
        component: () => import('@/views/ManualView.vue'),
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/NotFoundView.vue'),
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404',
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

