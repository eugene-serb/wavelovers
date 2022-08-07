<template>
    <div class="wavelovers">
        <NavigationList />
        <router-view />
        <GamepadList v-if="gamepads.length > 0"
                     :gamepads="gamepads" />
        <MessageItem v-else>Press any gamepad button or connect a new gamepad to vibrate.</MessageItem>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from '@/store/index';
    import NavigationList from '@/components/NavigationList.vue';
    import GamepadList from '@/components/GamepadList.vue';
    import MessageItem from '@/components/MessageItem.vue';
    import Vibrator from '@/models/Vibrator';

    export default defineComponent({
        name: 'App',
        components: {
            NavigationList: NavigationList,
            GamepadList: GamepadList,
            MessageItem: MessageItem,
        },
        computed: {
            gamepads: function (): Vibrator[] {
                return store.getters.gamepads as Vibrator[];
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
        },
        mounted() {
            this.addEventListeners();
        },
        unmounted() {
            this.removeEventListeners();
        },
    });
</script>

