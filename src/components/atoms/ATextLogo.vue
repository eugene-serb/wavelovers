<script setup lang="ts">
import { RouterLink } from 'vue-router';

import type { LinkTarget } from '@/models';

/**
 * Интерфейс входных параметров компонента.
 */
interface Props {
  /**
   * Текст.
   */
  text: string;
  /**
   * Ссылка, куда ведёт лого.
   */
  link: string;
  /**
   * Как переходить по ссылке.
   */
  target?: LinkTarget;
  /**
   * Разрешать переводить текст лого при запросе пользователя?
   */
  translate?: boolean;
}

withDefaults(defineProps<Props>(), {
  target: '_self',
  translate: false,
});
</script>

<template>
  <RouterLink :to="link" :target="target" :translate="translate ? 'yes' : 'no'" class="text-logo">
    {{ text }}
  </RouterLink>
</template>

<style lang="scss">
.text-logo {
  font-size: 48px;
  font-weight: 500;
  color: var(--color-header-logo);
  cursor: default;
  border-color: transparent;

  @media only screen and (min-width: 1024px) {
    font-size: 64px;
  }

  &:hover,
  &:focus,
  &:focus-visible {
    border: none;
    cursor: pointer;
    color: var(--color-header-logo);
  }
}
</style>
