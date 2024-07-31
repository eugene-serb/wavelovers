import metaPatterns from '@/router/assets/meta/Patterns';
import metaCustom from '@/router/assets/meta/Custom';
import metaManual from '@/router/assets/meta/Manual';
import metaDiagnostic from '@/router/assets/meta/Diagnostic';
import metaPhonePatterns from '@/router/assets/meta/PhonePatterns';
import metaPhoneCustom from '@/router/assets/meta/PhoneCustom';
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
    path: '/phone',
    meta: metaPhonePatterns,
  },
  {
    path: '/phone-custom',
    meta: metaPhoneCustom,
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
