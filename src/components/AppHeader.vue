<template>
    <header class="header">
        <div class="header-wrapper container">
            <div class="logo-wrapper">
                <span class="logo-wrapper__logo" translate="no">Wavelovers</span>
            </div>
            <nav class="menu-wrapper">
                <ul class="navigation">
                    <li class="navigation__item">
                        <router-link to="/" class="navigation__link">Home</router-link>
                    </li>
                    <li class="navigation__item">
                        <router-link to="/faq" class="navigation__link">FAQ</router-link>
                    </li>
                    <li class="navigation__item">
                        <router-link to="/about" class="navigation__link">About</router-link>
                    </li>
                    <li class="navigation__item">
                        <router-link to="/donate" class="navigation__link">Donate</router-link>
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

