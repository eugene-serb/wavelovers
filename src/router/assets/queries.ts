import IQueryRoute from '@/router/models/IQueryRoute';

const queries: Array<IQueryRoute> = [
  {
    query: '/?custom',
    path: '/custom',
  },
  {
    query: '/?manual',
    path: '/manual',
  },
  {
    query: '/?diagnostic',
    path: '/diagnostic',
  },
  {
    query: '/?faq',
    path: '/faq',
  },
  {
    query: '/?about',
    path: '/about',
  },
  {
    query: '/?donate',
    path: '/donate',
  }
];

export default queries;