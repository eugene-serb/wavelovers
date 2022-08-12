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
            metaTags: [
                {
                    name: 'keywords',
                    content: 'Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Gamepad Massager, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона',
                },
                {
                    name: 'description',
                    content: 'Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad.',
                },
                {
                    name: 'og:title',
                    content: 'Wavelovers',
                },
                {
                    name: 'og:description',
                    content: 'Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad.',
                },
                {
                    name: 'og:url',
                    content: 'https://wavelovers.ru/',
                },
                {
                    name: 'twitter:title',
                    content: 'Wavelovers',
                },
                {
                    name: 'twitter:description',
                    content: 'Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad.',
                },
            ],
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
            metaTags: [
                {
                    name: 'keywords',
                    content: 'Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Gamepad Massager, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона',
                },
                {
                    name: 'description',
                    content: 'Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad.',
                },
                {
                    name: 'og:title',
                    content: 'Wavelovers – Custom',
                },
                {
                    name: 'og:description',
                    content: 'Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad.',
                },
                {
                    name: 'og:url',
                    content: 'https://wavelovers.ru/custom',
                },
                {
                    name: 'twitter:title',
                    content: 'Wavelovers – Custom',
                },
                {
                    name: 'twitter:description',
                    content: 'Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad.',
                },
            ],
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
            metaTags: [
                {
                    name: 'keywords',
                    content: 'Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Gamepad Massager, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона',
                },
                {
                    name: 'description',
                    content: 'Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad.',
                },
                {
                    name: 'og:title',
                    content: 'Wavelovers – Manual',
                },
                {
                    name: 'og:description',
                    content: 'Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad.',
                },
                {
                    name: 'og:url',
                    content: 'https://wavelovers.ru/manual',
                },
                {
                    name: 'twitter:title',
                    content: 'Wavelovers – Manual',
                },
                {
                    name: 'twitter:description',
                    content: 'Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad.',
                },
            ],
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
            metaTags: [
                {
                    name: 'keywords',
                    content: 'Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Gamepad Massager, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона',
                },
                {
                    name: 'description',
                    content: 'Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad.',
                },
                {
                    name: 'og:title',
                    content: 'Wavelovers – Diagnostic',
                },
                {
                    name: 'og:description',
                    content: 'Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad.',
                },
                {
                    name: 'og:url',
                    content: 'https://wavelovers.ru/diagnostic',
                },
                {
                    name: 'twitter:title',
                    content: 'Wavelovers – Diagnostic',
                },
                {
                    name: 'twitter:description',
                    content: 'Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad.',
                },
            ],
            linkTags: [
                {
                    rel: 'canonical',
                    href: 'https://wavelovers.ru/diagnostic',
                },
            ],
        },
    },
    {
        path: '/faq',
        name: 'faq-view',
        component: () => import('@/views/FaqView.vue'),
        meta: {
            title: 'Wavelovers – FAQ',
            metaTags: [
                {
                    name: 'keywords',
                    content: 'Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Gamepad Massager, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, FAQ, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона, часто задаваемые вопросы',
                },
                {
                    name: 'description',
                    content: 'Wavelovers. Frequently asked questions page.',
                },
                {
                    name: 'og:title',
                    content: 'Wavelovers – FAQ',
                },
                {
                    name: 'og:description',
                    content: 'Wavelovers. Frequently asked questions page.',
                },
                {
                    name: 'og:url',
                    content: 'https://wavelovers.ru/faq',
                },
                {
                    name: 'twitter:title',
                    content: 'Wavelovers – FAQ',
                },
                {
                    name: 'twitter:description',
                    content: 'Wavelovers. Frequently asked questions page.',
                },
            ],
            linkTags: [
                {
                    rel: 'canonical',
                    href: 'https://wavelovers.ru/faq',
                },
            ],
        },
    },
    {
        path: '/about',
        name: 'about-view',
        component: () => import('@/views/AboutView.vue'),
        meta: {
            title: 'Wavelovers – About',
            metaTags: [
                {
                    name: 'keywords',
                    content: 'Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Gamepad Massager, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, advertise, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона, реклама',
                },
                {
                    name: 'description',
                    content: 'Wavelovers. Page with information about the project and data on donations.',
                },
                {
                    name: 'og:title',
                    content: 'Wavelovers – About',
                },
                {
                    name: 'og:description',
                    content: 'Wavelovers. Page with information about the project and data on donations.',
                },
                {
                    name: 'og:url',
                    content: 'https://wavelovers.ru/about',
                },
                {
                    name: 'twitter:title',
                    content: 'Wavelovers – About',
                },
                {
                    name: 'twitter:description',
                    content: 'Wavelovers. Page with information about the project and data on donations.',
                },
            ],
            linkTags: [
                {
                    rel: 'canonical',
                    href: 'https://wavelovers.ru/about',
                },
            ],
        },
    },
    {
        path: '/donate',
        name: 'donate-view',
        component: () => import('@/views/DonateView.vue'),
        meta: {
            title: 'Wavelovers – Donate',
            metaTags: [
                {
                    name: 'keywords',
                    content: 'Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Gamepad Massager, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, Donate, Support, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона, задонатить, пожертвовать, помочь, поблагодарить',
                },
                {
                    name: 'description',
                    content: 'Wavelovers. Donate to the author.',
                },
                {
                    name: 'og:title',
                    content: 'Wavelovers – Donate',
                },
                {
                    name: 'og:description',
                    content: 'Wavelovers. Donate to the author.',
                },
                {
                    name: 'og:url',
                    content: 'https://wavelovers.ru/donate',
                },
                {
                    name: 'twitter:title',
                    content: 'Wavelovers – Donate',
                },
                {
                    name: 'twitter:description',
                    content: 'Wavelovers. Donate to the author.',
                },
            ],
            linkTags: [
                {
                    rel: 'canonical',
                    href: 'https://wavelovers.ru/donate',
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
            metaTags: [
                {
                    name: 'og:title',
                    content: 'Wavelovers – Page not found',
                },
                {
                    name: 'og:url',
                    content: 'https://wavelovers.ru/404',
                },
            ],
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

