import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { LDefault, LGamepad, LPhone } from '@/layouts';

import type { Component } from 'vue';

/**
 * Лейауты.
 */
type Layouts = {
  /**
   * Компонент лейаута.
   */
  [index: string]: Component;
};

/**
 * Результат работы композабла лейаутов.
 */
type LayoutsComposable = {
  /**
   * Компонент лейаута.
   */
  layout: Component;
};

/**
 * Лейауты.
 */
const layouts: Layouts = {
  DEFAULT: LDefault,
  GAMEPAD: LGamepad,
  PHONE: LPhone,
};

/**
 * Композабл для получения соответствующего лейаута маршруту.
 *
 * @returns LayoutsComposable.
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
