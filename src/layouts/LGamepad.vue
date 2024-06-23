<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGamepadsStore } from '@/store';
import { AMessage } from '@/components/atoms';
import { MToolsMenu, MGamepadList } from '@/components/molecules';
import LDefault from '@/layouts/LDefault.vue';
import { URL_TO_HOME } from '@/constants';
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
    to: URL_TO_HOME,
    target: LinkTargetVariants.SELF,
  },
  {
    text: 'Custom',
    to: '/custom',
    target: LinkTargetVariants.SELF,
  },
  {
    text: 'Manual',
    to: '/manual',
    target: LinkTargetVariants.SELF,
  },
  {
    text: 'Diagnostic',
    to: '/diagnostic',
    target: LinkTargetVariants.SELF,
  },
];

/**
 * Хранилище геймпадов.
 */
const store = useGamepadsStore();
const { gamepads } = storeToRefs(store);
</script>

<template>
  <LDefault>
    <MToolsMenu :links="links" />
    <slot name="default" />

    <MGamepadList v-if="gamepads.length" :gamepads="gamepads" />
    <AMessage v-else>
      Press any gamepad button or&nbsp;connect a&nbsp;new gamepad to&nbsp;vibrate.
    </AMessage>
  </LDefault>
</template>
