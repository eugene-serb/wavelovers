<template>
    <AppDiagnostic />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import AppDiagnostic from '@/components/AppDiagnostic.vue';

    export default defineComponent({
        name: 'DiagnosticView',
        components: {
            AppDiagnostic: AppDiagnostic,
        },
    });
</script>

