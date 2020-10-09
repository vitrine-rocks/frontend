import { Component, Provide, Watch, Vue } from 'nuxt-property-decorator'
// import { getters, RootState } from '~/store'

@Component
export default class Menu extends Vue {
  @Provide() loading = true 
  @Provide() items = [] 
	// @Provide() items = [
  //   { 
  //     title: 'Áreas classificadas',
  //     children: [
  //       { title: 'Botoeiras 1' },
  //       { title: 'Botoeiras 2' },
  //     ]
  //   },
  //   { 
  //     title: 'Linha de transmissão',
  //     children: [
  //       { title: 'Amortecedores' }
  //     ] 
  //   },
  //   { title: 'Rede de distribuição', children: [] }
  // ]

  // $accessor;
  // get menuOpened() {
	//   // return (this.$store.state as RootState).things
	//   return this.$accessor.app.menuOpened
  // }

  get categories() {
	  // return (this.$store.state as RootState).things
	  return this.$accessor.app.categories
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

  toggleMenu() {
    // this.$accessor.app.toggleMenu();
  }
}
