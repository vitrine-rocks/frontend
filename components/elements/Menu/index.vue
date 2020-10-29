<template>
  <v-menu offset-y :close-on-content-click="true" :close-on-click="true" v-model="menuOpened">
    <template v-slot:activator="{ on }">
      <v-app-bar-nav-icon v-on="on" />
    </template>
    <div v-if="categories.length && menuOpened">
      <Category
        :product_categories="categories"
        :index="0"
      />
    </div>
    <div v-else-if="categories.length" />
    <div v-else class="white pa-2">
      <p class="mb-0">Carregando...</p>
    </div>
  </v-menu>
</template>

<script language="ts" src="./index.ts">
</script>