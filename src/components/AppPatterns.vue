<template>
    <NavigationList />
    <div class="app-patterns">
        <PatternList v-if="patterns.length > 0"
                     :patterns="patterns"
                     :mode="mode"
                     :isActive="isActive"
                     @change="change" />
        <MessageItem v-else>Loading...</MessageItem>
    </div>
    <GamepadList v-if="gamepads.length > 0"
                 :gamepads="gamepads" />
    <MessageItem v-else>Press any gamepad button or connect a new gamepad to vibrate.</MessageItem>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from '@/store/index';
    import NavigationList from '@/components/NavigationList.vue';
    import GamepadList from '@/components/GamepadList.vue';
    import MessageItem from '@/components/MessageItem.vue';
    import PatternList from '@/components/PatternList.vue';
    import Vibrator from '@/models/Vibrator';
    import TPattern from '@/models/TPattern';

    export default defineComponent({
        name: 'AppPatterns',
        components: {
            PatternList: PatternList,
            NavigationList: NavigationList,
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
            change(index: number): void {
                store.dispatch('change', index as number);
            },
        },
        mounted() {
            store.dispatch('loadPatterns');
        },
    });
</script>

