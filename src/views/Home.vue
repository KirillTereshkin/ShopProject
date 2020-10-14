<template>
  <main>
    <div class="site-blocks-cover" data-aos="fade">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 text-center">
            <div class="featured-hero-product w-100">
              <h1 class="mb-2">Madewell</h1>
              <h4>Summer Collection</h4>
              <div class="price mt-3 mb-5">
                <strong>1,499</strong>
                <del>$1,999</del>
              </div>
              <p>
                <router-link
                  :to="pages.collection.path"
                  class="btn btn-outline-primary rounded-0"
                  >коллекция</router-link
                >
                <router-link
                  :to="
                    pages.collection.path +
                    '?type=' +
                    pages.collection.subsections[1].path
                  "
                  class="btn btn-primary rounded-0"
                  >Женский отдел</router-link
                >
              </p>
            </div>
          </div>
          <div class="col-lg-7 align-self-end text-center text-lg-right">
            <img
              src="images/new/person_transparent.png"
              alt="Image"
              class="img-fluid img-1"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="products-wrap border-top-0">
      <div class="container-fluid">
        <div class="row no-gutters products">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="col-6 col-md-6 col-lg-4"
          >
            <Product v-bind="product" />
          </div>
        </div>
      </div>
    </div>

    <div class="site-blocks-cover inner-page py-5" data-aos="fade">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 ml-auto order-lg-2 align-self-start">
            <div class="site-block-cover-content">
              <h2 class="sub-title">#New Summer Collection 2019</h2>
              <h1>Jacket</h1>
              <p>
                <a href="#" class="btn btn-black rounded-0">Shop Now</a>
              </p>
            </div>
          </div>
          <div class="col-lg-8 order-1 align-self-end">
            <img src="images/model_woman_1.png" alt="Image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>

    <ProductSlider title="Популярные товары" />

    <div class="site-blocks-cover inner-page py-5" data-aos="fade">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 ml-auto order-lg-2 align-self-start">
            <div class="site-block-cover-content">
              <h2 class="sub-title">#New Summer Collection 2019</h2>
              <h1>New Denim Coat</h1>
              <p>
                <a href="#" class="btn btn-black rounded-0">Shop Now</a>
              </p>
            </div>
          </div>
          <div class="col-lg-6 order-1 align-self-end">
            <img src="images/model_5.png" alt="Image" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import Product from "@/components/Product";
import ProductSlider from "@/components/ProductsSlider";
import { pages } from "@/router/pages";

export default {
  data: () => ({
    products: [],
    pages,
  }),
  components: {
    Product,
    ProductSlider,
  },
  mounted(){
    this.products = this.$store.getters.getRandomProducts(6)
  }
};
</script>