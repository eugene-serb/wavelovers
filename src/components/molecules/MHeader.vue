<script setup lang="ts">
import { defineComponent } from 'vue';
import { ATextLogo } from '@/components/atoms';
import MHeaderMenu from '@/components/molecules/MHeaderMenu.vue';
import { URL_TO_HOME } from '@/constants';

defineComponent({
  name: 'MHeader',
});
</script>

<template>
  <header class="header">
    <div class="header-wrapper container">
      <div class="logo-wrapper">
        <ATextLogo :link="URL_TO_HOME" text="Wavelovers" />
      </div>

      <nav class="menu-wrapper">
        <MHeaderMenu />
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  border-bottom: 8px solid var(--color-header-borderline);
  background: var(--color-header-background);

  @media only screen and (min-width: 540px) {
    border-bottom: 32px solid var(--color-header-borderline);
    background: var(--color-header-background);
  }

  .header-wrapper {
    padding-top: 32px;
    padding-bottom: 16px;

    @media only screen and (min-width: 540px) {
      padding-top: 64px;
      padding-bottom: 16px;
    }

    @media only screen and (min-width: 720px) {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      gap: 64px;
    }

    .logo-wrapper {
      text-align: center;

      @media only screen and (min-width: 720px) {
        width: 50%;
        text-align: left;
      }
    }

    .menu-wrapper {
      margin-top: 16px;
      align-self: center;

      @media only screen and (min-width: 540px) {
        margin-top: 32px;
        align-self: center;
      }

      @media only screen and (min-width: 720px) {
        width: 50%;
        margin-top: 0px;
        align-self: flex-end;
      }
    }
  }
}
</style>
