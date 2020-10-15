import { Component, Provide, Watch, Vue } from 'nuxt-property-decorator'
// import { getters, RootState } from '~/store'
import Category from '~/components/elements/MenuCategory'

@Component({
  components: { Category }
})
export default class Menu extends Vue {
  // Data (for future reference)
  @Provide() loading = true 
  @Provide() items = [] 

  // Computed (for future reference)
  get categories() {
	  // return (this.$store.state as RootState).things
	  return this.$accessor.app.categories || []
  }

  // Watch (for future reference)
  @Watch('categories')
  onCategoriesChanged(val: string, oldVal: string) {
    console.log('onCategoriesChanged')
  }

  created() {
    this.$accessor.app.getCategories()
  }

  // Method (for future reference)
  toggleMenu() {
    // this.$accessor.app.toggleMenu();
  }
}
