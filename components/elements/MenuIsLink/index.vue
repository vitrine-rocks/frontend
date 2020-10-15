<template>
  <category v-bind:category="category"></category>
  
</template>

<script lang="ts">
import { Component, Provide, Prop, Vue } from 'nuxt-property-decorator'
import Category from '~/components/elements/MenuCategory'

@Component({
  components: { Category },
})
export default class Menu extends Vue {
  @Prop()
  category: object = {}
}
</script>

<style>

</style>