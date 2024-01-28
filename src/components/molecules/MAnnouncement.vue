<script setup lang="ts">
import { defineComponent, defineProps, computed, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { AAnnouncement } from '@/components/atoms';
import { useAnnouncements } from '@/composables';

import type { PropType } from 'vue';
import type { Announcement } from '@/models';

defineComponent({
  name: 'MAnnouncement',
});

/**
 * Входные параметры компонента.
 */
const props = defineProps({
  /**
   * Анонсы.
   */
  announcements: {
    type: Array as PropType<Announcement[]>,
    default: () => [],
  },
});

const { currentRoute } = useRouter();

const { announcements } = toRefs(props);

/**
 * Ключ хранилища анонсов.
 */
const storageKey = ref<string>('announcements');

const { announcements: actualAnnouncements } = useAnnouncements(storageKey, announcements);

/**
 * Уведомления которые будут показаны, если они включены и маршрут удовлетворяет условиям, если они указаны.
 */
const shownAnnounces = computed<Announcement[]>(() => {
  const { path } = currentRoute.value;

  return actualAnnouncements.value.filter((announcement) => {
    const { excludeRoutes, enabled, routes } = announcement;

    if (excludeRoutes && excludeRoutes.length) {
      const exist = excludeRoutes.every((route) => new RegExp(route).test(path));

      if (exist) {
        return false;
      }
    }

    if (routes && routes.length) {
      return enabled && Boolean(routes.find((route) => new RegExp(route).test(path)));
    }

    return enabled;
  });
});

/**
 * Закрыть анонс.
 *
 * @param id Идентификатор анонса.
 */
function close(id: string): void {
  actualAnnouncements.value.find((announce) => {
    if (announce.id === id) {
      announce.enabled = false;
    }
  });
}
</script>

<template>
  <div class="m-announcement">
    <AAnnouncement
      v-for="announce in shownAnnounces"
      :key="announce.id"
      :id="announce.id"
      :enabled="announce.enabled"
      :closable="announce.closable"
      @close="close"
    >
      <span v-html="announce.message" />
    </AAnnouncement>
  </div>
</template>
