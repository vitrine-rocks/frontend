import { Component, Provide, Vue } from 'nuxt-property-decorator'
// import { getters, RootState } from '~/store'

@Component
export default class Menu extends Vue {
	@Provide() items = [
    { 
      title: 'Áreas classificadas',
      children: [
        { title: 'Botoeiras 1' },
        { title: 'Botoeiras 2' },
      ]
    },
    { 
      title: 'Linha de transmissão',
      children: [
        { title: 'Amortecedores' }
      ] 
    },
    { title: 'Rede de distribuição', children: [] }
  ]

  // $accessor;
  get menuOpened() {
	  // return (this.$store.state as RootState).things
	  return this.$accessor.app.menuOpened
  }

  mounted() {
	  // const name = this.$store.getters['name'] as ReturnType<typeof getters.name>
  }

  toggleMenu() {
    this.$accessor.app.toggleMenu();
  }
}
