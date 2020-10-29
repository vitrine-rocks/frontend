<template>
  <section class="d-flex flex-wrap justify-center">
    <div
      v-for="product in highlights"
      :key="product.id"
      >
        <Highlight
          :product="product"
        />
      </div>
  </section>
</template>

<script language="ts" src="./index.ts">
</script>