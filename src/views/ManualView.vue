<template>
    <h1 class="visually-hidden">Wavelovers – Manual</h1>
    <AppManual />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import AppManual from '@/components/AppManual.vue';

    export default defineComponent({
        name: 'ManualView',
        components: {
            AppManual: AppManual,
        },
    });
</script>

