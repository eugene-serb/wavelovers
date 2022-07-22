<template>
    <main class="page container">
        <h1 class="visually-hidden">Wavelovers</h1>
        <WaveloversApp />
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import WaveloversApp from '@/components/WaveloversApp.vue';

    export default defineComponent({
        name: 'HomeView',
        components: {
            WaveloversApp: WaveloversApp
        },
    });
</script>

