import { NavigationGuardNext, RouteLocationNormalized, RouteRecordNormalized } from "vue-router";

function appendTags(tagsArray: object[], type: string) {
  tagsArray.map((meta: object) => {
    const tag = document.createElement(type);
    (Object.keys(meta) as Array<keyof typeof meta>)
      .forEach((key) => {
        tag.setAttribute(key, meta[key] as string);
      });
    tag.setAttribute('data-vue-router-controlled', '');
    return tag;
  }).forEach(tag => document.head.appendChild(tag));
}

function updateMetatag(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const nearestWithTitle: RouteRecordNormalized =
    to.matched.slice().reverse()
      .find(r => r.meta && r.meta.title) as RouteRecordNormalized;
  const nearestWithMeta: RouteRecordNormalized =
    to.matched.slice().reverse()
      .find(r => r.meta && r.meta.metaTags && r.meta.linkTags) as RouteRecordNormalized;
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title as string;
  }
  Array.from(document.querySelectorAll('[data-vue-router-controlled]'))
    .map(el => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
  if (!nearestWithMeta) return next();
  const linkTags: object[] = nearestWithMeta.meta.linkTags as object[];
  const metaTags: object[] = nearestWithMeta.meta.metaTags as object[];
  appendTags(linkTags, 'link');
  appendTags(metaTags, 'meta');
  return next();
}

const MetaTagUpdater = {
  update: updateMetatag,
};

export default MetaTagUpdater;

