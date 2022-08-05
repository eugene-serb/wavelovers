import { createStore } from 'vuex';
import IGamepad from '@/models/IGamepad';
import IGamepadEvent from '@/models/IGamepadEvent';
import TPattern from '@/models/TPattern';
import TPatternUnit from '@/models/TPatternUnit';
import Vibrator from '@/models/Vibrator';

export default createStore({
    state: {
        gamepads: [] as Vibrator[],
        patterns: [] as TPattern[],
        mode: 0 as number,
        isActive: false as boolean,
    },
    getters: {
        gamepads: function (state): Vibrator[] {
            return state.gamepads as Vibrator[];
        },
        patterns: function (state): TPattern[] {
            return state.patterns as TPattern[];
        },
        mode: function (state): number {
            return state.mode as number;
        },
        isActive: function (state): boolean {
            return state.isActive as boolean;
        },
    },
    mutations: {
        setPatterns: function (state, patterns: TPattern[]): void {
            state.patterns = patterns as TPattern[];
        },
        setMode: function (state, mode: number): void {
            state.mode = mode as number;
        },
        setIsActive: function (state, isActive: boolean): void {
            state.isActive = isActive as boolean;
        },
        addGamepad: function (state, gamepad: Vibrator): void {
            state.gamepads.push(gamepad as Vibrator);
        },
        deleteGamepad: function (state, index: number): void {
            state.gamepads.splice(index, 1);
        },
    },
    actions: {
        loadPatterns: async function (context): Promise<void> {
            const url = 'https://wavelovers.ru/assets/patterns.json';
            try {
                const response: Response = await fetch(url);
                if (response.ok) {
                    const json: TPattern[] = await response.json();
                    context.commit('setPatterns', json as TPattern[]);
                } else {
                    console.log('Connect to the Internet for download more patterns...');
                }
            } catch (error) {
                console.log(error);
            }
        },
        setMode: function (context, index: number): void {
            context.commit('setMode', index as number);
        },
        setIsActive: function (context, isActive: boolean): void {
            context.commit('setIsActive', isActive as boolean);
        },
        addGamepad: function (context, event: GamepadEvent): void {
            const iEvent: IGamepadEvent = event as unknown as IGamepadEvent;
            if (context.getters.gamepads.length >= 1) {
                return;
            } else {
                context.commit('addGamepad', new Vibrator(iEvent.gamepad as IGamepad));
            }
        },
        deleteGamepad: function (context, event: GamepadEvent): void {
            context.getters.gamepads.forEach((gamepad: Vibrator, index: number) => {
                if (gamepad.unit.id === event.gamepad.id) {
                    context.commit('deleteGamepad', index as number);
                }
            });
        },
        vibrate: function (context): void {
            context.getters.gamepads.forEach((gamepad: Vibrator) => {
                gamepad.vibrate(context.getters.patterns[context.getters.mode].pattern as TPatternUnit[]);
            });
        },
        reset: function (context): void {
            context.getters.gamepads.forEach((gamepad: Vibrator) => {
                gamepad.reset();
            });
        },
        change: function (context, index: number): void {
            if (context.getters.mode === index) {
                context.dispatch('setIsActive', !context.getters.isActive);
            } else {
                context.dispatch('setIsActive', true);
                context.dispatch('setMode', index);
            }
            if (context.getters.isActive === true) {
                context.dispatch('reset');
                context.dispatch('vibrate');
            } else {
                context.dispatch('reset');
            }
        },
    },
    modules: {},
});

