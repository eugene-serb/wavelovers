/**
 * Анонс.
 */
export type Announcement = {
  /**
   * Идентификатор анонса.
   */
  id: string;
  /**
   * Включён ли анонс.
   */
  enabled: boolean;
  /**
   * Сообщение анонса.
   */
  message: string;
  /**
   * Маршруты, по которым показывать анонс.
   */
  routes?: string[];
  /**
   * Маршруты, которые следует исключить из показа.
   */
  excludeRoutes?: string[];
};
