import {
  createRouter, createWebHistory,
  NavigationGuardNext, RouteLocationNormalized
} from 'vue-router';
import QueryRouter from '@/router/modules/QueryRouter';
import MetaTagUpdater from '@/router/modules/MetaTagUpdater';
import routes from '@/router/assets/routes';
import queries from '@/router/assets/queries';
import metas from '@/router/assets/metas';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  QueryRouter.update(to, from, next, router, queries);
  MetaTagUpdater.update(to, from, next, metas)
});

export default router;
