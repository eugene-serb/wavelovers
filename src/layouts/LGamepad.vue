<script setup lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useGamepadsStore } from '@/store';
import { AMessage } from '@/components/atoms';
import { MToolsMenu, MGamepadList } from '@/components/molecules';
import LDefault from '@/layouts/LDefault.vue';

defineComponent({
  name: 'LGamepad',
});

/**
 * Хранилище геймпадов.
 */
const store = useGamepadsStore();
const { gamepads } = storeToRefs(store);
</script>

<template>
  <LDefault>
    <MToolsMenu />
    <slot name="default" />

    <MGamepadList v-if="gamepads.length" :gamepads="gamepads" />
    <AMessage v-else>Press any gamepad button or connect a new gamepad to vibrate.</AMessage>
  </LDefault>
</template>
