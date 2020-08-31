<template>
  <v-container>
    <v-card outlined>
      <v-row>
        <ul>
          <li v-for="productCategory in productCategories" :key="productCategory.id">
            {{ productCategory.name }}
            <ul>
              <li v-for="child in productCategory.productCategories" :key="child.id">
                {{ child.name }}
              </li>
            </ul>
          </li>
        </ul>
        <v-btn
          @click="add"
          fab
          color="primary"
          big
          bottom
          right
          fixed
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script language="ts" src="./index.ts">
</script>
