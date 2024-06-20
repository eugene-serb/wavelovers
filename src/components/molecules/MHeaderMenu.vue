<script setup lang="ts">
import { RouterLink } from 'vue-router';

import type { Link } from '@/models';

/**
 * Интерфейс входных параметров компонента.
 */
interface Props {
  /**
   * Ссылки.
   */
  links: Link[];
}

withDefaults(defineProps<Props>(), {
  links: () => [],
});
</script>

<template>
  <nav class="header-menu">
    <RouterLink
      v-for="link in links"
      :key="link.text"
      :to="link.to"
      :target="link.target"
      class="header-menu__link"
    >
      {{ link.text }}
    </RouterLink>
  </nav>
</template>

<style lang="scss">
.header-menu {
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  .header-menu__link {
    font-size: 16px;
    text-transform: uppercase;

    border-color: transparent;
    color: var(--color-header-navigation-link);

    &:hover {
      border-bottom: var(--number-header-focus-border-size) solid
        var(--color-header-navigation-link-hover);
      color: var(--color-header-navigation-link-hover);
    }

    &:focus-visible {
      outline: var(--number-header-focus-border-size) solid
        var(--color-header-navigation-link-hover);
      border-color: transparent;
    }

    &::selection {
      background-color: var(--color-header-selection);
    }
  }
}
</style>
