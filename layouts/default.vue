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