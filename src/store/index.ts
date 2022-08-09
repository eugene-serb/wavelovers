import { createStore, Store } from 'vuex';
import IRootState from './models/IRootState';
import MGamepads from '@/store/modules/MGamepads';
import MPatterns from '@/store/modules/MPatterns';
import TPatternUnit from '../models/TPatternUnit';

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
        setMode: function (context, index: number): void {
            context.commit('setMode', index as number);
        },
        setIsActive: function (context, isActive: boolean): void {
            context.commit('setIsActive', isActive as boolean);
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
                context.dispatch(
                    'vibrate',
                    context.getters.patterns[context.getters.mode].pattern
                );
            } else {
                context.dispatch('reset');
            }
        },
        startCustom: function (context, pattern: TPatternUnit[]): void {
            context.dispatch('setIsActive', false);
            context.dispatch('setMode', 0);
            context.dispatch('reset');
            context.dispatch('vibrate', pattern);
        },
    },
    modules: {
        MGamepads: MGamepads,
        MPatterns: MPatterns,
    },
});

export default store;

