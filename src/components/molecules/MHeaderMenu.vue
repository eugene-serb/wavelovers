<script setup lang="ts">
import { defineComponent, defineProps } from 'vue';
import { RouterLink } from 'vue-router';

import type { PropType } from 'vue';
import type { Link } from '@/models';

defineComponent({
  name: 'MHeaderMenu',
});

defineProps({
  /**
   * Ссылки.
   */
  links: {
    type: Array as PropType<Link[]>,
    default: () => [],
  },
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
      background: var(--color-header-selection);
    }
  }
}
</style>
