<template>
    <div class="list-item"></div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'GamepadItem',
    });
</script>

<style lang="scss">
    .list-item {
        max-width: 100%;
        padding: 16px;
        border: 4px solid var(--color-b);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .list-item__info {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .list-item_selected .list-item__info span {
        color: var(--color-white);
    }
</style>

