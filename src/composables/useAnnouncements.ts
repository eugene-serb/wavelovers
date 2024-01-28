import { ref, watch } from 'vue';

import type { Ref } from 'vue';
import type { Announcement, AnnouncementSavedData } from '@/models';

export function useAnnouncements(
  storageKey: Ref<string>,
  originAnnouncements: Ref<Announcement[]>,
) {
  const _announcementSavedData = ref<AnnouncementSavedData[]>(_getDataFromStorage());

  const announcements = ref<Announcement[]>(_getMergedAnnouncements());

  watch(
    announcements,
    () => {
      _setDataIntoStorage(announcements.value);
    },
    { deep: true },
  );

  /**
   * Сбросить конфигурацию колонок
   */
  function resetAnnouncements(): void {
    announcements.value = originAnnouncements.value;
  }

  /**
   * Получить объединённую конфигурацию анонсов.
   *
   * @private
   * @returns Объединённая конфигурация анонсов.
   */
  function _getMergedAnnouncements(): Announcement[] {
    return originAnnouncements.value.map((announce) => {
      const state = _announcementSavedData.value.find((state) => state.id === announce.id);

      return {
        ...announce,
        enabled: state?.enabled ?? announce?.enabled ?? true,
      };
    });
  }

  /**
   * Сделать копию сохранений конфигурации анонсов.
   *
   * @private
   * @param announcements Конфигурация анонсов.
   * @returns Сохранение конфигурации анонсов.
   */
  function _createAnnouncementSavedData(announcements: Announcement[]): AnnouncementSavedData[] {
    return announcements.map((announce) => ({
      id: announce.id,
      enabled: announce?.enabled ?? true,
    }));
  }

  /**
   * Десериализовать DTO AnnouncementSavedData.
   *
   * @private
   * @param dto DTO сохранённой конфигурации анонсов.
   * @returns Сохранённая конфигурация анонсов.
   */
  function _deserialize(dto: string): AnnouncementSavedData[] {
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

    return filtered.map((entity) => ({
      id: entity.id,
      enabled: entity.enabled,
    }));
  }

  /**
   * Сохранить данные в localStorage
   *
   * @private
   * @param data Данные, которые надо поместить в localStorage.
   */
  function _setDataIntoStorage(data: Announcement[]): void {
    const save = _createAnnouncementSavedData(data);
    const dto = JSON.stringify(save);

    window.localStorage.setItem(storageKey.value, dto);
  }

  /**
   * Извлечь сохранённое состояние анонсов из localStorage.
   *
   * @private
   * @returns Сохранённое состояние анонсов.
   */
  function _getDataFromStorage(): AnnouncementSavedData[] {
    const dto = window.localStorage.getItem(storageKey.value);

    if (!dto) {
      return [];
    }

    return _deserialize(dto);
  }

  return {
    announcements,
    resetAnnouncements,
  };
}

export default useAnnouncements;
