<template>
  <Loader v-if="!products" />
  <div v-else class="collection">
    <div class="site-section">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-9 order-2 order-lg-1">
            <div class="row align">
              <div class="col-md-12 mb-5">
                <div class="float-md-left">
                  <h2 class="text-black h5">Коллекция</h2>
                </div>
                <div class="d-flex">
                  <div class="dropdown mr-1 ml-md-auto"></div>
                  <CollectionSortByProperties
                    :products="products"
                    @on-sort="products = $event"
                  />
                </div>
              </div>
            </div>
            <div class="row mb-5">
              <div class="products-wrap border-top-0">
                <div class="container-fluid">
                  <p v-if="!filteredProducts.length">Товары не найдены</p>
                  <div v-else class="row no-gutters products">
                    <div
                      v-for="(product, index) in filteredProducts"
                      :key="index"
                      class="col-6 col-md-6 col-lg-6 border-top"
                    >
                      <Product v-bind="product" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Pagination
              :itemsNumber="products.length"
              :maxItemsOnPage="maxItemsOnPage"
              @set-current-page="currentPage = $event"
            />
          </div>

          <div class="col-lg-3 order-1 order-lg-2 mb-5 mb-lg-0">
            <CollectionSortByCategory />

            <div class="border p-4 mb-4">
              <CollectionSortByPrice :products="products" />

              <CollectionSortBySize :products="products" />

              <CollectionSortByColor />

              <button class="btn btn-sm btn-primary" @click="resetFilters">
                Сбросить фильтры
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ProductSlider title="рекомендованные товары" />
  </div>
</template>
<script>
import { pages } from "@/router/pages";
import Product from "@/components/Product";
import ProductSlider from "@/components/ProductsSlider";
import Pagination from "@/components/Pagination.vue";
import Loader from "@/components/Loader";
import CollectionSortByProperties from "@/components/CollectionFilters/CollectionSortByProperties";
import CollectionSortByPrice from "@/components/CollectionFilters/CollectionSortByPrice";
import CollectionSortByColor from "@/components/CollectionFilters/CollectionSortByColor";
import CollectionSortByCategory from "@/components/CollectionFilters/CollectionSortByCategory";
import CollectionSortBySize from "@/components/CollectionFilters/CollectionSortBySize";

export default {
  name: "collection",
  data: () => ({
    products: null,
    pages,
    maxItemsOnPage: 4,
  }),
  computed: {
    filteredProducts() {
      const { query } = this.$route;

      let products = this.products.filter((item) => {
        let isValid = !query.type || item.type === query.type;
        if (query.minPrice) isValid = isValid && item.price >= query.minPrice;
        if (query.maxPrice) isValid = isValid && item.price <= query.maxPrice;
        if (query.size)
          isValid =
            isValid && item.sizes.some((size) => query.size.includes(size));
        return isValid;
      });

      const page = query.page ? query.page - 1 : 0;

      products = products.slice(
        page * this.maxItemsOnPage,
        (page + 1) * this.maxItemsOnPage
      );

      return products;
    },
  },
  components: {
    Product,
    CollectionSortByCategory,
    CollectionSortByProperties,
    CollectionSortByPrice,
    CollectionSortBySize,
    CollectionSortByColor,
    ProductSlider,
    Pagination,
    Loader,
  },
  methods: {
    resetFilters() {
      this.$router.push({ query: {} });
    },
  },
  mounted() {
    this.products = this.$store.getters.getProducts;
  },
};
</script>
<style lang="scss">
.collection-active-link {
  &-exact {
    border-color: #207dff !important;
  }

  &:hover {
    border-color: #8c92a0 !important;
  }

  border-color: transparent !important;
  border: 1px solid;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 5px;
}
</style>