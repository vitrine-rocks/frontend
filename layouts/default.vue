<template>
  <v-app light>
    <Header />
    <!-- Content section -->
    <v-main>
      <div
        v-for="category in categories"
        :key="category.id"
      >
        <MenuTest :category="category" />
      </div>
      
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Header from '~/components/shared/Header'
import MenuTest from '~/components/elements/MenuTest'


@Component({
  components: { Header, MenuTest },
})
export default class Default extends Vue {
  get categories() {
	  // return (this.$store.state as RootState).things
	  return this.$accessor.app.categories
  }
}
</script>