<script setup lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useGamepads } from '@/store/useGamepads';
import { AMessage } from '@/components/atoms';
import { MToolsNav, MGamepadList, MPatternList } from '@/components/molecules';

defineComponent({
  name: 'OPatterns',
});

const store = useGamepads();
const { gamepads, patternMode, isActive } = storeToRefs(store);
const { change, patterns } = store;
</script>

<template>
  <MToolsNav />

  <div class="app-patterns">
    <MPatternList
      v-if="patterns.length"
      :patterns="patterns"
      :mode="patternMode"
      :isActive="isActive"
      @click="change"
    />
    <AMessage v-else>Loading...</AMessage>
  </div>

  <MGamepadList v-if="gamepads.length" :gamepads="gamepads" />
  <AMessage v-else>Press any gamepad button or connect a new gamepad to vibrate.</AMessage>
</template>
