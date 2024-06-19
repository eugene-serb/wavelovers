<script setup lang="ts">
import { MToolsMenu } from '@/components/molecules';
import LDefault from '@/layouts/LDefault.vue';
import { URL_TO_MOBILE, URL_TO_MOBILE_CUSTOM } from '@/constants';

import type { Link } from '@/models';

/**
 * Интерфейс слотов, который содержит компонент.
 */
interface Slots {
  /**
   * Слот по умолчанию.
   */
  default(): any;
}

defineSlots<Slots>();

/**
 * Ссылки.
 */
const links: Link[] = [
  {
    text: 'Patterns',
    to: URL_TO_MOBILE,
    target: '_self',
  },
  {
    text: 'Custom',
    to: URL_TO_MOBILE_CUSTOM,
    target: '_self',
  },
];
</script>

<template>
  <LDefault>
    <MToolsMenu :links="links" />
    <slot name="default" />
  </LDefault>
</template>
