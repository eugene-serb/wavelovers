<script setup lang="ts">
import { defineComponent, defineProps, computed, toRefs } from 'vue';
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
const { path } = currentRoute.value;

const { announcements } = toRefs(props);

const { announcements: actualAnnouncements } = useAnnouncements(announcements);

/**
 * Уведомления которые будут показаны, если они включены и маршрут удовлетворяет условиям, если они указаны.
 */
const shownAnnouncements = computed<Announcement[]>(() => {
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
 * @param id - Идентификатор анонса.
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
      v-for="announce in shownAnnouncements"
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
