<script setup lang="ts">
/**
 * Интерфейс слотов, который содержит компонент.
 */
interface Slots {
  /**
   * Слот по умолчанию.
   */
  default(): any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

defineSlots<Slots>();
</script>

<template>
  <div class="list-item">
    <slot name="default" />
  </div>
</template>

<style lang="scss">
.list-item {
  max-width: 100%;
  padding: 16px;
  border: 4px solid var(--color-b);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
