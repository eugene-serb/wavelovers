import type { IMeta } from '@/models';

export const metaNotFound: IMeta = {
  title: 'Wavelovers — Page not found',
  metaTags: [
    {
      name: 'og:title',
      content: 'Wavelovers — Page not found',
    },
    {
      name: 'og:url',
      content: 'https://wavelovers.ru/404',
    },
  ],
  linkTags: [
    {
      rel: 'canonical',
      href: 'https://wavelovers.ru/404',
    },
  ],
};

export default metaNotFound;
