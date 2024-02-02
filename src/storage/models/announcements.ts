import type { CommonStorageModel } from '../core/types';
import type { AnnouncementSavedData } from '@/models';

/**
 * Модель данных хранилища Announcements.
 *
 * @returns
 */
export function announcementStorage(): CommonStorageModel<AnnouncementSavedData[]> {
  return {
    /**
     * Идентификатор хранилища. Служит ключом при записи данных.
     */
    id: 'announcements',
    /**
     * Сериализатор данных.
     *
     * @param data Данные.
     * @returns DTO
     */
    serializer: (data: AnnouncementSavedData[]) => {
      return JSON.stringify(data);
    },
    /**
     * Десериализатор данных.
     *
     * @param dto Транспортный объект данных.
     * @returns Данные.
     */
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
