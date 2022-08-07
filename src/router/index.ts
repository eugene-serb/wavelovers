import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PatternsView from '@/views/PatternsView.vue';
import ManualView from '@/views/ManualView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'patterns-view',
        component: PatternsView,
    },
    {
        path: '/manual',
        name: 'manual-view',
        component: ManualView,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

