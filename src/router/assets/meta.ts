import metaPatterns from '@/router/assets/meta/Patterns';
import metaCustom from '@/router/assets/meta/Custom';
import metaManual from '@/router/assets/meta/Manual';
import metaDiagnostic from '@/router/assets/meta/Diagnostic';
import metaFaq from '@/router/assets/meta/Faq';
import metaAbout from '@/router/assets/meta/About';
import metaDonate from '@/router/assets/meta/Donate';
import meta404 from '@/router/assets/meta/404';

import type IRouteMeta from 'vue-meta-tag-updater/src/types/IRouteMeta';

const metas: Array<IRouteMeta> = [
  {
    path: '/',
    meta: metaPatterns,
  },
  {
    path: '/custom',
    meta: metaCustom,
  },
  {
    path: '/manual',
    meta: metaManual,
  },
  {
    path: '/diagnostic',
    meta: metaDiagnostic,
  },
  {
    path: '/faq',
    meta: metaFaq,
  },
  {
    path: '/about',
    meta: metaAbout,
  },
  {
    path: '/donate',
    meta: metaDonate,
  },
  {
    path: '/404',
    meta: meta404,
  },
];

export default metas;
