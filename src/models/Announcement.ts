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
   * Можно ли закрыть.
   */
  closable?: boolean;
  /**
   * Маршруты, по которым показывать анонс.
   */
  routes?: string[];
  /**
   * Маршруты, которые следует исключить из показа.
   */
  excludeRoutes?: string[];
};

/**
 * Состояние анонса.
 */
export type AnnouncementSavedData = {
  /**
   * Идентификатор анонса.
   */
  id: string;
  /**
   * Включён ли анонс.
   */
  enabled: boolean;
}
