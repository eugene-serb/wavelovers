<script lang="ts">
import { defineComponent } from 'vue';
import { OCustom } from '@/components/organisms';

export default defineComponent({
  name: 'CustomView',
  components: {
    OCustom,
  },
});
</script>

<template>
  <h1 class="visually-hidden">Wavelovers — Custom</h1>
  <OCustom />
</template>
