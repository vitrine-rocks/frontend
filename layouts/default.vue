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
import Vue from 'vue'
import Header from '~/components/shared/Header'

export default Vue.extend({
  components: {
    Header
  }
})
</script>