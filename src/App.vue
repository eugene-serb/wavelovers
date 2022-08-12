<template>
    <HeaderItem />
    <main class="page container">
        <div class="wavelovers">
            <router-view />
        </div>
    </main>
    <FooterItem />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from '@/store/index';
    import HeaderItem from '@/components/HeaderItem.vue';
    import FooterItem from '@/components/FooterItem.vue';

    export default defineComponent({
        name: 'App',
        components: {
            HeaderItem: HeaderItem,
            FooterItem: FooterItem,
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

