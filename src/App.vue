<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import { useLayouts } from '@/composables';
import { useGamepadsStore } from '@/store';

const { layout } = useLayouts();
const { initialize, terminate } = useGamepadsStore();

onMounted(() => initialize());
onUnmounted(() => terminate());
</script>

<template>
  <Component :is="layout">
    <RouterView />
  </Component>
</template>
