<script setup lang="ts">
import { AGamepad } from '@/components/atoms';

import type { TVibrator } from '@/models';

/**
 * Интерфейс входных параметров компонента.
 */
interface Props {
  /**
   * Все геймпады.
   */
  gamepads: TVibrator[];
}

defineProps<Props>();
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
