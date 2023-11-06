import Vibrator from '@/models/Vibrator';

import type { ActionContext, Module } from 'vuex';
import type { IRootState, IGamepadsState } from '@/store/models';
import type { TPatternUnit, IGamepadEvent, IGamepad } from '@/models';

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
      event: GamepadEvent,
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
      event: GamepadEvent,
    ): void {
      context.getters.gamepads.forEach((gamepad: Vibrator, index: number) => {
        if (gamepad.unit.id === event.gamepad.id) {
          context.commit('deleteGamepad', index as number);
        }
      });
    },
    loop: function (
      context: ActionContext<IGamepadsState, IRootState>,
      pattern: TPatternUnit[],
    ): void {
      context.getters.gamepads.forEach((gamepad: Vibrator) => {
        gamepad.loop(pattern);
      });
    },
    vibrate: function (
      context: ActionContext<IGamepadsState, IRootState>,
      pattern: TPatternUnit,
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
