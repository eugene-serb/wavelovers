<script setup lang="ts">
import MPattern from '@/components/molecules/MPattern.vue';

import type { TCommonPattern } from '@/models';

/**
 * Интерфейс входных параметров компонента.
 */
interface Props {
  /**
   * Шаблоны вибрации.
   */
  patterns: TCommonPattern[];
  /**
   * Текущая вибрация.
   */
  mode: number;
  /**
   * Включена ли вибрация сейчас?
   */
  isActive: boolean;
}

/**
 * Интерфейс событий, которые может сгенерировать компонент.
 */
interface Emits {
  /**
   * Клик по шаблону.
   *
   * @param e - Имя события.
   * @param index - Номер шаблона.
   */
  (e: 'click', index: number): void;
}

defineProps<Props>();

/**
 * События, которые может сгенерировать компонент.
 */
const emits = defineEmits<Emits>();

/**
 * Событие выполняемое при клике кнопки мыши.
 *
 * @param index - Индекс элемента.
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
      :pattern
      :index
      :mode
      :isActive
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
