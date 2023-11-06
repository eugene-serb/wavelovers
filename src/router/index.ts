import { createRouter, createWebHistory } from 'vue-router';
import MetaTagUpdater from 'vue-meta-tag-updater';
import routes from '@/router/assets/routes';
import meta from '@/router/assets/meta';

import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    MetaTagUpdater.update(to, from, next, meta);
  },
);

export default router;
