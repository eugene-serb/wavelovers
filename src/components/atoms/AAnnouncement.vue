<script setup lang="ts">
import { defineComponent, defineProps } from 'vue';

defineComponent({
  name: 'AAnnouncement',
});

defineProps({
  /**
   * Идентификатор анонса.
   */
  id: {
    type: String,
    required: true,
  },
  /**
   * Включён ли анонс.
   */
  enabled: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div v-if="enabled" class="content-item a-announcement">
    <span class="text">
      <slot name="default" />
    </span>
  </div>
</template>

<style lang="scss">
.a-announcement {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: start;
  font-size: 16px;
  padding: 16px 32px;
}
</style>
