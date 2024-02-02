import fetcher from '../core/fetcher';
import { announcementStorage } from '../models';

import type { CommonStorageController } from '../core';
import type { AnnouncementSavedData } from '@/models';

function get(): AnnouncementSavedData[] {
  return fetcher.get<AnnouncementSavedData[]>(announcementStorage());
}

function set(data: AnnouncementSavedData[]): void {
  fetcher.set<AnnouncementSavedData[]>(data, announcementStorage());
}

function remove(): void {
  fetcher.remove<AnnouncementSavedData[]>(announcementStorage());
}

const announcements: CommonStorageController<AnnouncementSavedData[]> = {
  get,
  set,
  remove,
};

export default announcements;
