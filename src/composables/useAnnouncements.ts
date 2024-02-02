import { ref, watch } from 'vue';
import { storage } from '@/storage';

import type { Ref } from 'vue';
import type { Announcement, AnnouncementSavedData } from '@/models';

/**
 * Результат работы композабла управления анонсами.
 */
type AnnouncementComposable = {
  announcements: Ref<Announcement[]>;
  resetAnnouncements: () => void;
};

/**
 * Композабл для получения соответствующего маршруту списка анонсов.
 *
 * @param storageKey Ключ для хранилища.
 * @param originAnnouncements Анонсы.
 * @returns AnnouncementComposable.
 */
export function useAnnouncements(
  storageKey: Ref<string>,
  originAnnouncements: Ref<Announcement[]>,
): AnnouncementComposable {
  /**
   * Копия сохранённой конфигурации анонсов.
   *
   * @private
   */
  const _announcementSavedData = ref<AnnouncementSavedData[]>(_getSavedData());

  /**
   * Анонсы.
   */
  const announcements = ref<Announcement[]>(
    _getMergedAnnouncements(originAnnouncements.value, _announcementSavedData.value),
  );

  watch(
    announcements,
    () => {
      _setSavedData(announcements.value);
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
   * @param announcements Анонсы.
   * @param savedData Сохранённые данные анонсов.
   * @returns Объединённая конфигурация анонсов.
   */
  function _getMergedAnnouncements(
    announcements: Announcement[],
    savedData: AnnouncementSavedData[],
  ): Announcement[] {
    return announcements.map((announcement) => {
      const state = savedData.find((state) => state.id === announcement.id);

      return {
        ...announcement,
        enabled: state?.enabled ?? announcement?.enabled ?? true,
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
    return announcements.map((announcement) => ({
      id: announcement.id,
      enabled: announcement?.enabled ?? true,
    }));
  }

  /**
   * Сохранить данные в localStorage
   *
   * @private
   * @param announcements Данные, которые надо поместить в localStorage.
   */
  function _setSavedData(announcements: Announcement[]): void {
    const savedData = _createAnnouncementSavedData(announcements);
    storage.announcements.set(savedData);
  }

  /**
   * Извлечь сохранённое состояние анонсов из localStorage.
   *
   * @private
   * @returns Сохранённое состояние анонсов.
   */
  function _getSavedData(): AnnouncementSavedData[] {
    return storage.announcements.get();
  }

  return {
    announcements,
    resetAnnouncements,
  };
}

export default useAnnouncements;
