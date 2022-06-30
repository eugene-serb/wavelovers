<template>
    <div class="device-list">
        <GamepadItem v-for="gamepad in gamepads"
                     :key="gamepad.id"
                     v-text="gamepad.unit.id" />
    </div>
</template>

<script>
    import GamepadItem from '@/components/GamepadItem.vue';

    export default {
        name: 'GamepadList',
        props: {
            gamepads: {
                type: Array,
            },
        },
        components: {
            GamepadItem: GamepadItem,
        },
    };
</script>

<style>
    .device-list {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 16px;
    }
</style>
