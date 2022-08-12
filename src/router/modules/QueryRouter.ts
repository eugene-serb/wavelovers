import router from '@/router';
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

function updateRoute(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) {
    switch (to.fullPath) {
        case '/?custom':
            router.push('/custom');
            break;
        case '/?manual':
            router.push('/manual');
            break;
        case '/?diagnostic':
            router.push('/diagnostic');
            break;
        case '/?faq':
            router.push('/faq');
            break;
        case '/?about':
            router.push('/about');
            break;
        case '/?donate':
            router.push('/donate');
            break;
    }
    return next();
}

const QueryRouter = {
    update: updateRoute,
};

export default QueryRouter;

