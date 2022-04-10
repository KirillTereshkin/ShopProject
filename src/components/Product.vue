<template>
  <router-link :to="`/product?id=${id}`" class="item">
    <span v-if="isSale" class="tag">Скидка {{(100 - price/salePrice*100).toFixed(0)}} %</span>
    <img :src="previewImage" alt="Image" class="img-fluid preview-image" />
    <div class="item-info">
      <h3>{{ title }}</h3>
      <span class="collection d-block">{{ collection }}</span>
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
      type: String,
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
    collection: {
      type: String,
      default: "Всесезон",
    },
  },
};
</script>
<style scoped>
.item{
  height: 100% !important;
}
.preview-image {
  background-size: cover;
}
</style>