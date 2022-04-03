<template>
  <div class="row mb-5">
    <form class="col-md-12" method="post">
      <div class="site-blocks-table">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="product-thumbnail">Изображение</th>
              <th class="product-name">Товар</th>
              <th class="product-price">Размер</th>
              <th class="product-price">Цена</th>
              <th class="product-quantity">Количество</th>
              <th class="product-total">Итоговая цена</th>
              <th class="product-remove">Удалить</th>
            </tr>
          </thead>
          <tbody>
            <CartTableLine
              v-for="(product, index) in cartProducts"
              :key="index"
              :product="product"
              :productIndex="index"
            />
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>
<script>
import CartTableLine from "@/components/Cart/CartTableLine";

export default {
  name: "cart-table",
  data: () => ({
    cartProducts: [],
  }),
  components: { CartTableLine },
  mounted() {
    this.cartProducts = this.$store.getters.getCartProducts;
  },
};
</script>