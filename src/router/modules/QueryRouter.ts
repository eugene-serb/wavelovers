import router from '@/router';
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import IQueryRoute from '@/router/models/IQueryRoute';

function updateRoute(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  queryRoutes: Array<IQueryRoute>
) {
  queryRoutes.forEach((route) => {
    if (route.query === to.fullPath) {
      router.push(route.to);
    }
  });
  return next();
}

const QueryRouter = {
  update: updateRoute,
};

export default QueryRouter;

