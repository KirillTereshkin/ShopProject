<template>
  <div class="col-md-6">
    <div class="row mb-5">
      <div class="col-md-12">
        <h2 class="h3 mb-3 text-black">Детали заказа</h2>
        <div class="p-3 p-lg-5 border">
          <table class="table site-block-order-table mb-5">
            <thead>
              <th>Товар</th>
              <th>Итог</th>
            </thead>
            <tbody v-if="cartProducts">
              
              <tr v-for="(product, index) in cartProducts" :key="index">
                <td>{{product.title}} <strong class="mx-2">x</strong> {{product.count}}</td>
                <td>{{product.count * product.price | currencyFilter}}</td>
              </tr>

              <tr>
                <td class="text-black font-weight-bold">
                  <strong>Сумма заказа</strong>
                </td>
                <td class="text-black">{{totalSum.priceWithoutSale | currencyFilter}}</td>
              </tr>

              <tr v-if="totalSum.priceWithoutSale!==totalSum.priceWithSale">
                <td class="text-black font-weight-bold">
                  <strong>Сумма заказа с учетом скидки</strong>
                </td>
                <td class="text-black font-weight-bold">
                  <strong>{{totalSum.priceWithSale | currencyFilter}}</strong>
                </td>
              </tr>
            </tbody>
          </table>

          <div class="form-group">
            <button
              class="btn btn-primary btn-lg btn-block"
              @click="$router.push('/thankyou')"
            >
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "checkout-order-info",
  data: () => ({
    cartProducts: null,
    totalSum: null,
  }),
  mounted() {
    this.cartProducts = this.$store.getters.getCartProducts;
    this.totalSum = this.$store.getters.getCartProductsTotalSum;
  },
};
</script>