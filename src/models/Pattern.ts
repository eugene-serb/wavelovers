/**
 * Тип TGamepadPattern.
 */
export type TGamepadPattern = {
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
   * Дорожка вибрации геймпада.
   */
  pattern: GamepadEffectParameters[];
};

/**
 * Тип TPhonePattern.
 */
export type TPhonePattern = {
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
   * Дорожка вибрации мобильного устройства.
   */
  pattern: number | number[];
};

/**
 * Тип TCommonPattern.
 */
export type TCommonPattern = TGamepadPattern | TPhonePattern;
