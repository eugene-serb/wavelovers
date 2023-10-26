<template>
  <div class="content-item pattern-list">
    <PatternItem
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

<script lang="ts">
import { defineComponent } from 'vue';
import PatternItem from '@/components/PatternItem.vue';

export default defineComponent({
  name: 'PatternList',
  props: {
    patterns: {
      type: Array,
    },
    mode: {
      type: Number,
    },
    isActive: {
      type: Boolean,
    },
  },
  components: {
    PatternItem: PatternItem,
  },
  methods: {
    change: function (index: number): void {
      this.$emit('change', index as number);
    },
  },
});
</script>

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
