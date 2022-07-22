<template>
    <main class="page container">
        <section class="banner-container">
            <div class="banner">
                <h1>404</h1>
                <span>File not found. Please, go to the </span><a href="https://wavelovers.ru/" target="_self">homepage</a><br />
                <span>Contact me </span><a href="https://t.me/eugene_serb/" target="_blank">@eugene_serb</a>
            </div>
        </section>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'NotFoundView',
    });
</script>

<style lang="scss">
    .banner-container {
        display: flex;
    }

    .banner {
        margin: auto;
        padding: 16px;
    }
</style>

