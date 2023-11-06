<script lang="ts">
import { defineComponent } from 'vue';
import { OPatterns } from '@/components/organisms';

export default defineComponent({
  name: 'PatternsView',
  components: {
    OPatterns,
  },
});
</script>

<template>
  <h1 class="visually-hidden">Wavelovers</h1>
  <OPatterns />
</template>
