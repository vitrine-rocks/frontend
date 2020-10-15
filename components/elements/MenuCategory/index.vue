<template>
  <v-list v-if="product_categories.length" :style="{ marginLeft: `${index}px` }">
    <v-list-group
      no-action
      @click.stop.prevent
      v-for="product_category in product_categories"
      :key="product_category.id"
    >
      <div v-if="product_category.product_categories.length > 0">
        <category 
          :product_categories="product_category.product_categories"
          :index="index + 10"
        />
      </div>
      <template v-slot:activator>
        <v-list-item-content>
          <v-list-item-title v-text="product_category.description"></v-list-item-title>
        </v-list-item-content>
      </template>
    </v-list-group>
  </v-list>
</template>

<script>
export default {
  name: 'category',
  props: {
    product_categories: {
      required: true
    },
    index: {
      required: true
    }
  }
}
</script>

<style>

</style>