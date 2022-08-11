<template>
    <div class="content-item app-manual">
        <label class="manual-form__input">
            <span>Weak Magnitude</span>
            <input v-model="weakMagnitude"
                   type="range" required disabled
                   min="0.0" max="1.0" step="0.01" />
        </label>
        <label class="manual-form__input">
            <span>Strong Magnitude</span>
            <input v-model="strongMagnitude"
                   type="range" required disabled
                   min="0.0" max="1.0" step="0.01" />
        </label>
        <div class="manual-controls">
            <div>
                <kbd>RT</kbd>
                <span> – Vibrate</span>
            </div>
            <div>
                <kbd>A</kbd>
                <span> – Light Mode</span>
            </div>
            <div>
                <kbd>X</kbd>
                <span> – Heavy Mode</span>
            </div>
            <div>
                <kbd>Y</kbd>
                <span> – Combined Mode</span>
            </div>
            <div>
                <kbd>B</kbd>
                <span> – Lock</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from '@/store/index';
    import Vibrator from '@/models/Vibrator';
    import TPatternUnit from '@/models/TPatternUnit';
    import PatternUnit from '@/models/PatternUnit';

    export default defineComponent({
        name: 'AppCustom',
        data: () => {
            return {
                timestamp: 0 as number,
                interval: 0 as number,
                mode: 0 as number,
                lock: false as boolean,
                startDelay: 0 as number,
                duration: 260 as number,
                weakMagnitude: 0 as number,
                strongMagnitude: 0 as number,
            };
        },
        computed: {
            gamepads: function (): Vibrator[] {
                const timestamp: number = this.timestamp;
                const result: Vibrator[] = store.getters.gamepads as Vibrator[];
                result.forEach((item) => {
                    item.interval = timestamp;
                })
                return result;
            },
        },
        methods: {
            start: function (): void {
                const pattern: TPatternUnit = new PatternUnit(
                    this.startDelay,
                    this.duration,
                    this.weakMagnitude,
                    this.strongMagnitude,
                );
                store.dispatch('vibrate', pattern);
            },
            stop: function (): void {
                store.dispatch('setIsActive', false);
                store.dispatch('setMode', 0);
                store.dispatch('reset');
            },
            eventLoop: function (): void {
                this.updateComputed();
                this.updateMode();
                this.updatePattern();
                this.handle();
            },
            updateComputed: function (): void {
                this.timestamp = Date.now();
            },
            updateMode: function (): void {
                if (this.gamepads.length > 0) {
                    if (this.gamepads[0].unit.buttons[1].pressed === true) {
                        this.lock = !this.lock;
                    }
                    if (this.lock === false) {
                        if (this.gamepads[0].unit.buttons[0].pressed === true) {
                            this.mode = 0;
                        }
                        if (this.gamepads[0].unit.buttons[2].pressed === true) {
                            this.mode = 1;
                        }
                        if (this.gamepads[0].unit.buttons[3].pressed === true) {
                            this.mode = 2;
                        }
                    }
                }
            },
            updatePattern: function (): void {
                if (this.gamepads.length > 0) {
                    if (this.lock === false) {
                        if (this.mode === 0) {
                            this.weakMagnitude = this.gamepads[0].unit.buttons[7].value;
                            this.strongMagnitude = this.gamepads[0].unit.buttons[7].value;
                        }
                        if (this.mode === 1) {
                            this.weakMagnitude = 0;
                            this.strongMagnitude = this.gamepads[0].unit.buttons[7].value;
                        }
                        if (this.mode === 2) {
                            this.weakMagnitude = this.gamepads[0].unit.buttons[7].value;
                            this.strongMagnitude = 0;
                        }
                    }
                }
            },
            handle: function (): void {
                if (this.gamepads.length > 0) {
                    this.gamepads.forEach((gamepad) => {
                        if (gamepad.unit.buttons[7].value > 0 || this.lock === true) {
                            this.start();
                        } else {
                            this.stop();
                        }
                    });
                }
            },
        },
        mounted() {
            this.interval = setInterval(this.eventLoop, 250);
        },
        unmounted() {
            clearInterval(this.interval);
        },
    });
</script>

<style lang="scss">
    .app-manual {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 32px;
    }

    .manual-form__input {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
    }

    .manual-controls {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-self: center;
    }

    @media only screen and (min-width: 540px) {
        .manual-form__input {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        .manual-controls {
            display: flex;
            flex-direction: row;
            align-self: stretch;
        }
    }
</style>

