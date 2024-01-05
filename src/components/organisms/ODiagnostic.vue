<script setup lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useGamepadsStore } from '@/store';
import { MDiagnosticPanel } from '@/components/molecules';

defineComponent({
  name: 'ODiagnostic',
});

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
        :timestamp="timestamp"
      />
    </template>
    <template v-else>
      <MDiagnosticPanel :timestamp="timestamp" />
    </template>
  </div>
</template>
