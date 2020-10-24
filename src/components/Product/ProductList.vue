<template>
  <div>
    <router-link
      to="/edit-product"
      class="add-button btn btn-primary height-auto"
    >
      Добавить товар
    </router-link>

    <ProductTable />
  </div>
</template>
<script>
import ProductTable from "@/components/Product/ProductTable";

export default {
  name: "product-list",
  components: { ProductTable },
};
</script>
<style scoped>
.add-button {
  font-size: 1rem;
  margin: 20px 0;
  text-align: center;
}
</style>
