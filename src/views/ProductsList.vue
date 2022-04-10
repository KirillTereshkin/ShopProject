<template>
  <div class="site-section">
    <div class="container">
      <AdminNavbar />
      <ProductList />
    </div>
  </div>
</template>
<script>
import ProductList from "@/components/Product/ProductList";
import AdminNavbar from "@/components/AdminNavbar";

export default {
  name: "admin-page",
  components: { ProductList, AdminNavbar },
};
</script>