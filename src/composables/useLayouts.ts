import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { LDefault, LGamepad, LMobile } from '@/layouts';

import type { Component } from 'vue';

/**
 * Лейауты.
 */
type Layouts = {
  [index: string]: Component;
};

/**
 * Результат работы композабла лейатов.
 */
type LayoutsComposable = {
  layout: Component;
};

/**
 * Лейауты.
 */
const layouts: Layouts = {
  DEFAULT: LDefault,
  GAMEPAD: LGamepad,
  MOBILE: LMobile,
};

/**
 * Композабл для получения соответствующего лейаута маршруту.
 *
 * @returns Лейаут.
 */
export function useLayouts(): LayoutsComposable {
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
