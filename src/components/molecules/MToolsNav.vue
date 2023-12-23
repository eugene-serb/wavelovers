<script setup lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

defineComponent({
  name: 'MToolsNav',
});
</script>

<template>
  <div class="content-item navigation-list">
    <RouterLink to="/" class="navigation-list__item">Patterns</RouterLink>
    <RouterLink to="/custom" class="navigation-list__item">Custom</RouterLink>
    <RouterLink to="/manual" class="navigation-list__item">Manual</RouterLink>
    <RouterLink to="/diagnostic" class="navigation-list__item">Diagnostic</RouterLink>
  </div>
</template>

<style lang="scss">
.navigation-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;
}

.navigation-list__item.router-link-active,
.navigation-list__item.router-link-exact-active {
  border-bottom: 2px solid var(--color-link-hover);
  color: var(--color-link-hover);
  transition: all 0.5s ease;
  text-decoration: none;
}
</style>
