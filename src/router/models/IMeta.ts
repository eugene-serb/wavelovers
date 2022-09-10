import ITag from '@/router/models/ITag';

interface IMeta {
  title: string;
  metaTags: Array<ITag>;
  linkTags: Array<ITag>;
}

export default IMeta;
