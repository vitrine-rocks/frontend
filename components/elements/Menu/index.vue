<template>
  <v-menu offset-y :close-on-content-click="true">
    <template v-slot:activator="{ on }">
      <v-app-bar-nav-icon v-on="on" />
    </template>
    <div v-if="categories.length">
      <category
        :product_categories="categories"
        :index="0"
      />
    </div>
    <div v-else class="white pa-2">
      <p class="mb-0">Carregando...</p>
    </div>
  </v-menu>
</template>

<script language="ts" src="./index.ts">
</script>