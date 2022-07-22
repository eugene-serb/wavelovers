<template>
    <AppHeader />
    <router-view/>
    <AppFooter />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import AppHeader from '@/components/AppHeader.vue';
    import AppFooter from '@/components/AppFooter.vue';

    export default defineComponent({
        name: 'App',
        components: {
            AppHeader: AppHeader,
            AppFooter: AppFooter,
        },
    });
</script>

<style lang="scss"></style>

