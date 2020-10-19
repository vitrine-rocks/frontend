<template>
  <v-app light>
    <Header />
    <!-- Content section -->
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Header from '~/components/shared/Header'

@Component({
  components: { Header },
})
export default class Default extends Vue {}
</script>

<style scoped>
  .theme--dark #main-app-bar, .theme--light #main-app-bar {
    border-width: 0 0 thin;
    border-style: solid;
  }

  .theme--dark #main-app-bar.theme--light, .theme--light #main-app-bar.theme--light {
    border-bottom-color: #0000001f !important;
  }
</style>
