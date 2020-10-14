<template>
  <div class="col-md-6 pl-5">
    <div class="row justify-content-end">
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-12 text-right border-bottom mb-5">
            <h3 class="text-black h4 text-uppercase">Итого</h3>
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-md-6">
            <span class="text-black">Сумма заказа</span>
          </div>
          <div class="col-md-6 text-right">
            <strong class="text-black">{{
              totalPrice.priceWithoutSale | currencyFilter
            }}</strong>
          </div>
        </div>

        <div class="row mb-5" v-if="totalPrice.priceWithSale !== totalPrice.priceWithoutSale">
          <div class="col-md-6">
            <span class="text-black">Сумма заказа с учетом скидки</span>
          </div>
          <div class="col-md-6 text-right">
            <strong class="text-black">{{
              totalPrice.priceWithSale | currencyFilter
            }}</strong>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <button
              class="btn btn-primary btn-lg btn-block"
              @click="$router.push('/checkout')"
            >
              Продолжить оформление заказа
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cart-total",
  computed: {
    totalPrice() {
      return this.$store.getters.getCartProductsTotalSum;
    },
  },
};
</script>