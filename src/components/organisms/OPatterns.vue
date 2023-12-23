<script lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useGamepads } from '@/store/useGamepads';
import { AMessage } from '@/components/atoms';
import { MToolsNav, MGamepadList, MPatternList } from '@/components/molecules';

export default defineComponent({
  name: 'OPatterns',
  components: {
    AMessage,
    MToolsNav,
    MPatternList,
    MGamepadList,
  },
  setup() {
    const store = useGamepads();

    const { gamepads, mode, isActive } = storeToRefs(store);
    const { change: changeMode, patterns } = store;

    return {
      mode,
      gamepads,
      patterns,
      isActive,
      changeMode,
    };
  },
  methods: {
    change(index: number): void {
      this.changeMode(index);
    },
  },
});
</script>

<template>
  <MToolsNav />

  <div class="app-patterns">
    <MPatternList
      v-if="patterns.length"
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
