<script setup lang="ts">
import { defineComponent } from 'vue';
import { AMessage } from '@/components/atoms';
import { MPatternList } from '@/components/molecules';
import { useMobileVibration } from '@/composables';
import patterns from '@/assets/mobilePatterns.json';

defineComponent({
  name: 'OMobile',
});

const { startVibrateLoop, stopVibrate, isActive } = useMobileVibration();

let patternMode: number = -1;

function change(value: number) {
  if (value === patternMode) {
    patternMode = -1;
    stopVibrate();
    return;
  }

  stopVibrate();
  patternMode = value;
  startVibrateLoop(patterns[value].pattern);
}
</script>

<template>
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
</template>
