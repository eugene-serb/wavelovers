import metaPatterns from '@/router/assets/meta/Patterns';
import metaCustom from '@/router/assets/meta/Custom';
import metaManual from '@/router/assets/meta/Manual';
import metaDiagnostic from '@/router/assets/meta/Diagnostic';
import metaMobilePatterns from '@/router/assets/meta/MobilePatterns';
import metaMobileCustom from '@/router/assets/meta/MobileCustom';
import metaFaq from '@/router/assets/meta/Faq';
import metaAbout from '@/router/assets/meta/About';
import metaDonate from '@/router/assets/meta/Donate';
import metaNotFound from '@/router/assets/meta/404';

import type { IRouteMeta } from '@/models';

const meta: Array<IRouteMeta> = [
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
    path: '/mobile',
    meta: metaMobilePatterns,
  },
  {
    path: '/mobile-custom',
    meta: metaMobileCustom,
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
    meta: metaNotFound,
  },
];

export default meta;
