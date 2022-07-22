<template>
    <main class="page container">
        <h1 class="visually-hidden">Wavelovers – About</h1>
        <div>
            <div class="content-item">
                <h2 class="content-item__header">About</h2>
                <p>Hi! I am the author and developer of Wavelovers app and I want to thank you for using this app. If you have any ideas or wishes, you can write to me.</p>
                <br />
                <span>Write me: </span>
                <a href="mailto:eugene.serb@gmail.com" target="_blank">eugene.serb@gmail.com</a>
                <br />
                <span>Visit my homepage: </span>
                <a href="https://eugene-serb.github.io/" target="_blank">eugene-serb.github.io</a>
            </div>
            <div class="content-item">
                <h2 class="content-item__header">Advertising</h2>
                <span>If you have advertising suggestions, please mail me: </span>
                <a href="mailto:eugene.serb@gmail.com" target="_blank">eugene.serb@gmail.com</a>
            </div>
        </div>
    </main>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'AboutView',
    });
</script>

