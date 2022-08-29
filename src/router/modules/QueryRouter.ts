import {
  Router, NavigationGuardNext, RouteLocationNormalized
} from "vue-router";
import IQueryRoute from '@/router/models/IQueryRoute';

function updateRoute(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  router: Router,
  queryRoutes: Array<IQueryRoute>
): void {
  queryRoutes.forEach((route) => {
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

