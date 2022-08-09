<template>
    <div class="content-item app-manual">
        <fieldset class="manual-form">
            <label class="manual-form__input">
                <span>Start Delay (ms)</span>
                <input v-model="startDelay"
                       type="number" placeholder="Start Delay"
                       min="0" max="1000" step="25" required />
            </label>
            <label class="manual-form__input">
                <span>Duration (ms)</span>
                <input v-model="duration"
                       type="number" placeholder="Duration"
                       min="0" max="1000" step="25" required />
            </label>
            <label class="manual-form__input">
                <span>Weak Magnitude</span>
                <input v-model="weakMagnitude"
                       type="range" placeholder="Weak Magnitude"
                       min="0.0" max="1.0" step="0.01" required />
            </label>
            <label class="manual-form__input">
                <span>Strong Magnitude</span>
                <input v-model="strongMagnitude"
                       type="range" placeholder="Strong Magnitude"
                       min="0.0" max="1.0" step="0.01" required />
            </label>
            <div class="manual-form__buttons">
                <button @click="start" class="manual-form__button">Start</button>
                <button @click="stop" class="manual-form__button">Stop</button>
            </div>
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
                }];
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
        flex-direction: column-reverse;
        justify-content: space-between;
        gap: 16px;
    }

    .manual-form__input {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
    }

    .manual-form__buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 32px;
    }

    .manual-form__button {
        width: 100%;
    }

    @media only screen and (min-width: 540px) {
        .manual-form {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        .manual-form__input {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
</style>

