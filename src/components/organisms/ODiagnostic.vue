<script setup lang="ts">
import { defineComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useGamepadsStore } from '@/store';
import { MDiagnosticItem } from '@/components/molecules';

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
      <MDiagnosticItem
        v-for="gamepad in gamepads"
        :key="gamepad.id"
        :gamepad="gamepad.device"
        :timestamp="timestamp"
      />
    </template>
    <template v-else>
      <MDiagnosticItem :timestamp="timestamp" />
    </template>
  </div>
</template>
