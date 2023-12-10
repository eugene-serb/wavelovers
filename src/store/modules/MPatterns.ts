import { PATH_TO_PATTERNS } from './MPatterns.const';

import type { ActionContext, Module } from 'vuex';
import type { IRootState, IPatternState } from '@/store/models';
import type { TPattern } from '@/models';

const MPatterns: Module<IPatternState, IRootState> = {
  state: () => ({
    patterns: [],
  }),
  getters: {
    patterns: function (state: IPatternState): TPattern[] {
      return state.patterns;
    },
  },
  mutations: {
    setPatterns: function (state: IPatternState, patterns: TPattern[]): void {
      state.patterns = patterns;
    },
  },
  actions: {
    loadPatterns: async function (
      context: ActionContext<IPatternState, IRootState>,
    ): Promise<void> {
      const url = PATH_TO_PATTERNS;

      try {
        const response: Response = await fetch(url);
        
        if (response.ok) {
          const patterns: TPattern[] = await response.json();
          context.commit('setPatterns', patterns);
        } else {
          // eslint-disable-next-line
          console.log('Connect to the Internet for download more patterns...');
        }
      } catch (error) {
        // eslint-disable-next-line
        console.log(error);
      }
    },
  },
};

export default MPatterns;
