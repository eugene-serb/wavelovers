<script lang="ts">
import { defineComponent } from 'vue';
import { ODiagnostic } from '@/components/organisms';

export default defineComponent({
  name: 'DiagnosticView',
  components: {
    ODiagnostic,
  },
});
</script>

<template>
  <h1 class="visually-hidden">Wavelovers — Diagnostic</h1>
  <ODiagnostic />
</template>
