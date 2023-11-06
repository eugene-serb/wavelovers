<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router'
import store from '@/store/index';
import LDefault from '@/layouts/LDefault.vue';

export default defineComponent({
  name: 'App',
  components: {
    LDefault,
    RouterView,
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

<template>
  <LDefault>
    <RouterView />
  </LDefault>
</template>
