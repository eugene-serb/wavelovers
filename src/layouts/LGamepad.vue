<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGamepadsStore } from '@/store';
import { AMessage } from '@/components/atoms';
import { MToolsMenu, MGamepadList } from '@/components/molecules';
import LDefault from '@/layouts/LDefault.vue';
import { URL_TO_HOME } from '@/constants';

import type { Link } from '@/models';

/**
 * Ссылки.
 */
const links: Link[] = [
  {
    text: 'Patterns',
    to: URL_TO_HOME,
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
    <AMessage v-else>Press any gamepad button or connect a new gamepad to vibrate.</AMessage>
  </LDefault>
</template>
