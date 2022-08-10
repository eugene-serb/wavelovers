<template>
    <div class="content-item navigation-list">
        <router-link to="/" class="navigation-item">Patterns</router-link>
        <router-link to="/custom" class="navigation-item">Custom</router-link>
        <router-link to="/manual" class="navigation-item">Manual</router-link>
        <router-link to="/diagnostic" class="navigation-item">Diagnostic</router-link>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'NavigationList',
    });
</script>

<style lang="scss">
    .navigation-list {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 16px;
    }

    .navigation-item.router-link-active,
    .navigation-item.router-link-exact-active {
        border-bottom: 2px solid var(--color-link-hover);
        color: var(--color-link-hover);
        transition: all 0.5s ease;
        text-decoration: none;
    }
</style>

