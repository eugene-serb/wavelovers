import { createStore } from 'vuex';
import MGamepads from '@/store/modules/MGamepads';
import MPatterns from '@/store/modules/MPatterns';

import type { ActionContext, Store } from 'vuex';
import type { IRootState } from '@/store/models';

const store: Store<IRootState> = createStore({
  state: () => ({
    mode: 0,
    isActive: false,
  }),
  getters: {
    mode: function (state: IRootState): number {
      return state.mode;
    },
    isActive: function (state: IRootState): boolean {
      return state.isActive;
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
    MGamepads,
    MPatterns,
  },
});

export default store;
