<script setup lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

defineComponent({
  name: 'MHeaderMenu',
});

/**
 * Ссылки.
 */
const links = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'FAQ',
    to: '/faq',
  },
  {
    text: 'About',
    to: '/about',
  },
  {
    text: 'Donate',
    to: '/donate',
  },
];
</script>

<template>
  <nav class="navigation">
    <RouterLink
      v-for="link in links"
      :key="link.text"
      :to="link.to"
      class="navigation__link"
    >
      {{ link.text }}
    </RouterLink>
  </nav>
</template>

<style lang="scss">
.navigation {
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;

  .navigation__link {
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
      outline: var(--number-header-focus-border-size) solid var(--color-header-navigation-link-hover);
      border-color: transparent;
    }

    &::selection {
      background: var(--color-header-selection);
    }
  }
}
</style>
