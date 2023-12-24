<script setup lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';
import { useLayouts } from '@/composables';
import { useGamepadsStore } from '@/store';

defineComponent({
  name: 'App',
});

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
