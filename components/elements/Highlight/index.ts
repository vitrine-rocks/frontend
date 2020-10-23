import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Highlight extends Vue {
  @Prop() product!: object

  // Computed (for future reference)
  get width() {
	  switch (this.$vuetify.breakpoint.name) {
      case 'xs': return 400
      case 'sm': return 200
      case 'md': return 300
      case 'lg': return 400
      case 'xl': return 400
    }
  }

  mounted() {
    // on.click()
  }

}
