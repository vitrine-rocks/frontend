<template>
  <v-menu offset-y :close-on-content-click="false">
    <template v-slot:activator="{ on }">
      <v-app-bar-nav-icon v-on="on" />
    </template>
    <v-list v-if="categories">
      <div 
        v-for="category in categories"
        :key="category.id"
      >
        <v-list-group
          v-if="category.product_categories.length"
          no-action
        >
          <template v-slot:activator>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ category.description }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <nuxt-link
            v-for="subcategory in category.product_categories"
            :key="subcategory.id"
            :to="subcategory.slug"
          >
            <v-list-item class="pl-12">
              <v-list-item-title>{{ subcategory.description }}</v-list-item-title>
            </v-list-item>
          </nuxt-link>
          
        </v-list-group>
        <v-list-item v-else>
          <v-list-item-title>{{ category.description }}</v-list-item-title>
        </v-list-item>
      </div>
    </v-list>
    <div v-else class="white pa-2">
      <p class="mb-0">Carregando...</p>
    </div>
  </v-menu>
</template>

<script language="ts" src="./index.ts">
</script>