<script setup lang="ts">
import { defineComponent, defineProps, defineEmits } from 'vue';
import MPattern from '@/components/molecules/MPattern.vue';

import type { PropType } from 'vue';
import type { TPattern } from '@/models';

defineComponent({
  name: 'MPatternList',
});

defineProps({
  /**
   * Шаблоны вибрации.
   */
  patterns: {
    type: Array as PropType<TPattern[]>,
    required: true,
  },
  /**
   * Текущая вибрация.
   */
  mode: {
    type: Number,
    required: true,
  },
  /**
   * Включена ли вибрация сейчас?
   */
  isActive: {
    type: Boolean,
    required: true,
  },
});

/**
 * События, которые может сгенерировать компонент.
 */
const emits = defineEmits({
  click(index: number): boolean {
    return index >= 0;
  },
});

/**
 * Событие выполняемое при клике кнопки мыши.
 *
 * @param index Индекс элемента.
 */
function onClick(index: number): void {
  emits('click', index);
}
</script>

<template>
  <div class="content-item pattern-list">
    <MPattern
      v-for="(pattern, index) in patterns"
      :key="pattern.name"
      :pattern="pattern"
      :index="index"
      :mode="mode"
      :isActive="isActive"
      @click="onClick"
    />
  </div>
</template>

<style lang="scss">
.pattern-list {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;

  @media only screen and (min-width: 540px) {
    display: flex;
    gap: 32px;
  }
}
</style>
