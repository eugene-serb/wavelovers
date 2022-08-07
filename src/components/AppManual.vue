<template>
    <div class="content-item app-manual">
        <fieldset class="manual-form">
            <label class="manual-form__inputs">
                <span>Start Delay (ms)</span>
                <input v-model="startDelay"
                       type="number" placeholder="Start Delay"
                       min="0" max="1000" step="25" required />
            </label>
            <label class="manual-form__inputs">
                <span>Duration (ms)</span>
                <input v-model="duration"
                       type="number" placeholder="Duration"
                       min="0" max="1000" step="25" required />
            </label>
            <label class="manual-form__inputs">
                <span>Weak Magnitude</span>
                <input v-model="weakMagnitude"
                       type="range" placeholder="Weak Magnitude"
                       min="0.0" max="1.0" step="0.01" required />
            </label>
            <label class="manual-form__inputs">
                <span>Strong Magnitude</span>
                <input v-model="strongMagnitude"
                       type="range" placeholder="Strong Magnitude"
                       min="0.0" max="1.0" step="0.01" required />
            </label>
            <button @click="start">Start</button>
            <button @click="stop">Stop</button>
        </fieldset>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from '@/store/index';
    import TPatternUnit from '@/models/TPatternUnit';

    export default defineComponent({
        name: 'AppManual',
        data: () => {
            return {
                startDelay: 250 as number,
                duration: 250 as number,
                weakMagnitude: 1 as number,
                strongMagnitude: 1 as number,
            };
        },
        methods: {
            createPatternUnit: function (): TPatternUnit[] {
                const patternUnit: TPatternUnit[] = [{
                        startDelay: this.startDelay,
                        duration: this.duration,
                        weakMagnitude: this.weakMagnitude,
                        strongMagnitude: this.strongMagnitude,
                    },
                ];
                return patternUnit as TPatternUnit[];
            },
            start: function (): void {
                store.dispatch('startCustom', this.createPatternUnit());
            },
            stop: function (): void {
                store.dispatch('reset');
            },
        },
    });
</script>

<style lang="scss">
    .manual-form {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 16px;
    }

    .manual-form__inputs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
    }
</style>

