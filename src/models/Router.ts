/**
 * Аттрибуты тега.
 */
export interface ITag {
  /**
   * Аттрибут.
   */
  [key: string]: string;
}

/**
 * Мета информация страницы.
 */
export interface IMeta {
  /**
   * Заголовок страницы.
   */
  title: string;
  /**
   * Мета теги meta.
   */
  metaTags: Array<ITag>;
  /**
   * Мета теги link.
   */
  linkTags: Array<ITag>;
}

/**
 * Объект ассоциирующий мета информацию со страницей.
 */
export interface IRouteMeta {
  /**
   * Путь.
   */
  path: string;
  /**
   * Мета информации страницы.
   */
  meta: IMeta;
}
