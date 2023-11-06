<script lang="ts">
import { defineComponent } from 'vue';

import type { PropType } from 'vue';
import type { TPattern } from '@/models';

export default defineComponent({
  name: 'APattern',
  props: {
    pattern: {
      type: Object as PropType<TPattern>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    mode: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    change: function (index: number): void {
      this.$emit('change', index as number);
    },
  },
});
</script>

<template>
  <div
    @click="change(index)"
    class="pattern-item"
    :class="index === mode && isActive === true ? 'pattern-item_selected' : ''"
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
@/models/Pattern