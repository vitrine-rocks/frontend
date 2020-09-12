<template>
  <v-app light>
    <v-container>
      <v-app-bar
        dense
        light
        flat
        color="primary"
      >
        <v-app-bar-nav-icon />

        <v-img
          :src="require('~/assets/logo.png')"
          class="ml-2"
          max-width="40"
          max-height="20"
        />

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
      <nuxt />
    </v-container>
  </v-app>
</template>
