<template>
  <div class="site-section">
    <div class="container">
      <div class="row">
        <div class="title-section text-center col-12">
          <h2 class="text-uppercase">{{ title }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 block-3 products-wrap">
          <div class="nonloop-block-3 owl-carousel">
            <div
              v-for="(product, index) in products"
              :key="index"
              class="product"
              ref="carouselRef"
              :style="maxHeight ? { height: maxHeight + 'px' } : {}"
            >
              <Product v-bind="product" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Product from "@/components/Product";
import carouselScript from "@/jQuerryFunctions/carousel-script";

export default {
  name: "products-sldier",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    products: [],
    maxHeight: null,
  }),
  components: { Product },
  methods: {
    setCarousel() {
      setTimeout(carouselScript, 1);
    },
  },
  mounted() {
    this.products = this.$store.getters.getRandomProducts(6);
    this.setCarousel();
  },
};
</script>