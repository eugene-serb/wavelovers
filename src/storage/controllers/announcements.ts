import fetcher from '../core/fetcher';
import { announcementStorage } from '../models';

import type { CommonStorageController } from '../core';
import type { AnnouncementSavedData } from '@/models';

/**
 * Извлечь данные.
 *
 * @returns Данные.
 */
function get(): AnnouncementSavedData[] {
  return fetcher.get<AnnouncementSavedData[]>(announcementStorage());
}

/**
 * Записать данные.
 *
 * @param data Данные.
 */
function set(data: AnnouncementSavedData[]): void {
  fetcher.set<AnnouncementSavedData[]>(data, announcementStorage());
}

/**
 * Удалить данные.
 */
function remove(): void {
  fetcher.remove<AnnouncementSavedData[]>(announcementStorage());
}

/**
 * Контроллер хранилища данных Announcements.
 */
const announcements: CommonStorageController<AnnouncementSavedData[]> = {
  get,
  set,
  remove,
};

export default announcements;
