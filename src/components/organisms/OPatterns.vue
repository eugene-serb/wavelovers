<script lang="ts">
import { defineComponent } from 'vue';
import store from '@/store/index';
import { AMessage } from '@/components/atoms';
import { MToolsNav, MGamepadList, MPatternList } from '@/components/molecules';

import type { TPattern, TVibrator } from '@/models';

export default defineComponent({
  name: 'OPatterns',
  components: {
    AMessage,
    MToolsNav,
    MPatternList,
    MGamepadList,
  },
  computed: {
    gamepads: function (): TVibrator[] {
      return store.getters.gamepads as TVibrator[];
    },
    patterns: function (): TPattern[] {
      return store.getters.patterns as TPattern[];
    },
    mode: function (): number {
      return store.getters.mode as number;
    },
    isActive: function (): boolean {
      return store.getters.isActive as boolean;
    },
  },
  methods: {
    change(index: number): void {
      store.dispatch('change', index as number);
    },
  },
  mounted() {
    store.dispatch('loadPatterns');
  },
});
</script>

<template>
  <MToolsNav />

  <div class="app-patterns">
    <MPatternList
      v-if="patterns.length > 0"
      :patterns="patterns"
      :mode="mode"
      :isActive="isActive"
      @change="change"
    />
    <AMessage v-else>Loading...</AMessage>
  </div>

  <MGamepadList v-if="gamepads.length > 0" :gamepads="gamepads" />
  <AMessage v-else>Press any gamepad button or connect a new gamepad to vibrate.</AMessage>
</template>
@/models/Pattern
