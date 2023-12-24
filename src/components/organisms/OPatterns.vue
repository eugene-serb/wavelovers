<script setup lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useGamepadsStore } from '@/store/useGamepadsStore';
import { AMessage } from '@/components/atoms';
import { MPatternList } from '@/components/molecules';

defineComponent({
  name: 'OPatterns',
});

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
