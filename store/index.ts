import { GetterTree, ActionTree, MutationTree } from 'vuex'

import { getAccessorType } from 'typed-vuex' // https://nuxt-typed-vuex.roe.dev/

// Import all your submodules
import * as app from '~/store/app'

// Keep your existing vanilla Vuex code for state, getters, mutations, actions, plugins, etc.
// ...

// This compiles to nothing and only serves to return the correct type of the accessor
export const accessorType = getAccessorType({
//   state,
//   getters,
//   mutations,
//   actions,
  modules: {
    app,
  },
})


// export type RootState = ReturnType<typeof state>