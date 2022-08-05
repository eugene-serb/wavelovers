<template>
    <WaveloversApp />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import WaveloversApp from '@/components/WaveloversApp.vue';

    export default defineComponent({
        name: 'App',
        components: {
            WaveloversApp: WaveloversApp,
        },
    });
</script>

