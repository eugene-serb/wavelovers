<script setup lang="ts">
import { defineComponent } from 'vue';
import { ODiagnostic } from '@/components/organisms';

defineComponent({
  name: 'DiagnosticView',
});
</script>

<template>
  <h1 class="visually-hidden">Wavelovers — Diagnostic</h1>
  <ODiagnostic />
</template>
