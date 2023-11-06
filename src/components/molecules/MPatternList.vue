<script lang="ts">
import { defineComponent } from 'vue';
import { APattern } from '@/components/atoms';

import type { PropType } from 'vue';
import type { TPattern } from '@/models';

export default defineComponent({
  name: 'MPatternList',
  components: {
    APattern,
  },
  props: {
    patterns: {
      type: Array as PropType<TPattern[]>,
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
  <div class="content-item pattern-list">
    <APattern
      v-for="(pattern, index) in patterns"
      :key="pattern.name"
      :pattern="pattern"
      :index="index"
      :mode="mode"
      :isActive="isActive"
      @change="change"
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
}

@media only screen and (min-width: 540px) {
  .pattern-list {
    display: flex;
    gap: 32px;
  }
}
</style>
@/models/Pattern
