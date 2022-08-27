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
      addGamepad: function (event: GamepadEvent): void {
        store.dispatch('addGamepad', event);
      },
      deleteGamepad: function (event: GamepadEvent): void {
        store.dispatch('deleteGamepad', event);
      },
      addEventListeners: function (): void {
        window.addEventListener('gamepadconnected', this.addGamepad);
        window.addEventListener('gamepaddisconnected', this.deleteGamepad);
      },
      removeEventListeners: function (): void {
        window.removeEventListener('gamepadconnected', this.addGamepad);
        window.removeEventListener('gamepaddisconnected', this.deleteGamepad);
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

