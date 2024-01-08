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

/**
 * Текущий индекс шаблона.
 */
let patternIndex: number = -1;

/**
 * Сменить шаблон.
 *
 * @param index Номер шаблона.
 */
function change(index: number) {
  if (index === patternIndex) {
    patternIndex = -1;
    stopVibrate();
    return;
  }

  stopVibrate();
  patternIndex = index;
  startVibrateLoop(patterns[index].pattern);
}
</script>

<template>
  <div class="app-patterns">
    <MPatternList
      v-if="patterns.length"
      :patterns="patterns"
      :mode="patternIndex"
      :isActive="isActive"
      @click="change"
    />
    <AMessage v-else>Loading...</AMessage>
  </div>
</template>
