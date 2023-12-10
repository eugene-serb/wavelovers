import { createStore } from 'vuex';
import useGamepads from '@/store/useGamepads';
import patterns from '@/assets/patterns.json';

import type { ActionContext, Store } from 'vuex';
import type { IRootState } from '@/store/types';
import type { TPattern } from '@/models';

const store: Store<IRootState> = createStore({
  state: () => ({
    mode: 0,
    isActive: false,
    patterns: patterns,
  }),
  getters: {
    mode: function (state: IRootState): number {
      return state.mode;
    },
    isActive: function (state: IRootState): boolean {
      return state.isActive;
    },
    patterns: function (state: IRootState): TPattern[] {
      return state.patterns;
    },
  },
  mutations: {
    setMode: function (state: IRootState, mode: number): void {
      state.mode = mode;
    },
    setIsActive: function (state: IRootState, isActive: boolean): void {
      state.isActive = isActive;
    },
  },
  actions: {
    setMode: function (context: ActionContext<IRootState, IRootState>, index: number): void {
      context.commit('setMode', index);
    },
    setIsActive: function (
      context: ActionContext<IRootState, IRootState>,
      isActive: boolean,
    ): void {
      context.commit('setIsActive', isActive);
    },
    change: function (context: ActionContext<IRootState, IRootState>, index: number): void {
      if (context.getters.mode === index) {
        context.dispatch('setIsActive', !context.getters.isActive);
      } else {
        context.dispatch('setIsActive', true);
        context.dispatch('setMode', index);
      }

      if (context.getters.isActive) {
        context.dispatch('reset');
        context.dispatch('loop', context.getters.patterns[context.getters.mode].pattern);
      } else {
        context.dispatch('reset');
      }
    },
    startCustom: function (
      context: ActionContext<IRootState, IRootState>,
      pattern: GamepadEffectParameters[],
    ): void {
      context.dispatch('setIsActive', false);
      context.dispatch('setMode', 0);
      context.dispatch('reset');
      context.dispatch('loop', pattern);
    },
  },
  modules: {
    useGamepads,
  },
});

export default store;
