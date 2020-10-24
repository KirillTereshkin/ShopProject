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
    <td>{{ product.sizes.join(", ") }}</td>
    <td>
      {{ product.price | currencyFilter }}
      <br />
      <span style="color: gray" v-if="product.isSale"
        >( Без учета скидки - {{ product.salePrice | currencyFilter }})</span
      >
    </td>
    <td>
      <router-link
        :to="'/edit-product?id=' + product.id"
        class="btn btn-primary height-auto btn-sm"
        title="Редактировать"
        ><span class="material-icons"> edit </span></router-link
      >
    </td>
    <td>
      <a
        @click.prevent="deleteProduct(product.id)"
        href="#"
        class="btn btn-primary height-auto btn-sm"
        title="Удалить"
        ><span class="material-icons"> delete </span></a
      >
    </td>
  </tr>
</template>
<script>
import ProductCounter from "@/components/ProductCounter";
import getToastMessage from "@/toast/toast-messages";

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
  methods: {
    async deleteProduct(productId) {
      try {
        await this.$store.dispatch("deleteProduct", productId);
        this.$toasted.success(getToastMessage("successDelete"));
      } catch (e) {
        this.$toasted.success(getToastMessage(e.code));
      }
    },
  },
  mounted() {},
};
</script>
