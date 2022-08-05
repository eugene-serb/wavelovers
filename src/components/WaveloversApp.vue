<template>
    <div class="wavelovers">
        <PatternList v-if="patterns.length > 0"
                     :patterns="patterns"
                     :mode="mode"
                     :isActive="isActive"
                     @change="change" />
        <MessageItem v-else>Loading...</MessageItem>
        <GamepadList v-if="gamepads.length > 0"
                     :gamepads="gamepads" />
        <MessageItem v-else>Press any gamepad button or connect a new gamepad to vibrate.</MessageItem>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import PatternList from '@/components/PatternList.vue';
    import GamepadList from '@/components/GamepadList.vue';
    import MessageItem from '@/components/MessageItem.vue';
    import TPattern from '@/models/TPattern';
    import Vibrator from '@/models/Vibrator';
    import store from '@/store/index';

    export default defineComponent({
        name: 'WaveloversApp',
        components: {
            PatternList: PatternList,
            GamepadList: GamepadList,
            MessageItem: MessageItem,
        },
        computed: {
            gamepads: function (): Vibrator[] {
                return store.getters.gamepads as Vibrator[];
            },
            patterns: function (): TPattern[] {
                return store.getters.patterns as TPattern[];
            },
            mode: function (): number {
                return store.getters.mode as number;
            },
            isActive: function (): boolean {
                return store.getters.isActive as boolean;
            },
        },
        methods: {
            addEventListeners(): void {
                window.addEventListener('gamepadconnected', (event: GamepadEvent) => store.dispatch('addGamepad', event));
                window.addEventListener('gamepaddisconnected', (event: GamepadEvent) => store.dispatch('deleteGamepad', event));
            },
            removeEventListeners(): void {
                window.removeEventListener('gamepadconnected', (event: GamepadEvent) => store.dispatch('addGamepad', event));
                window.removeEventListener('gamepaddisconnected', (event: GamepadEvent) => store.dispatch('deleteGamepad', event));
            },
            change(index: number): void {
                store.dispatch('change', index as number);
            },
        },
        mounted() {
            store.dispatch('loadPatterns');
            this.addEventListeners();
        },
        unmounted() {
            this.removeEventListeners();
        },
    });
</script>

<style lang="scss">
    .wavelovers {
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-start;
        gap: 16px;
    }

    @media only screen and (min-width: 540px) {
        .wavelovers {
            flex-direction: column;
        }
    }
</style>

