<script setup lang="ts">
import { defineComponent, defineProps } from 'vue';
import { RouterLink } from 'vue-router';

import type { PropType } from 'vue';
import type { LinkTarget } from '@/models';

defineComponent({
  name: 'ATextLogo',
});

defineProps({
  /**
   * Текст.
   */
  text: {
    type: String,
    required: true,
  },
  /**
   * Ссылка, куда ведёт лого.
   */
  link: {
    type: String,
    required: true,
  },
  /**
   * Как переходить по ссылке.
   */
  target: {
    type: String as PropType<LinkTarget>,
    default: '_self',
  },
  /**
   * Разрешать переводить текст лого при запросе пользователя?
   */
  translate: {
    type: Boolean,
    default: false,
  },
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
