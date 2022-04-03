<template>
  <tr>
    <td class="product-thumbnail">
      <router-link :to="`product?id=${product.id}`"
        ><img :src="product.previewImage" alt="Image" class="img-fluid"
      /></router-link>
    </td>
    <td class="product-name">
      <h2 class="h5 text-black">{{ product.title }}</h2>
    </td>
    <td>{{ product.size }}</td>
    <td>
      {{ product.price | currencyFilter }}
      <br/>
      <span style="color: gray" v-if="product.isSale"
        >( Без учета скидки - {{ product.salePrice | currencyFilter }})</span
      >
    </td>
    <td>
      <ProductCounter class="td-quantity" v-model.number="productCount" />
    </td>
    <td>{{ (product.price * productCount) | currencyFilter }}</td>
    <td>
      <a
        @click.prevent="deleteProductFromCart"
        href="#"
        class="btn btn-primary height-auto btn-sm"
        >X</a
      >
    </td>
  </tr>
</template>
<script>
import ProductCounter from "@/components/ProductCounter";

export default {
  name: "cart-table-line",
  props: {
    product: {
      type: Object,
      required: true,
    },
    productIndex: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    productCount: 1,
  }),
  watch: {
    productCount(val) {
      this.$store.commit("setCartProductsCount", {
        productIndex: this.productIndex,
        productCount: val,
      });
    },
  },
  components: { ProductCounter },
  methods: {
    deleteProductFromCart() {
      this.$store.commit("deleteCartProduct", this.productIndex);
    },
  },
  mounted() {
    this.productCount = this.product.count;
  },
};
</script>