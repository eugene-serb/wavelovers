import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PatternsView from '@/views/PatternsView.vue';
import QueryRouter from '@/router/modules/QueryRouter';
import MetaTagUpdater from '@/router/modules/MetaTagUpdater';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'patterns-view',
        component: PatternsView,
        meta: {
            title: 'Wavelovers',
            metaTags: [],
            linkTags: [
                {
                    rel: 'canonical',
                    href: 'https://wavelovers.ru/',
                },
            ],
        },
    },
    {
        path: '/custom',
        name: 'custom-view',
        component: () => import('@/views/CustomView.vue'),
        meta: {
            title: 'Wavelovers – Custom',
            metaTags: [],
            linkTags: [
                {
                    rel: 'canonical',
                    href: 'https://wavelovers.ru/custom',
                },
            ],
        },
    },
    {
        path: '/manual',
        name: 'manual-view',
        component: () => import('@/views/ManualView.vue'),
        meta: {
            title: 'Wavelovers – Manual',
            metaTags: [],
            linkTags: [
                {
                    rel: 'canonical',
                    href: 'https://wavelovers.ru/manual',
                },
            ],
        },
    },
    {
        path: '/diagnostic',
        name: 'diagnostic-view',
        component: () => import('@/views/DiagnosticView.vue'),
        meta: {
            title: 'Wavelovers – Diagnostic',
            metaTags: [],
            linkTags: [
                {
                    rel: 'canonical',
                    href: 'https://wavelovers.ru/diagnostic',
                },
            ],
        },
    },
    {
        path: '/404',
        name: '404',
        component: () => import('@/views/NotFoundView.vue'),
        meta: {
            title: 'Wavelovers – Page not found',
            metaTags: [],
            linkTags: [
                {
                    rel: 'canonical',
                    href: 'https://wavelovers.ru/404',
                },
            ],
        },
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

router.beforeEach(QueryRouter.update);
router.beforeEach(MetaTagUpdater.update);

export default router;

