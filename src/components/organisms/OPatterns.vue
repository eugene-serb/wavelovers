<script setup lang="ts">
import { onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useGamepadsStore } from '@/store';
import { AMessage } from '@/components/atoms';
import { MPatternList } from '@/components/molecules';

/**
 * Хранилище геймпадов.
 */
const store = useGamepadsStore();
const { patternMode, isActive } = storeToRefs(store);
const { change, patterns, reset } = store;

onUnmounted(() => {
  patternMode.value = 0;
  isActive.value = false;

  reset();
});
</script>

<template>
  <div class="app-patterns">
    <MPatternList v-if="patterns.length" :patterns :mode="patternMode" :isActive @click="change" />
    <AMessage v-else>Loading...</AMessage>
  </div>
</template>
