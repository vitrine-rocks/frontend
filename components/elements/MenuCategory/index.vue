<template>
  <v-list
    v-if="product_categories.length"
    class="category"
  >
    <div
      v-for="product_category in product_categories"
      :key="product_category.id"
      :style="{ paddingLeft: `${index ? '10px' : ''}` }"
    >
      <!-- If category has children, load a new <category /> -->
      <v-list-group
        no-action
        @click.stop.prevent
        v-if="product_category.product_categories.length > 0"
      >
        product_category.product_categories: {{ product_category.product_categories }}
        product_category.product_categories.length: {{ product_category.product_categories.length }}
        <!-- <category
          :product_categories="product_category.product_categories"
          :index="index + 10"
        /> -->
        <category
          :product_categories="[{'id': 'cdbcff07-25ef-4e6b-871e-0071c9ac64df','description': 'Botoeiras','slug': 'botoeiras','product_categories': []},{'id': '712b89eb-a5f1-4249-bc27-b55faf6c2093','description': 'Caixas de passagem','slug': 'caixas-de-passagem','product_categories': []}]"
          :index="index + 10"
        />
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="product_category.description"></v-list-item-title>
          </v-list-item-content>
        </template>
      </v-list-group> 
      <!-- If category has no children, load a link to product page -->
      <nuxt-link
        v-else
        :to="product_category.slug"
        class="category--link"
      >
        <v-list-item>        
          <v-list-item-title>{{ product_category.description }}</v-list-item-title>
        </v-list-item>
      </nuxt-link>
    </div>
  </v-list>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'nuxt-property-decorator'
@Component({
  components: { category }
})
export default class category extends Vue {
  @Prop()
  product_categories!: object
  @Prop()
  index!: number
}
</script>

<style scoped>
  .category--link {
    text-decoration: none;
  }
  .category--link :hover {
    background-color: #f6f6f6;
  }
</style>