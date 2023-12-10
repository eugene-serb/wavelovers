/**
 * Тип TPattern.
 */
export type TPattern = {
  /**
   * Название дорожки вибрации.
   */
  name: string;

  /**
   * Тип дорожки.
   */
  type: string;

  /**
   * Иконка дорожки.
   */
  icon: string;

  /**
   * Дорожка вибрации.
   */
  pattern: GamepadEffectParameters[];
};
