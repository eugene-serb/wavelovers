<script setup lang="ts">
import { AGamepad } from '@/components/atoms';

import type { PropType } from 'vue';
import type { TVibrator } from '@/models';

defineProps({
  /**
   * Все геймпады.
   */
  gamepads: {
    type: Array as PropType<TVibrator[]>,
    required: true,
  },
});
</script>

<template>
  <div class="content-item device-list">
    <AGamepad v-for="gamepad in gamepads" :key="gamepad.id">
      <template #default>
        {{ gamepad.device.id }}
      </template>
    </AGamepad>
  </div>
</template>

<style lang="scss">
.device-list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 16px;
}
</style>
