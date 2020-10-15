<template>
  <Loader v-if="!selectedProduct" />
  <div v-else class="site-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="border">
            <img
              :src="selectedProduct.previewImage"
              alt="Image"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="col-md-6">
          <h2 class="text-black">{{ selectedProduct.title }}</h2>
          <p>{{ selectedProduct.description }}</p>
          <p>
            <strong class="text-primary h4">{{
              selectedProduct.price | currencyFilter
            }}</strong>
            <del v-if="selectedProduct.isSale" style="margin-left: 15px">{{
              selectedProduct.salePrice | currencyFilter
            }}</del>
          </p>

          <div class="mb-1 d-flex">
            <label
              v-for="size in selectedProduct.sizes"
              :key="size"
              :for="size"
              class="d-flex mr-3 mb-3"
            >
              <span
                class="d-inline-block mr-2"
                style="top: -2px; position: relative"
                ><input
                  type="radio"
                  :id="size"
                  :value="size"
                  name="shop-sizes"
                  v-model="selectedSize"
              /></span>
              <span class="d-inline-block text-black">{{ size }}</span>
            </label>
          </div>

          <ProductCounter v-model.number="productCount" />

          <p>
            <button
              @click="addProductToCart"
              :disabled="!selectedSize"
              class="buy-now btn btn-sm height-auto px-4 py-3 btn-primary"
            >
              Добавить в корзину
            </button>
          </p>
        </div>
      </div>
    </div>
    <ProductSlider title="Другие товары" />
  </div>
</template>
<script>
import ProductSlider from "@/components/ProductsSlider";
import ProductCounter from "@/components/ProductCounter";
import Loader from "@/components/Loader";

export default {
  name: "Prouct-page",
  data: () => ({
    selectedProduct: null,
    selectedSize: null,
    productCount: 1,
  }),
  components: {
    ProductSlider,
    ProductCounter,
    Loader,
  },
  watch: {
    $route(val) {
      this.selectProduct();
    },
  },
  mounted() {
    this.selectProduct();
  },
  methods: {
    selectProduct() {
      this.selectedProduct = this.$store.getters.getProductById(
        this.$route.query.id
      );
      this.productCount = 1;
      this.selectedSize = null;  
      window.scrollTo( 0, 0 );
    },
    addProductToCart() {
      const productChars = {
        ...this.selectedProduct,
        size: this.selectedSize,
        count: this.productCount,
        isDone: false
      };
      this.$store.commit("setCartProducts", productChars);

      this.selectedSize = null;
      this.productCount = 1;
    },
  },
};
</script>