import { Component, Provide, Watch, Vue } from 'nuxt-property-decorator'
import Highlight from '~/components/elements/Highlight'

@Component({
  components: { Highlight }
})
export default class Highlights extends Vue {
  // Data (for future reference)
  // @Provide() menuOpened = false 

  // Computed (for future reference)
  get highlights() {
	  // return (this.$store.state as RootState).things
	  return this.$accessor.app.highlights || []
  }

  created() {
    this.$accessor.app.getHighlights()
  }

  mounted() {
    // on.click()
  }

  // Method (for future reference)
  toggleMenu() {
    // this.$accessor.app.toggleMenu();
  }
}
