<template>
  <v-card
    class="mr-5"
    :width="width"
  >
    <v-img
      class="white--text align-end"
      height="400px"
      :src="product.showcase_image_url"
    />

    <v-card-subtitle class="pb-0">
      <p>{{ product.code }}</p>
    </v-card-subtitle>

    <v-card-text class="text--primary text-h5 pb-0">
      <p style="min-height: 64px">{{ product.title }}</p>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="primary"
        text
        :to="product.slug"
      >
        Ver produto
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script language="ts" src="./index.ts">
</script>