<template>
    <div v-if="gamepads.length > 0" class="content-item">
        <DiagnosticItem v-for="gamepad in gamepads"
                        :key="gamepad.id"
                        :gamepad="gamepad"
                        :timestamp="timestamp" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from '@/store/index';
    import Vibrator from '@/models/Vibrator';
    import DiagnosticItem from '@/components/DiagnosticItem.vue';

    export default defineComponent({
        name: 'AppDiagnostic',
        components: {
            DiagnosticItem: DiagnosticItem,
        },
        data: () => {
            return {
                timestamp: 0 as number,
                interval: 0 as number,
            };
        },
        computed: {
            gamepads: function (): Vibrator[] {
                const timestamp: number = this.timestamp;
                return store.getters.gamepads as Vibrator[];
            },
        },
        methods: {
            updateTimestamp: function (): void {
                this.timestamp = Date.now();
            },
        },
        mounted() {
            this.interval = setInterval(this.updateTimestamp, 1);
        },
        unmounted() {
            clearInterval(this.interval);
        },
    });
</script>

