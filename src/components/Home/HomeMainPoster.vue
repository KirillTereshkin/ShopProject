<template>
  <div class="site-blocks-cover" data-aos="fade" v-if="posterProduct">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 text-center">
          <div class="featured-hero-product w-100">
            <h1 class="mb-2">{{ posterProduct.title }}</h1>
            <h4>{{ posterProduct.collection }}</h4>
            <div class="price mt-3 mb-5">
              <strong>{{ posterProduct.price | currencyFilter }}</strong>
              <del v-if="posterProduct.isSale">{{
                posterProduct.salePrice | currencyFilter
              }}</del>
            </div>
            <p>
              <router-link
                :to="pages.collection.path"
                class="btn btn-outline-primary rounded-0"
                >коллекция</router-link
              >
              <router-link
                :to="`/collection?type=${posterProduct.type}`"
                class="btn btn-primary rounded-0"
                >{{ collectionTitle }}</router-link
              >
            </p>
          </div>
        </div>
        <div class="col-lg-7 align-self-end text-center text-lg-right">
          <img
            :src="posterProduct.previewImage"
            alt="Image"
            class="img-fluid img-1"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { pages } from "@/router/pages";

export default {
  name: "home-main-poster",
  data: () => ({ posterProduct: null, collectionTitle: "", pages }),
  mounted() {
    this.posterProduct = this.$store.getters.getRandomProducts(1)[0];
    this.collectionTitle =
      (this.posterProduct.type === "man"
        ? "мужской"
        : this.posterProduct.type === "women"
        ? "женский"
        : "детский") + " отдел";
  },
};
</script>