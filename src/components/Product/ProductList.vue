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
.save-button {
  position: absolute !important;
  left: 50% !important;
  transform: translateX(-50%);
  font-size: 20px;
}
.add-button {
  font-size: 20px;
  margin: 20px 0;
}
</style>