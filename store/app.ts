import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex'
import { ProductCategory } from '~/models/types/productCategory'
import { Product } from '~/models/types/product'
import mockCategories from '~/assets/json/categories.json'
import mockHighlights from '~/assets/json/highlights.json'

export const state = () => ({
  menuOpened: false,
  categories: [] = [] as ProductCategory[],
  highlights: [] = [] as Product[]
})

export const getters = getterTree(state, {
  // fullName: state => state.firstName + ' ' + state.lastName,
})

export type AppModuleState = ReturnType<typeof state>

export const mutations = mutationTree(state, {
  ADD_CATEGORIES(state, categories: ProductCategory[]) {
    state.categories = categories
  },
  ADD_HIGHLIGHTS(state, highlights: Product[]) {
    state.highlights = highlights
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async getCategories({ commit }) {
      const axios = this.$axios
      const categories = await getData(axios, 'product_categories', mockCategories)
      commit('ADD_CATEGORIES', categories.product_categories)
    },
    async getHighlights({ commit }) {
      const axios = this.$axios
      const highlights = await getData(axios, 'showcases', mockHighlights)
      commit('ADD_HIGHLIGHTS', highlights.products)
    }
  }
)

const getData = async (axios, endpoint, mockData) => {
  const developmentEnv = process.env.ENVIRONMENT
  const url = 'https://nordserv-vitrine-backend-stg.herokuapp.com/portal/'
  let data
  if (developmentEnv === 'mockdata') {
    data = mockData
  } else {
    data = await axios.$get(`${url}${endpoint}`)
  }
  return data
}