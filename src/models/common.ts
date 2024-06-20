/**
 * Варианты значения атрибута target ссылки.
 */
export enum LinkTargetVariants {
  SELF = '_self',
  BLANK = '_blank',
  PARENT = '_parent',
  TOP = '_top',
}

/**
 * Значение атрибута target ссылки.
 */
export type LinkTarget =
  | LinkTargetVariants.SELF
  | LinkTargetVariants.BLANK
  | LinkTargetVariants.PARENT
  | LinkTargetVariants.TOP;

/**
 * Объект данных ссылки для RouterLink.
 */
export type Link = {
  /**
   * Текст ссылки.
   */
  text: string;
  /**
   * Куда ведёт ссылка.
   */
  to: string;
  /**
   * Как открывать ссылку.
   */
  target: LinkTarget;
};
