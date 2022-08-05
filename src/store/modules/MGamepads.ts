import { ActionContext, Module } from 'vuex';
import IRootState from '@/store/models/IRootState';
import IGamepadsState from '@/store/models/IGamepadsState';
import Vibrator from '@/models/Vibrator';
import IGamepad from '@/models/IGamepad';
import IGamepadEvent from '@/models/IGamepadEvent';
import TPatternUnit from '@/models/TPatternUnit';

const MGamepads: Module<IGamepadsState, IRootState> = {
    state: () => ({
        gamepads: [] as Vibrator[],
    }),
    getters: {
        gamepads: function (state: IGamepadsState): Vibrator[] {
            return state.gamepads as Vibrator[];
        },
    },
    mutations: {
        addGamepad: function (state: IGamepadsState, gamepad: Vibrator): void {
            state.gamepads.push(gamepad as Vibrator);
        },
        deleteGamepad: function (state: IGamepadsState, index: number): void {
            state.gamepads.splice(index, 1);
        },
    },
    actions: {
        addGamepad: function (
            context: ActionContext<IGamepadsState, IRootState>,
            event: GamepadEvent
        ): void {
            const iEvent: IGamepadEvent = event as unknown as IGamepadEvent;
            if (context.getters.gamepads.length >= 1) {
                return;
            } else {
                context.commit('addGamepad', new Vibrator(iEvent.gamepad as IGamepad));
            }
        },
        deleteGamepad: function (
            context: ActionContext<IGamepadsState, IRootState>,
            event: GamepadEvent
        ): void {
            context.getters.gamepads.forEach((gamepad: Vibrator, index: number) => {
                if (gamepad.unit.id === event.gamepad.id) {
                    context.commit('deleteGamepad', index as number);
                }
            });
        },
        vibrate: function (
            context: ActionContext<IGamepadsState, IRootState>
        ): void {
            context.getters.gamepads.forEach((gamepad: Vibrator) => {
                gamepad.vibrate(context.getters.patterns[context.getters.mode].pattern as TPatternUnit[]);
            });
        },
        reset: function (
            context: ActionContext<IGamepadsState, IRootState>
        ): void {
            context.getters.gamepads.forEach((gamepad: Vibrator) => {
                gamepad.reset();
            });
        },
    },
};

export default MGamepads;

