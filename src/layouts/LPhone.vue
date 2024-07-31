<script setup lang="ts">
import { MToolsMenu } from '@/components/molecules';
import LDefault from '@/layouts/LDefault.vue';
import { URL_TO_PHONE, URL_TO_PHONE_CUSTOM } from '@/constants';
import { LinkTargetVariants } from '@/models';

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
    to: URL_TO_PHONE,
    target: LinkTargetVariants.SELF,
  },
  {
    text: 'Custom',
    to: URL_TO_PHONE_CUSTOM,
    target: LinkTargetVariants.SELF,
  },
];
</script>

<template>
  <LDefault>
    <MToolsMenu :links="links" />
    <slot name="default" />
  </LDefault>
</template>
