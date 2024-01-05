<script setup lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import { ATextLogo } from '@/components/atoms';

defineComponent({
  name: 'MHeader',
});
</script>

<template>
  <header class="header">
    <div class="header-wrapper container">
      <div class="logo-wrapper">
        <ATextLogo text="Wavelovers" />
      </div>

      <nav class="menu-wrapper">
        <ul class="navigation">
          <li class="navigation__item">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="navigation__item">
            <RouterLink to="/faq">FAQ</RouterLink>
          </li>
          <li class="navigation__item">
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li class="navigation__item">
            <RouterLink to="/donate">Donate</RouterLink>
          </li>
        </ul>
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

      ::selection {
        background: var(--color-header-selection);
      }

      :focus {
        border-bottom: var(--number-header-focus-border-size) solid
          var(--color-header-navigation-link-hover);
      }

      :focus-visible {
        outline: var(--number-header-focus-border-size) solid var(--color-header-navigation-link-hover);
        border-color: transparent;
      }

      @media only screen and (min-width: 540px) {
        margin-top: 32px;
        align-self: center;
      }

      @media only screen and (min-width: 720px) {
        width: 50%;
        margin-top: 0px;
        align-self: flex-end;
      }

      .navigation {
        padding: 0;
        list-style-type: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 8px;

        .navigation__item {
          font-size: 16px;
          text-transform: uppercase;

          a {
            border-color: transparent;
            color: var(--color-header-navigation-link);

            &:hover {
              border-color: var(--color-header-navigation-link-hover);
              color: var(--color-header-navigation-link-hover);
            }
          }
        }
      }
    }
  }
}
</style>
