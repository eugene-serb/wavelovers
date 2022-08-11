import router from '@/router';
import { NavigationGuardNext, RouteLocationNormalized, RouteRecordNormalized } from "vue-router";

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
    }
    return next();
}

const VueRouterQueryRoutes = {
    update: updateRoute,
};

export default VueRouterQueryRoutes;

