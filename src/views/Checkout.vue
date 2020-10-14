<template>
  <div class="site-section">
    <div class="container">
      <div class="row">
        <CheckoutBillingInfo />
        <CheckoutOrderInfo />
      </div>
    </div>
  </div>
</template>
<script>
import CheckoutOrderInfo from "@/components/Checkout/CheckoutOrderInfo";
import CheckoutBillingInfo from "@/components/Checkout/CheckoutBillingInfo";

export default {
  name: "checkout",
  components: { CheckoutOrderInfo, CheckoutBillingInfo },
  mounted() {
    if (!this.$store.getters.getCartProducts.length) this.$router.push("/");
  },
};
</script>