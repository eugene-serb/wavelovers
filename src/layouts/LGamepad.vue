<script setup lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useGamepads } from '@/store/useGamepads';
import { AMessage } from '@/components/atoms';
import { MHeader, MFooter, MToolsNav, MGamepadList } from '@/components/molecules';

defineComponent({
  name: 'LGamepad',
});

const store = useGamepads();
const { gamepads } = storeToRefs(store);
</script>

<template>
  <MHeader />

  <main class="page container">
    <div class="wavelovers">
      <MToolsNav />
      <slot name="default" />

      <MGamepadList v-if="gamepads.length" :gamepads="gamepads" />
      <AMessage v-else>Press any gamepad button or connect a new gamepad to vibrate.</AMessage>
    </div>
  </main>

  <MFooter />
</template>

<style lang="scss">
.page {
  flex-grow: 1;
  margin-top: 32px;
  margin-bottom: 32px;
}

@media only screen and (min-width: 540px) {
  .page {
    margin-top: 64px;
    margin-bottom: 64px;
  }
}
</style>
