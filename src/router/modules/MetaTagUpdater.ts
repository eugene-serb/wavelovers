import {
  NavigationGuardNext, RouteLocationNormalized, RouteRecordNormalized
} from "vue-router";

function appendTags(tagsArray: object[], type: string) {
  tagsArray.map(
    (meta: object) => {
      const tag = document.createElement(type);

      (Object.keys(meta) as Array<keyof typeof meta>)
        .forEach((key) => {
          tag.setAttribute(key, meta[key] as string);
        });
      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    }
  ).forEach(tag => document.head.appendChild(tag));
}

function updateMetatag(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  Array.from(document.querySelectorAll('[data-vue-router-controlled]'))
    .map(el => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });

  const hasTitle: RouteRecordNormalized =
    to.matched.slice().reverse()
      .find(r => r.meta && r.meta.title) as RouteRecordNormalized;
  const hasMetas: RouteRecordNormalized =
    to.matched.slice().reverse()
      .find(r => r.meta && r.meta.metaTags) as RouteRecordNormalized;
  const hasLinks: RouteRecordNormalized =
    to.matched.slice().reverse()
      .find(r => r.meta && r.meta.linkTags) as RouteRecordNormalized;

  if (hasTitle) {
    document.title = hasTitle.meta.title as string;
  }
  if (hasMetas) {
    const metaTags: object[] = hasMetas.meta.metaTags as object[];
    appendTags(metaTags, 'meta');
  }
  if (hasLinks) {
    const linkTags: object[] = hasLinks.meta.linkTags as object[];
    appendTags(linkTags, 'link');
  }

  return next();
}

const MetaTagUpdater = {
  update: updateMetatag,
};

export default MetaTagUpdater;
