import { createStore } from 'vuex';
import MGamepads from '@/store/modules/MGamepads';
import MPatterns from '@/store/modules/MPatterns';

import type { ActionContext, Store } from 'vuex';
import type { IRootState } from '@/store/models';
import type { TPatternUnit } from '@/models';

const store: Store<IRootState> = createStore({
  state: () => ({
    mode: 0 as number,
    isActive: false as boolean,
  }),
  getters: {
    mode: function (state: IRootState): number {
      return state.mode as number;
    },
    isActive: function (state: IRootState): boolean {
      return state.isActive as boolean;
    },
  },
  mutations: {
    setMode: function (state: IRootState, mode: number): void {
      state.mode = mode as number;
    },
    setIsActive: function (state: IRootState, isActive: boolean): void {
      state.isActive = isActive as boolean;
    },
  },
  actions: {
    setMode: function (context: ActionContext<IRootState, IRootState>, index: number): void {
      context.commit('setMode', index as number);
    },
    setIsActive: function (
      context: ActionContext<IRootState, IRootState>,
      isActive: boolean,
    ): void {
      context.commit('setIsActive', isActive as boolean);
    },
    change: function (context: ActionContext<IRootState, IRootState>, index: number): void {
      if (context.getters.mode === index) {
        context.dispatch('setIsActive', !context.getters.isActive);
      } else {
        context.dispatch('setIsActive', true);
        context.dispatch('setMode', index);
      }
      if (context.getters.isActive === true) {
        context.dispatch('reset');
        context.dispatch('loop', context.getters.patterns[context.getters.mode].pattern);
      } else {
        context.dispatch('reset');
      }
    },
    startCustom: function (
      context: ActionContext<IRootState, IRootState>,
      pattern: TPatternUnit[],
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
