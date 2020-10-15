<template>
  <div class="site-section">
    <div class="container">
      <AdminNavbar />
      <div v-if="orders">
        <OrderItem v-for="item in Object.entries(orders)" :key="item[0]" :id="item[0]" :order-info="item[1]"/>
      </div>
    </div>
  </div>
</template>
<script>
import OrderItem from "@/components/Orders/OrderItem";
import AdminNavbar from "@/components/AdminNavbar";

export default {
  name: "orders-page",
  computed: {
    orders() {
      return this.$store.getters.getOrders;
    },
  },
  components: { OrderItem, AdminNavbar },
  async mounted() {
    await this.$store.dispatch("fetchOrders");
  },
};
</script>