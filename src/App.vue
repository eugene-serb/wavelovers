<script setup lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import { useLayouts } from '@/composables/useLayouts';
import { useGamepadsStore } from '@/store/useGamepadsStore';

defineComponent({
  name: 'App',
});

const { layout } = useLayouts();
const { addGamepad, deleteGamepad } = useGamepadsStore();

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
  <Component :is="layout">
    <RouterView />
  </Component>
</template>
