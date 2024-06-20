<script setup lang="ts">
import { AMessage } from '@/components/atoms';
import { MPatternList } from '@/components/molecules';
import { useMobileVibration } from '@/composables';
import patterns from '@/assets/mobilePatterns.json';

const { startVibrateLoop, stopVibrate, isActive } = useMobileVibration();

/**
 * Текущий индекс шаблона.
 */
let patternIndex: number = -1;

/**
 * Сменить шаблон.
 *
 * @param index - Номер шаблона.
 */
function change(index: number): void {
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
    <MPatternList v-if="patterns.length" :patterns :mode="patternIndex" :isActive @click="change" />
    <AMessage v-else>Loading...</AMessage>
  </div>
</template>
