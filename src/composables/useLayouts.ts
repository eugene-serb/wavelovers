import { computed } from 'vue';
import { useRoute } from 'vue-router';
import LDefault from '@/layouts/LDefault.vue';
import LGamepad from '@/layouts/LGamepad.vue';

import type { Component } from 'vue';

const layouts: { [index: string]: Component } = {
  DEFAULT: LDefault,
  GAMEPAD: LGamepad,
};

export function useLayouts() {
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
