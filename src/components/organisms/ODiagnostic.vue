<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useGamepadsStore } from '@/store';
import { MDiagnosticPanel } from '@/components/molecules';

/**
 * Хранилище геймпадов.
 */
const store = useGamepadsStore();
const { gamepads, timestamp } = storeToRefs(store);
</script>

<template>
  <div class="content-item">
    <template v-if="gamepads.length">
      <MDiagnosticPanel
        v-for="gamepad in gamepads"
        :key="gamepad.id"
        :gamepad="gamepad.device"
        :timestamp
      />
    </template>
    <template v-else>
      <MDiagnosticPanel :timestamp />
    </template>
  </div>
</template>
