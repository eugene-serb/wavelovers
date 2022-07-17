<template>
    <div class="pattern-list">
        <PatternItem v-for="(pattern, index) in patterns"
                     :key="pattern.name"
                     :pattern="pattern"
                     :index="index"
                     :mode="mode"
                     :isActive="isActive"
                     @change="change" />
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
            change(index: number): void {
                this.$emit('change', index as number);
            },
        },
    });
</script>

<style>
.pattern-list {
        margin-bottom: 16px;
        padding: 32px;
        border-radius: var(--number-border-radius);
        background: var(--color-content-item-background);
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 32px;
    }
</style>

