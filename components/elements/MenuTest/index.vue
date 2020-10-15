<template>
  <ul class="folders">
    <li>Folders</li>
    <category v-bind:category="category"></category>
    <!-- {{category}} -->
  </ul>
</template>

<script>
import Category from '~/components/elements/MenuCategory'
export default {
  name: 'root',
  props: {
    category: Object
  },
  components: {
    Category
  }
}
</script>

<style>

</style>