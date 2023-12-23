<script setup lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import { useGamepads } from '@/store/useGamepads';
import LDefault from '@/layouts/LDefault.vue';

defineComponent({
  name: 'App',
});

const { addGamepad, deleteGamepad } = useGamepads();

/**
 * Добавить слушатели событий.
 */
function addEventListeners(): void {
  window.addEventListener('gamepadconnected', addGamepad);
  window.addEventListener('gamepaddisconnected', deleteGamepad);
}

/**
 * Убрать слушатели событий.
 */
function removeEventListeners(): void {
  window.removeEventListener('gamepadconnected', addGamepad);
  window.removeEventListener('gamepaddisconnected', deleteGamepad);
}

onMounted(() => addEventListeners());
onUnmounted(() => removeEventListeners());
</script>

<template>
  <LDefault>
    <RouterView />
  </LDefault>
</template>
