<template>
    <AppPatterns />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import AppPatterns from '@/components/AppPatterns.vue';

    export default defineComponent({
        name: 'PatternsView',
        components: {
            AppPatterns: AppPatterns,
        },
    });
</script>

