import Vibrator from '@/models/Vibrator';

import type { ActionContext, Module } from 'vuex';
import type { IRootState, IGamepadsState } from '@/store/models';

const MGamepads: Module<IGamepadsState, IRootState> = {
  state: () => ({
    gamepads: [],
  }),
  getters: {
    gamepads: function (state: IGamepadsState): Vibrator[] {
      return state.gamepads;
    },
  },
  mutations: {
    addGamepad: function (state: IGamepadsState, gamepad: Vibrator): void {
      state.gamepads.push(gamepad);
    },
    deleteGamepad: function (state: IGamepadsState, index: number): void {
      state.gamepads.splice(index, 1);
    },
  },
  actions: {
    addGamepad: function (
      context: ActionContext<IGamepadsState, IRootState>,
      event: GamepadEvent,
    ): void {
      if (context.getters.gamepads.length >= 1) {
        return;
      } else {
        context.commit('addGamepad', new Vibrator(event.gamepad));
      }
    },
    deleteGamepad: function (
      context: ActionContext<IGamepadsState, IRootState>,
      event: GamepadEvent,
    ): void {
      context.getters.gamepads.forEach((gamepad: Vibrator, index: number) => {
        if (gamepad.device.id === event.gamepad.id) {
          context.commit('deleteGamepad', index);
        }
      });
    },
    loop: function (
      context: ActionContext<IGamepadsState, IRootState>,
      pattern: GamepadEffectParameters[],
    ): void {
      context.getters.gamepads.forEach((gamepad: Vibrator) => {
        gamepad.loop(pattern);
      });
    },
    vibrate: function (
      context: ActionContext<IGamepadsState, IRootState>,
      pattern: GamepadEffectParameters,
    ): void {
      context.getters.gamepads.forEach((gamepad: Vibrator) => {
        gamepad.vibrate(pattern);
      });
    },
    reset: function (context: ActionContext<IGamepadsState, IRootState>): void {
      context.getters.gamepads.forEach((gamepad: Vibrator) => {
        gamepad.reset();
      });
    },
  },
};

export default MGamepads;
