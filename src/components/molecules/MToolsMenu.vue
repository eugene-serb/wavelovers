<script setup lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

defineComponent({
  name: 'MToolsMenu',
});

/**
 * Ссылки.
 */
const links = [
  {
    text: 'Patterns',
    to: '/',
    target: '_self',
  },
  {
    text: 'Custom',
    to: '/custom',
    target: '_self',
  },
  {
    text: 'Manual',
    to: '/manual',
    target: '_self',
  },
  {
    text: 'Diagnostic',
    to: '/diagnostic',
    target: '_self',
  },
];
</script>

<template>
  <nav class="content-item tools-menu">
    <RouterLink
      v-for="link in links"
      :key="link.text"
      :to="link.to"
      :target="link.target"
      class="tools-menu__link"
    >
      {{ link.text }}
    </RouterLink>
  </nav>
</template>

<style lang="scss">
.tools-menu {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;

  > .tools-menu__link {
    &.router-link-active,
    &.router-link-exact-active {
      border-bottom: 2px solid var(--color-link-hover);
      color: var(--color-link-hover);
      transition: all 0.5s ease;
      text-decoration: none;
    }
  }
}
</style>
