<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'MHeader',
  components: {
    RouterLink,
  },
});
</script>

<template>
  <header class="header">
    <div class="header-wrapper container">
      <div class="logo-wrapper">
        <a class="logo-wrapper__logo" translate="no">Wavelovers</a>
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
}

.header ::selection {
  background: var(--color-header-selection);
}

.header :focus {
  border-bottom: var(--number-header-focus-border-size) solid
    var(--color-header-navigation-link-hover);
}

.header :focus-visible {
  outline: var(--number-header-focus-border-size) solid var(--color-header-navigation-link-hover);
  border-color: transparent;
}

.header-wrapper {
  padding-top: 32px;
  padding-bottom: 16px;
}

.logo-wrapper {
  text-align: center;
}

.logo-wrapper__logo {
  font-size: 48px;
  font-weight: 500;
  color: var(--color-header-logo);
  cursor: default;
}

.logo-wrapper a {
  border-color: transparent;
  color: var(--color-header-navigation-link);
  cursor: pointer;
}

.logo-wrapper a:hover {
  border: none;
  border-color: var(--color-header-navigation-link-hover);
  color: var(--color-header-navigation-link-hover);
}

.menu-wrapper {
  margin-top: 16px;
  align-self: center;
}

.navigation {
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
}

.navigation__item {
  font-size: 16px;
  text-transform: uppercase;
}

.navigation__item a {
  border-color: transparent;
  color: var(--color-header-navigation-link);
}

.navigation__item a:hover {
  border-color: var(--color-header-navigation-link-hover);
  color: var(--color-header-navigation-link-hover);
}

@media only screen and (min-width: 540px) {
  .header {
    border-bottom: 32px solid var(--color-header-borderline);
    background: var(--color-header-background);
  }

  .header-wrapper {
    padding-top: 64px;
    padding-bottom: 16px;
  }

  .menu-wrapper {
    margin-top: 32px;
    align-self: center;
  }
}

@media only screen and (min-width: 720px) {
  .header-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    gap: 64px;
  }

  .logo-wrapper {
    width: 50%;
    text-align: left;
  }

  .menu-wrapper {
    width: 50%;
    margin-top: 0px;
    align-self: flex-end;
  }
}

@media only screen and (min-width: 1024px) {
  .logo-wrapper__logo {
    font-size: 64px;
  }
}
</style>
