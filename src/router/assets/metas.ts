import IRouteMeta from '@/router/models/IRouteMeta';
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
    route: '/',
    meta: metaPatterns,
  },
  {
    route: '/custom',
    meta: metaCustom,
  },
  {
    route: '/manual',
    meta: metaManual,
  },
  {
    route: '/diagnostic',
    meta: metaDiagnostic,
  },
  {
    route: '/faq',
    meta: metaFaq,
  },
  {
    route: '/about',
    meta: metaAbout,
  },
  {
    route: '/donate',
    meta: metaDonate,
  },
  {
    route: '/404',
    meta: meta404,
  },
];

export default metas;
