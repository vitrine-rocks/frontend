import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex'
import { ProductCategory } from '~/models/types/productCategory'
import mockCategories from '~/assets/json/categories.json'

export const state = () => ({
  menuOpened: false,
  categories: [] = [] as ProductCategory[]
})

export const getters = getterTree(state, {
  // fullName: state => state.firstName + ' ' + state.lastName,
})

export type AppModuleState = ReturnType<typeof state>

export const mutations = mutationTree(state, {
  ADD_CATEGORIES(state, categories: ProductCategory[]) {
    state.categories = categories
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async getCategories({ commit }) {
      const developmentEnv = process.env.ENVIRONMENT
      let categories
      if (developmentEnv === 'mockdata') {
        categories = mockCategories
      } else {
        categories = await this.$axios.$get('https://nordserv-vitrine-backend-stg.herokuapp.com/portal/product_categories')
      }
      commit('ADD_CATEGORIES', categories.product_categories)
    }
  }
)