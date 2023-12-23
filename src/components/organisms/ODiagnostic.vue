<script setup lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useGamepads } from '@/store/useGamepads';
import { AMessage } from '@/components/atoms';
import { MToolsNav, MGamepadList, MDiagnosticItem } from '@/components/molecules';

defineComponent({
  name: 'ODiagnostic',
});

const store = useGamepads();
const { gamepads, timestamp } = storeToRefs(store);
</script>

<template>
  <MToolsNav />

  <div v-if="gamepads.length" class="content-item">
    <MDiagnosticItem
      v-for="gamepad in gamepads"
      :key="gamepad.id"
      :gamepad="gamepad"
      :timestamp="timestamp"
    />
  </div>

  <MGamepadList v-if="gamepads.length" :gamepads="gamepads" />
  <AMessage v-else>Press any gamepad button or connect a new gamepad to vibrate.</AMessage>
</template>
