<template>
    <div @click="change(index)"
         :class="['pattern-item',
                   index === mode && isActive === true ?
                  'pattern-item_selected' : '',
                 ]">
        <span class="pattern-item__icon"
              v-text="pattern.icon"></span>
        <span class="pattern-item__name"
              v-text="pattern.name"></span>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'PatternItem',
        props: {
            pattern: {
                type: Object,
            },
            index: {
                type: Number,
            },
            mode: {
                type: Number,
            },
            isActive: {
                type: Boolean,
            },
        },
        methods: {
            change: function (index: number): void {
                this.$emit('change', index as number);
            },
        },
    });
</script>

<style lang="scss">
    .pattern-item {
        width: 100%;
        height: 48px;
        padding: 8px;
        border-radius: var(--number-border-radius);
        background: var(--color-pattern-button);
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 16px;
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

    .pattern-item__name {
        font-size: 14px;
        white-space: nowrap;
        overflow: hidden;
        color: var(--color-pattern-text);
    }
</style>

