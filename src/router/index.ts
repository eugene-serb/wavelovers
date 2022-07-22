import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import VueRouterMetaTagsTest from '@/modules/VueRouterMetaTags';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Wavelovers',
            metaTags: [
                {
                    name: 'description',
                    content: 'Wavelovers. Use your device vibration correctly. Make a massager out of a gamepad.',
                },
                {
                    name: 'keywords',
                    content: 'Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона',
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
                    name: 'canonical',
                    href: 'https://wavelovers.ru/',
                },
            ],
        },
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        meta: {
            title: 'Wavelovers – About',
            metaTags: [
                {
                    name: 'description',
                    content: 'Wavelovers. Page with information about the project and data on donations.',
                },
                {
                    name: 'keywords',
                    content: 'Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, advertise, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона, реклама',
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
                    name: 'canonical',
                    href: 'https://wavelovers.ru/about',
                },
            ],
        },
    },
    {
        path: '/faq',
        name: 'faq',
        component: () => import('../views/FaqView.vue'),
        meta: {
            title: 'Wavelovers – FAQ',
            metaTags: [
                {
                    name: 'description',
                    content: 'Wavelovers. Frequently asked questions page.',
                },
                {
                    name: 'keywords',
                    content: 'Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, FAQ, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона, часто задаваемые вопросы',
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
                    name: 'canonical',
                    href: 'https://wavelovers.ru/faq',
                },
            ],
        },
    },
    {
        path: '/donate',
        name: 'donate',
        component: () => import('../views/DonateView.vue'),
        meta: {
            title: 'Wavelovers – Donate',
            metaTags: [
                {
                    name: 'description',
                    content: 'Wavelovers. Donate to the author.',
                },
                {
                    name: 'keywords',
                    content: 'Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, Donate, Support, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона, задонатить, пожертвовать, помочь, поблагодарить',
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
                    name: 'canonical',
                    href: 'https://wavelovers.ru/donate',
                },
            ],
        },
    },
    {
        path: '/404',
        name: '404',
        component: () => import('../views/NotFoundView.vue'),
        meta: {
            title: 'Wavelovers – 404 Page not found',
            metaTags: [
                {
                    name: 'description',
                    content: 'Wavelovers. Donate to the author.',
                },
                {
                    name: 'keywords',
                    content: 'Wavelovers, Wave Lovers, Wavemaster, Wave Master, Vibration Master, Vibration, Gamepad, Gamepad Vibration, Vibrate Gamepad, Phone Vibration, Gamepad Tester, Phone Vibration Tester, Vibration Tester, Massager, Vibrator, Satisfyer, Womanizer, Relax, Donate, Support, геймпад, джойстик, вибратор, вибромассажер, вибро, вибромассажёр из геймпада, тестер вибрации геймпада, тестер вибрации телефона, задонатить, пожертвовать, помочь, поблагодарить',
                },
                {
                    name: 'og:title',
                    content: 'Wavelovers – 404 Page not found',
                },
                {
                    name: 'og:description',
                    content: 'Wavelovers. Donate to the author.',
                },
                {
                    name: 'og:url',
                    content: 'https://wavelovers.ru/404',
                },
                {
                    name: 'twitter:title',
                    content: 'Wavelovers – 404 Page not found',
                },
                {
                    name: 'twitter:description',
                    content: 'Wavelovers. Donate to the author.',
                },
            ],
            linkTags: [
                {
                    name: 'canonical',
                    href: 'https://wavelovers.ru/404',
                },
            ],
        },
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404',
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach(VueRouterMetaTagsTest.update);

export default router;

