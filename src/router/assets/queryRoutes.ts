import IQueryRoute from '@/router/models/IQueryRoute';

const queryRoutes: Array<IQueryRoute> = [
  {
    query: '/?custom',
    to: '/custom',
  },
  {
    query: '/?manual',
    to: '/manual',
  },
  {
    query: '/?diagnostic',
    to: '/diagnostic',
  },
  {
    query: '/?faq',
    to: '/faq',
  },
  {
    query: '/?about',
    to: '/about',
  },
  {
    query: '/?donate',
    to: '/donate',
  }
];

export default queryRoutes;
