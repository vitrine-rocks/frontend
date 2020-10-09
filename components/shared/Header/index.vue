<template>
  <!-- Main Navigation section -->
  <v-app-bar
    id="main-app-bar"
    app
    flat
    color="primary"
    underline="true"
  >
    <Menu />

    <nuxt-link to="/" alt="Nordserv logo">
      <v-img
        :src="require('~/assets/images/logo.png')"
        class="ml-2"
        responsive
      />
    </nuxt-link>

    <v-spacer></v-spacer>

    <nuxt-link to="/" alt="Nordserv logo">
      Link 2
    </nuxt-link>
    <nuxt-link to="/" alt="Nordserv logo">
      Link 3
    </nuxt-link>


    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script language="ts" src="./index.ts">
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