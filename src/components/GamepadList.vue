<template>
  <div class="content-item device-list">
    <GamepadItem v-for="gamepad in gamepads" :key="gamepad.id">
      <template #default>
        {{ gamepad.unit.id }}
      </template>
    </GamepadItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GamepadItem from '@/components/GamepadItem.vue';

export default defineComponent({
  name: 'GamepadList',
  props: {
    gamepads: {
      type: Array,
    },
  },
  components: {
    GamepadItem: GamepadItem,
  },
});
</script>

<style lang="scss">
.device-list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 16px;
}
</style>
