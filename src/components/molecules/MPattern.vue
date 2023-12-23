<script setup lang="ts">
import { defineComponent, defineProps, defineEmits, computed } from 'vue';

import type { PropType } from 'vue';
import type { TPattern } from '@/models';

defineComponent({
  name: 'MPattern',
});

const props = defineProps({
  /**
   * Шаблон вибрации.
   */
  pattern: {
    type: Object as PropType<TPattern>,
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
  /**
   * Индекс шаблона.
   */
   index: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits({
  click(index: number): boolean {
    return index >= 0;
  },
});

/**
 * Отражает состояние, выбран ли шаблон или нет.
 */
const isSelected = computed<boolean>(() => props.index === props.mode && props.isActive);

/**
 * Событие выполняемое при клике кнопки мыши.
 * 
 * @param index Индекс элемента.
 */
function onClick(index: number): void {
  emit('click', index);
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
  background: var(--color-pattern-button);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
}

@media only screen and (min-width: 540px) {
  .pattern-item {
    width: 200px;
  }
}

.pattern-item ::selection {
  background-color: transparent;
}

.pattern-item_selected {
  background: var(--color-b);
}

.pattern-item__icon {
  font-size: 24px;
}

.pattern-item__info-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}

.pattern-item__name {
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  color: var(--color-pattern-text);
}

.pattern-item__type {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  color: var(--color-pattern-text);
}
</style>
