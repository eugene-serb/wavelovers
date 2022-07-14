<template>
    <div class="device-list">
        <GamepadItem v-for="gamepad in gamepads"
                     :key="gamepad.id"
                     v-text="gamepad.unit.id" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import GamepadItem from '@/components/GamepadItem.vue';

    export default defineComponent({
        name: 'GamepadList',
        props: {
            gamepads: {
                type: Array,
            },
        },
        components: {
            GamepadItem: GamepadItem,
        },
    });
    </script>

<style>
    .device-list {
        margin-bottom: 16px;
        padding: 32px;
        border-radius: var(--number-border-radius);
        background: var(--color-content-item-background);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 16px;
    }
</style>

