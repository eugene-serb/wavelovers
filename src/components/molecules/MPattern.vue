<script setup lang="ts">
import { computed } from 'vue';

import type { TCommonPattern } from '@/models';

/**
 * Интерфейс входных параметров компонента.
 */
interface Props {
  /**
   * Шаблон вибрации.
   */
  pattern: TCommonPattern;
  /**
   * Текущая вибрация.
   */
  mode: number;
  /**
   * Включена ли вибрация сейчас?
   */
  isActive: boolean;
  /**
   * Индекс шаблона.
   */
  index: number;
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

/**
 * Входные параметры компонента.
 */
const props = defineProps<Props>();

/**
 * События, которые может сгенерировать компонент.
 */
const emits = defineEmits<Emits>();

/**
 * Отражает состояние, выбран ли шаблон или нет.
 */
const isSelected = computed<boolean>(() => props.index === props.mode && props.isActive);

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
  <div
    class="pattern-item"
    :class="{ 'pattern-item_selected': isSelected }"
    @click="onClick(index)"
  >
    <span class="pattern-item__icon">{{ pattern.icon }}</span>
    <div class="pattern-item__info-container">
      <span class="pattern-item__name">{{ pattern.name }}</span>
      <span class="pattern-item__type">{{ pattern.type }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.pattern-item {
  width: 100%;
  height: 50px;
  padding: 8px;
  border-radius: var(--number-border-radius);
  background-color: var(--color-pattern-button);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  text-align: center;
  overflow: hidden;
  cursor: pointer;

  @media only screen and (min-width: 540px) {
    width: 200px;
  }

  ::selection {
    background-color: var(--color-b);
  }

  &.pattern-item_selected {
    background: var(--color-b);
  }

  > .pattern-item__icon {
    font-size: 24px;
  }

  > .pattern-item__info-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;

    > .pattern-item__name {
      font-size: 16px;
      white-space: nowrap;
      overflow: hidden;
      color: var(--color-pattern-text);
    }

    > .pattern-item__type {
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      color: var(--color-pattern-text);
    }
  }
}
</style>
