<script setup lang="ts">
import { defineComponent, defineProps, computed } from 'vue';
import { useRouter } from 'vue-router';
import { AAnnounce } from '@/components/atoms';

import type { PropType } from 'vue';
import type { Announce } from '@/models';

defineComponent({
  name: 'MAnnounce',
});

/**
 * Входные параметры компонента.
 */
const props = defineProps({
  /**
   * Анонсы.
   */
  announces: {
    type: Array as PropType<Announce[]>,
    default: () => [],
  },
});

const { currentRoute } = useRouter();

/**
 * Уведомления которые будут показаны, если они включены и маршрут удовлетворяет условиям, если они указаны.
 */
const shownAnnounces = computed<Announce[]>(() => {
  const { path } = currentRoute.value;

  return props.announces.filter((announce) => {
    const { excludeRoutes, enabled, routes } = announce;

    if (excludeRoutes && excludeRoutes.length) {
      const exist = excludeRoutes.every((route) => new RegExp(route).test(path));

      if (exist) {
        return false;
      }
    }

    if (routes && routes.length) {
      return enabled && routes.find((route) => new RegExp(route).test(path));
    }

    return enabled;
  });
});
</script>

<template>
  <div class="m-announce">
    <AAnnounce
      v-for="announce in shownAnnounces"
      :key="announce.id"
      :id="announce.id"
      :enabled="announce.enabled"
    >
      <span v-html="announce.message" />
    </AAnnounce>
  </div>
</template>
