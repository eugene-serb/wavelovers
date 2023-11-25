export interface ITag {
  [key: string]: string;
}

export interface IMeta {
  title: string;
  metaTags: Array<ITag>;
  linkTags: Array<ITag>;
}

export interface IRouteMeta {
  path: string;
  meta: IMeta;
}
