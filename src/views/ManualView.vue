<script lang="ts">
import { defineComponent } from 'vue';
import { OManual } from '@/components/organisms';

export default defineComponent({
  name: 'ManualView',
  components: {
    OManual,
  },
});
</script>

<template>
  <h1 class="visually-hidden">Wavelovers — Manual</h1>
  <OManual />
</template>
