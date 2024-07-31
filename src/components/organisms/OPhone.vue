<script setup lang="ts">
import { onUnmounted } from 'vue';
import { AMessage } from '@/components/atoms';
import { MPatternList } from '@/components/molecules';
import { usePhoneVibration } from '@/composables';
import patterns from '@/assets/phonePatterns.json';

const { startVibrateLoop, stopVibrate, isActive } = usePhoneVibration();

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

onUnmounted(() => {
  stopVibrate();
});
</script>

<template>
  <div class="app-patterns">
    <MPatternList v-if="patterns.length" :patterns :mode="patternIndex" :isActive @click="change" />
    <AMessage v-else>Loading...</AMessage>
  </div>
</template>
