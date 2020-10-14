<template>
  <router-link :to="`/product?id=${id}`" class="item">
    <span v-if="isSale" class="tag">Sale</span>
    <img :src="previewImage" alt="Image" class="img-fluid" />
    <div class="item-info">
      <h3>{{ title }}</h3>
      <span class="collection d-block">Summer Collection</span>
      <strong class="price">
        {{ price | currencyFilter }}
        <del v-if="isSale">{{ salePrice | currencyFilter }}</del>
      </strong>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "Product",
  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    isSale: {
      type: Boolean,
      default: false,
    },
    salePrice: {
      type: Number,
      default: 0,
    },
    previewImage: {
      type: String,
      required: true,
    },
  },
};
</script>