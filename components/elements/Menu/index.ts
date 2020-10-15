import { Component, Provide, Watch, Vue } from 'nuxt-property-decorator'
// import { getters, RootState } from '~/store'
import MenuIsLink from '~/components/elements/MenuIsLink'
import Category from '~/components/elements/MenuCategory'

@Component({
  components: { MenuIsLink, Category }
})
export default class Menu extends Vue {
  @Provide() loading = true 
  @Provide() items = [] 

  // Computed
  get categories() {
	  // return (this.$store.state as RootState).things
	  return this.$accessor.app.categories || []
  }

  mounted() {
    // const name = this.$store.getters['name'] as ReturnType<typeof getters.name>
    // console.log('created')
    // this.$accessor.app.getCategories()
  }

  @Watch('categories')
  onCategoriesChanged(val: string, oldVal: string) {
    console.log('onCategoriesChanged')
  }

  created() {
    this.$accessor.app.getCategories()
  }

  fetch() {
    // console.log('fetch  ')
    // this.$accessor.app.getCategories()
  }

  getChildren(categories) {
    // if ()
    return MenuIsLink
  }

  toggleMenu() {
    // this.$accessor.app.toggleMenu();
  }
}
