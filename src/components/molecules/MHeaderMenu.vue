<script setup lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { URL_TO_HOME, URL_TO_FAQ, URL_TO_ABOUT, URL_TO_DONATE } from '@/constants';

defineComponent({
  name: 'MHeaderMenu',
});

/**
 * Ссылки.
 */
const links = [
  {
    text: 'Home',
    to: URL_TO_HOME,
    target: '_self',
  },
  {
    text: 'FAQ',
    to: URL_TO_FAQ,
    target: '_self',
  },
  {
    text: 'About',
    to: URL_TO_ABOUT,
    target: '_self',
  },
  {
    text: 'Donate',
    to: URL_TO_DONATE,
    target: '_self',
  },
];
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
