import IRouteMeta from 'vue-meta-tag-updater/src/types/IRouteMeta';
import metaPatterns from '@/router/assets/metas/Patterns';
import metaCustom from '@/router/assets/metas/Custom';
import metaManual from '@/router/assets/metas/Manual';
import metaDiagnostic from '@/router/assets/metas/Diagnostic';
import metaFaq from '@/router/assets/metas/Faq';
import metaAbout from '@/router/assets/metas/About';
import metaDonate from '@/router/assets/metas/Donate';
import meta404 from '@/router/assets/metas/404';

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
