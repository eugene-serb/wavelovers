<script setup lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useGamepads } from '@/store/useGamepads';
import {  MDiagnosticItem } from '@/components/molecules';

defineComponent({
  name: 'ODiagnostic',
});

const store = useGamepads();
const { gamepads, timestamp } = storeToRefs(store);
</script>

<template>
  <div v-if="gamepads.length" class="content-item">
    <MDiagnosticItem
      v-for="gamepad in gamepads"
      :key="gamepad.id"
      :gamepad="gamepad"
      :timestamp="timestamp"
    />
  </div>
</template>
