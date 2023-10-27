<template>
  <h1 class="visually-hidden">Wavelovers — Custom</h1>
  <AppCustom />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppCustom from '@/components/AppCustom.vue';

export default defineComponent({
  name: 'CustomView',
  components: {
    AppCustom: AppCustom,
  },
});
</script>
