// import Vue from 'vue';
// import Vuex from 'vuex';
// // import ToDoModel from './models/ToDoModel';
import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex'


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
  menuOpened: false,
  // categories: [] = ['']
  categories: ''
})

export const getters = getterTree(state, {
  // fullName: state => state.firstName + ' ' + state.lastName,
})

export type AppModuleState = ReturnType<typeof state>

// export const mutations: MutationTree<AppModuleState> = {
//   TOGGLE_MENU: (state) => (state.menuOpened = !state.menuOpened),
//   // ADD_CATEGORIES: (state, categories) => (state.categories = categories),
//   ADD_CATEGORIES: (state, categories) => {
//     console.log('categories ADD_CATEGORIES: ', categories)
//     return state.categories = categories
//   }
// }

export const mutations = mutationTree(state, {
  ADD_CATEGORIES(state, categories: any) {
    // console.log('categories ADD_CATEGORIES: ', categories)
    state.categories = categories
    // state.categories = 'blaaaaa'
  },
})

// export const actions: ActionTree<AppModuleState, AppModuleState> = {
//   toggleMenu({ commit }) {
//     // console.log('accessing rootState:', rootState.name)
//     // const currentMenuState = state.menuOpened
//     // state.menuOpened = !currentMenuState;
//     commit('TOGGLE_MENU')
//   },
//   async getCategories({ commit }) {
//     const ip = await this.$axios.$get('http://icanhazip.com')
//     console.log('ip: ', ip)    
//     return { ip }
//   }
// }

export const actions = actionTree(
  { state, getters, mutations },
  {
    // toggleMenu({ commit }) {
    //   // console.log('accessing rootState:', rootState.name)
    //   // const currentMenuState = state.menuOpened
    //   // state.menuOpened = !currentMenuState;
    //   commit('TOGGLE_MENU')
    // },
    async getCategories({ commit }) {
      // console.log('getCategories: ')
      // this.$axios.$get('https://nordserv-vitrine-backend-stg.herokuapp.com/portal/product_categories')
      //   .then(res => {
      //     console.log('res: ', res)          
      //   })
      //   .catch(err => {
      //   console.log('err: ', err)          
      //   })
      console.log('getCategories')
      // const categories = await this.$axios.$get('http://icanhazip.com')
      const categories = await this.$axios.$get('https://nordserv-vitrine-backend-stg.herokuapp.com/portal/product_categories')
      commit('ADD_CATEGORIES', categories.product_categories)
      // commit('ADD_CATEGORIES', 'bla')
      // console.log('ip: ', ip)    
      // return { ip } as const
    }
  }
)