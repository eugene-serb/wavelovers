import {
  Router, NavigationGuardNext, RouteLocationNormalized
} from "vue-router";
import IQueryRoute from '@/router/models/IQueryRoute';

function updateRoute(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  router: Router,
  routes: Array<IQueryRoute>
): void {
  routes.forEach((route) => {
    if (route.query === to.fullPath) {
      router.push(route.path);
    }
  });
  return next();
}

const QueryRouter = {
  update: updateRoute,
};

export default QueryRouter;
