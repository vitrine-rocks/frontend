// import Vue from 'vue';
// import Vuex from 'vuex';
// // import ToDoModel from './models/ToDoModel';

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     menuOpened: false
//   },

//   mutations: {
//     toggleMenu(state) {
//       const currentMenuState = state.menuOpened
//       state.menuOpened = !currentMenuState;
//     }
//   },
//   actions: {
//     // toggleMenu(context, value: Boolean) {
//     //   context.commit('toggleMenu', value);
//     // }
//     toggleMenu(context) {
//       context.commit('toggleMenu');
//     }
//   }
// });

import { GetterTree, ActionTree, MutationTree } from 'vuex'
// import { RootState } from '~/store'

export const state = () => ({
  menuOpened: false
})

export type AppModuleState = ReturnType<typeof state>

export const mutations: MutationTree<AppModuleState> = {
  TOGGLE_MENU: (state) => (state.menuOpened = !state.menuOpened),
}

export const actions: ActionTree<AppModuleState, AppModuleState> = {
  toggleMenu({ commit }) {
    // console.log('accessing rootState:', rootState.name)
    // const currentMenuState = state.menuOpened
    // state.menuOpened = !currentMenuState;
    commit('TOGGLE_MENU')
  },
}
