<script setup lang="ts">
import { defineComponent } from 'vue';
import { MHeader, MFooter, MAnnounce } from '@/components/molecules';
import announces from '@/assets/announces.json';

defineComponent({
  name: 'LDefault',
});
</script>

<template>
  <MHeader />

  <main class="page container">
    <MAnnounce :announces="announces" />
    <slot name="default" />
  </main>

  <MFooter />
</template>

<style lang="scss">
.page {
  flex-grow: 1;
  margin-top: 32px;
  margin-bottom: 32px;

  @media only screen and (min-width: 540px) {
    margin-bottom: 64px;
  }
}
</style>
