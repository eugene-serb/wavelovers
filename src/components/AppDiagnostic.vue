<template>
    <div class="content-item">
        <div v-for="gamepad in gamepads"
             :key="gamepad.id">
            <div class="output-gamepad">
                <h3>#{{ gamepad.unit.index + 1 }}. {{ gamepad.unit.id }}</h3>
                <div class="gamepad-group">
                    <div>
                        <span :class="[ gamepad.unit.buttons[0].value === 1 ? 'pressed' : '' ]"
                              >A: {{ gamepad.unit.buttons[0].value.toFixed(2) }}</span>
                        <span :class="[gamepad.unit.buttons[1].value === 1 ? 'pressed' : '' ]"
                              >B: {{ gamepad.unit.buttons[1].value.toFixed(2) }}</span>
                        <span :class="[ gamepad.unit.buttons[2].value === 1 ? 'pressed' : '' ]"
                              >X: {{ gamepad.unit.buttons[2].value.toFixed(2) }}</span>
                        <span :class="[ gamepad.unit.buttons[3].value === 1 ? 'pressed' : '' ]"
                              >Y: {{ gamepad.unit.buttons[3].value.toFixed(2) }}</span>
                    </div>
                    <div>
                        <span :class="[ gamepad.unit.buttons[4].value === 1 ? 'pressed' : '' ]"
                              >LB: {{ gamepad.unit.buttons[4].value.toFixed(2) }}</span>
                        <span :class="[ gamepad.unit.buttons[5].value === 1 ? 'pressed' : '' ]"
                              >RB: {{ gamepad.unit.buttons[5].value.toFixed(2) }}</span>
                        <span :class="[ gamepad.unit.buttons[6].value === 1 ? 'pressed' : '' ]"
                              >LT: {{ gamepad.unit.buttons[6].value.toFixed(2) }}</span>
                        <span :class="[ gamepad.unit.buttons[7].value === 1 ? 'pressed' : '' ]"
                              >RT: {{ gamepad.unit.buttons[7].value.toFixed(2) }}</span>
                    </div>
                    <div>
                        <span :class="[ gamepad.unit.buttons[8].value === 1 ? 'pressed' : '' ]"
                        >Back: {{ gamepad.unit.buttons[8].value.toFixed(2) }}</span>
                        <span :class="[ gamepad.unit.buttons[9].value === 1 ? 'pressed' : '' ]"
                        >Start: {{ gamepad.unit.buttons[9].value.toFixed(2) }}</span>
                        <span :class="[ gamepad.unit.buttons[10].value === 1 ? 'pressed' : '' ]"
                              >Left Stick: {{gamepad.unit.buttons[10].value.toFixed(2) }}</span>
                        <span :class="[ gamepad.unit.buttons[11].value === 1 ? 'pressed' : '' ]"
                              >Right Stick: {{ gamepad.unit.buttons[11].value.toFixed(2) }}</span>
                    </div>
                    <div>
                        <span :class="[ gamepad.unit.buttons[12].value === 1 ? 'pressed' : '' ]"
                              >Forward: {{ gamepad.unit.buttons[12].value.toFixed(2) }}</span>
                        <span :class="[ gamepad.unit.buttons[13].value === 1 ? 'pressed' : '' ]"
                              >Backward: {{ gamepad.unit.buttons[13].value.toFixed(2) }}</span>
                        <span :class="[ gamepad.unit.buttons[14].value === 1 ? 'pressed' : '' ]"
                              >Left: {{ gamepad.unit.buttons[14].value.toFixed(2) }}</span>
                        <span :class="[ gamepad.unit.buttons[15].value === 1 ? 'pressed' : '' ]"
                              >Right: {{ gamepad.unit.buttons[15].value.toFixed(2) }}</span>
                    </div>
                    <div>
                        <span>Left Stick X: {{ gamepad.unit.axes[0] ? gamepad.unit.axes[0].toFixed(2) : 'missing' }}</span>
                        <span>Left Stick Y: {{ gamepad.unit.axes[1] ? gamepad.unit.axes[1].toFixed(2) : 'missing' }}</span>
                        <span>Right Stick X: {{ gamepad.unit.axes[2] ? gamepad.unit.axes[2].toFixed(2) : 'missing' }}</span>
                        <span>Right Stick Y: {{ gamepad.unit.axes[3] ? gamepad.unit.axes[3].toFixed(2) : 'missing' }}</span>
                    </div>
                </div>
                <span>Vibration Actuator: {{ gamepad.unit.vibrationActuator ? 'Available' : 'missing' }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import store from '@/store/index';
    import Vibrator from '@/models/Vibrator';

    export default defineComponent({
        name: 'AppDiagnostic',
        data: () => {
            return {
                timestamp: 0 as number,
                interval: 0 as number,
            };
        },
        computed: {
            gamepads: function (): Vibrator[] {
                const timestamp: number = this.timestamp;
                return store.getters.gamepads as Vibrator[];
            },
        },
        methods: {
            updateTimestamp: function (): void {
                this.timestamp = Date.now();
            },
        },
        mounted() {
            this.interval = setInterval(this.updateTimestamp, 1);
        },
        unmounted() {
            clearInterval(this.interval);
        },
    });
</script>

<style lang="scss">
    .message-box {
        text-align: center;
    }

    .output-wrapper {
        margin-block-start: 32px;
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
        gap: 32px;
    }

    .output-gamepad {
        width: 100%;
        padding: 16px;
        border: 2px solid var(--color-border);
        border-radius: var(--number-border-radius);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 16px;
    }

    .gamepad-group {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }

    .gamepad-group > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 8px;
    }

    .pressed {
        background-color: var(--color-link-hover);
        color: var(--color-background);
    }
</style>

