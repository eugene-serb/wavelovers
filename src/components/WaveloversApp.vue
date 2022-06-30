<template>
    <div class="wavelovers">
        <div class="content-item">
            <PatternList v-if="patterns.length > 0"
                         :patterns="patterns"
                         :mode="mode"
                         :isActive="isActive"
                         @change="change" />
            <div class="message" v-else>
                <span>Loading...</span>
            </div>
        </div>
        <div class="content-item">
            <GamepadList v-if="gamepads.length > 0"
                         :gamepads="gamepads" />
            <div class="message" v-else>
                <span>Press any gamepad's button or connect new gamepad.</span>
            </div>
        </div>
    </div>
</template>

<script>
    import PatternList from '@/components/PatternList.vue';
    import GamepadList from '@/components/GamepadList.vue';
    import Gamepad from '@/components/Gamepad.js';

    export default {
        name: 'WaveloversApp',
        components: {
            PatternList: PatternList,
            GamepadList: GamepadList,
        },
        data: () => {
            return {
                gamepads: [],
                patterns: [],
                isActive: false,
                mode: 0,
            };
        },
        methods: {
            loadPatterns: async function () {
                const url = 'https://wavelovers.ru/assets/patterns.json';
                try {
                    const response = await fetch(url);
                    if (response.ok) {
                        let json = await response.json();
                        this.patterns = json;
                    } else {
                        console.log('Connect to the Internet for download more patterns...');
                    }
                } catch (error) {
                    console.log('[error]', error);
                }
            },
            addEventListeners() {
                window.addEventListener('gamepadconnected', () => this.addGamepad(event));
                window.addEventListener('gamepaddisconnected', () => this.deleteGamepad(event));
            },
            addGamepad(event) {
                if (this.gamepads.length > 1) {
                    return;
                } else {
                    this.gamepads.push(new Gamepad(event.gamepad));
                }
            },
            deleteGamepad(event) {
                this.gamepads.forEach((gamepad, index) => {
                    if (gamepad.unit.id === event.gamepad.id) {
                        this.gamepads.splice(index, 1);
                    }
                });
            },
            change(index) {
                if (this.mode === index) {
                    this.isActive = !this.isActive;
                    this.reset();
                } else {
                    this.isActive = true;
                    this.mode = index;
                }
                if (this.isActive === true) {
                    this.reset();
                    this.vibrate();
                }
            },
            vibrate() {
                this.gamepads.forEach(gamepad => {
                    gamepad.vibrate(this.patterns[this.mode].pattern);
                });
            },
            reset() {
                this.gamepads.forEach(gamepad => {
                    gamepad.reset();
                });
            },
        },
        mounted() {
            this.loadPatterns();
            this.addEventListeners();
        },
    };
</script>

<style>
    .wavelovers {
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-start;
        gap: 16px;
    }

    @media only screen and (min-width: 540px) {
        .wavelovers {
            flex-direction: column;
        }
    }

    .message {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        font-size: 16px;
    }

    @media only screen and (min-width: 540px) {
        .message {
            font-size: 24px;
        }
    }
</style>
