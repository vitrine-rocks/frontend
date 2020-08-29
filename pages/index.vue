<template>
  <v-container>
    <v-card outlined>
      <v-row
        v-for="productCategory in productCategories"
        :key="productCategory.id"
        justify="center" class="mt-2"
      >
      {{ productCategory.name }}
      </v-row>
      <v-row class="mt-2">
        <v-text-field
          v-model="productCategory.name"
          name="name"
          label="Categoria do produto"
          required
        />
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
