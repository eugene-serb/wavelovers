import type { CommonStorageModel } from '../core/types';
import type { AnnouncementSavedData } from '@/models';

export function announcementStorage(): CommonStorageModel<AnnouncementSavedData[]> {
  return {
    id: 'announcements',
    serializer: (object: AnnouncementSavedData[]) => {
      return JSON.stringify(object);
    },
    deserializer: (dto: string | null) => {
      if (!dto || typeof dto !== 'string') {
        return [];
      }

      const raw = JSON.parse(dto);

      if (!Array.isArray(raw)) {
        return [];
      }

      const filtered = raw.filter((entity) => {
        const { id, enabled } = entity;

        if (!(id && typeof id === 'string')) {
          return false;
        }

        if (!(typeof enabled === 'boolean')) {
          return false;
        }

        return true;
      });

      const result = filtered.map((entity) => ({
        id: entity.id,
        enabled: entity.enabled,
      }));

      return result;
    },
  };
}
