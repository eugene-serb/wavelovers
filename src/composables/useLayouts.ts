import { computed } from 'vue';
import { useRoute } from 'vue-router';
import LDefault from '@/layouts/LDefault.vue';
import LGamepad from '@/layouts/LGamepad.vue';

import type { Component } from 'vue';

/**
 * Лейауты.
 */
type Layouts = {
  [index: string]: Component;
};

/**
 * Лейауты.
 */
const layouts: Layouts = {
  DEFAULT: LDefault,
  GAMEPAD: LGamepad,
};

/**
 * Композабл для получения соответствующего лейаута маршруту.
 *
 * @returns Лейаут.
 */
export function useLayouts(): Component {
  const route = useRoute();

  const layout = computed<Component>(() => {
    const routeLayout = route?.meta?.layout;

    return routeLayout && typeof routeLayout === 'string' ? layouts[routeLayout] : layouts.DEFAULT;
  });

  return {
    layout,
  };
}

export default useLayouts;
