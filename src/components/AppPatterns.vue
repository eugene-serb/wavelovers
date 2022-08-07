<template>
    <div class="app-patterns">
        <PatternList v-if="patterns.length > 0"
                     :patterns="patterns"
                     :mode="mode"
                     :isActive="isActive"
                     @change="change" />
        <MessageItem v-else>Loading...</MessageItem>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from '@/store/index';
    import PatternList from '@/components/PatternList.vue';
    import MessageItem from '@/components/MessageItem.vue';
    import TPattern from '@/models/TPattern';

    export default defineComponent({
        name: 'AppPatterns',
        components: {
            PatternList: PatternList,
            MessageItem: MessageItem,
        },
        computed: {
            patterns: function (): TPattern[] {
                return store.getters.patterns as TPattern[];
            },
            mode: function (): number {
                return store.getters.mode as number;
            },
            isActive: function (): boolean {
                return store.getters.isActive as boolean;
            },
        },
        methods: {
            change(index: number): void {
                store.dispatch('change', index as number);
            },
        },
        mounted() {
            store.dispatch('loadPatterns');
        },
    });
</script>

