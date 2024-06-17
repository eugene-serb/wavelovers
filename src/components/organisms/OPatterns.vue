<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGamepadsStore } from '@/store';
import { AMessage } from '@/components/atoms';
import { MPatternList } from '@/components/molecules';

/**
 * Хранилище геймпадов.
 */
const store = useGamepadsStore();
const { patternMode, isActive } = storeToRefs(store);
const { change, patterns } = store;
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
