import {
  createRouter,
  createWebHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
} from 'vue-router';
import MetaTagUpdater from 'vue-meta-tag-updater';
import routes from '@/router/assets/routes';
import metas from '@/router/assets/metas';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    MetaTagUpdater.update(to, from, next, metas);
  },
);

export default router;
