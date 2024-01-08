/**
 * Варианты значения атрибута target ссылки.
 */
export type LinkTarget = '_self' | '_blank' | '_parent' | '_top';

/**
 * Объект данных ссылки для RouterLink.
 */
export type Link = {
  /**
   * Текст ссылки.
   */
  text: string,

  /**
   * Куда ведёт ссылка.
   */
  to: string,

  /**
   * Как открывать ссылку.
   */
  target: LinkTarget,
}
