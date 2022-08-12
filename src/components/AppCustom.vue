<template>
    <NavigationList />
    <div class="content-item app-custom">
        <fieldset class="custom-form">
            <label class="custom-form__input">
                <span>Start Delay (ms)</span>
                <input v-model="startDelay"
                       type="number" placeholder="Start Delay"
                       min="0" max="1000" step="25" required />
            </label>
            <label class="custom-form__input">
                <span>Duration (ms)</span>
                <input v-model="duration"
                       type="number" placeholder="Duration"
                       min="0" max="1000" step="25" required />
            </label>
            <label class="custom-form__input">
                <span>Weak Magnitude</span>
                <input v-model="weakMagnitude"
                       type="range" required
                       min="0.0" max="1.0" step="0.01" />
            </label>
            <label class="custom-form__input">
                <span>Strong Magnitude</span>
                <input v-model="strongMagnitude"
                       type="range" required
                       min="0.0" max="1.0" step="0.01" />
            </label>
            <div class="custom-form__buttons">
                <button @click="start" class="custom-form__button">Start</button>
                <button @click="stop" class="custom-form__button">Stop</button>
            </div>
        </fieldset>
    </div>
    <GamepadList v-if="gamepads.length > 0"
                 :gamepads="gamepads" />
    <MessageItem v-else>Press any gamepad button or connect a new gamepad to vibrate.</MessageItem>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from '@/store/index';
    import NavigationList from '@/components/NavigationList.vue';
    import GamepadList from '@/components/GamepadList.vue';
    import MessageItem from '@/components/MessageItem.vue';
    import Vibrator from '@/models/Vibrator';
    import TPatternUnit from '@/models/TPatternUnit';
    import PatternUnit from '@/models/PatternUnit';

    export default defineComponent({
        name: 'AppCustom',
        components: {
            NavigationList: NavigationList,
            GamepadList: GamepadList,
            MessageItem: MessageItem,
        },
        data: () => {
            return {
                startDelay: 250 as number,
                duration: 250 as number,
                weakMagnitude: 1 as number,
                strongMagnitude: 1 as number,
            };
        },
        computed: {
            gamepads: function (): Vibrator[] {
                return store.getters.gamepads as Vibrator[];
            },
        },
        methods: {
            start: function (): void {
                const patterns: TPatternUnit[] = [new PatternUnit(
                    this.startDelay,
                    this.duration,
                    this.weakMagnitude,
                    this.strongMagnitude,
                )];
                store.dispatch('startCustom', patterns);
            },
            stop: function (): void {
                store.dispatch('reset');
            },
        },
    });
</script>

<style lang="scss">
    .custom-form {
        display: flex;
        flex-direction: column-reverse;
        justify-content: space-between;
        gap: 16px;
    }

    .custom-form__input {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
    }

    .custom-form__buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 32px;
    }

    .custom-form__button {
        width: 100%;
    }

    @media only screen and (min-width: 540px) {
        .custom-form {
            display: flex;
            flex-direction: column;
            gap: 32px;
        }

        .custom-form__input {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
</style>

