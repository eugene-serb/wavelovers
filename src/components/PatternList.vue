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

<script>
    import PatternItem from '@/components/PatternItem.vue';

    export default {
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
            change(index) {
                this.$emit('change', index);
            },
        },
    };
</script>

<style>
    .pattern-list {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 32px;
    }
</style>
