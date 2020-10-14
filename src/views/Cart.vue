<template>
  <div class="site-section">
    <div class="container">
        
      <div v-if="!$store.getters.getCartProducts.length">
        <p>Корзина пуста</p>
        <CartRedirectButton />
      </div>

      <div v-else>
        <CartTable />
        <div class="row">
          <CartRedirectButton />
          <CartTotal />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartTotal from "@/components/Cart/CartTotal";
import CartTable from "@/components/Cart/CartTable";
import CartRedirectButton from "@/components/Cart/CartRedirectButton";

export default {
  name: "cart",
  components: { CartTotal, CartTable, CartRedirectButton },
};
</script>