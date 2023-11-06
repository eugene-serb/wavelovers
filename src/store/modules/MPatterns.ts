import type { ActionContext, Module } from 'vuex';
import type { IRootState, IPatternState } from '@/store/models';
import type { TPattern } from '@/models';

const MPatterns: Module<IPatternState, IRootState> = {
  state: () => ({
    patterns: [] as TPattern[],
  }),
  getters: {
    patterns: function (state: IPatternState): TPattern[] {
      return state.patterns as TPattern[];
    },
  },
  mutations: {
    setPatterns: function (state: IPatternState, patterns: TPattern[]): void {
      state.patterns = patterns as TPattern[];
    },
  },
  actions: {
    loadPatterns: async function (
      context: ActionContext<IPatternState, IRootState>,
    ): Promise<void> {
      const url = 'https://wavelovers.ru/assets/patterns.json';
      try {
        const response: Response = await fetch(url);
        if (response.ok) {
          const json: TPattern[] = await response.json();
          context.commit('setPatterns', json as TPattern[]);
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
