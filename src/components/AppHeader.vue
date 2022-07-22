<template>
    <header class="header">
        <div class="header-wrapper container">
            <div class="logo-wrapper">
                <span class="logo-wrapper__logo" translate="no">Wavelovers</span>
            </div>
            <nav class="menu-wrapper">
                <ul class="navigation">
                    <li class="navigation__item">
                        <a href="/" target="_self" class="navigation__link">Home</a>
                    </li>
                    <li class="navigation__item">
                        <a href="/faq.html" target="_self" class="navigation__link">FAQ</a>
                    </li>
                    <li class="navigation__item">
                        <a href="/about.html" target="_self" class="navigation__link">About</a>
                    </li>
                    <li class="navigation__item">
                        <a href="/donate.html" target="_self" class="navigation__link">Donate</a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'AppHeader',
    });
</script>

<style lang="scss"></style>

