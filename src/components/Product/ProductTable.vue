<template>
  <div class="row mb-5">
    <form class="col-md-12" method="post">
      <div class="site-blocks-table">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th class="product-thumbnail">Изображение</th>
              <th class="product-name">Наименование</th>
              <th class="product-price">Размер</th>
              <th class="product-price">Цена</th>
              <th class="product-price">Редактировать</th>
              <th class="product-remove">Удалить</th>
            </tr>
          </thead>
          <tbody>
            <ProductTableLine
              v-for="(product, index) in pagedProducts"
              :key="index"
              :product="product"
              :productIndex="index"
            />
          </tbody>
        </table>
      </div>
      <Pagination
        :itemsNumber="products.length"
        :maxItemsOnPage="maxItemsOnPage"
        @set-current-page="currentPage = $event"
      />
    </form>
  </div>
</template>
<script>
import ProductTableLine from "@/components/Product/ProductTableLine.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "product-table",
  data: () => ({
    currentPage: 1,
    maxItemsOnPage: 15,
  }),
  computed: {
    products() {
      return this.$store.getters.getProducts || [];
    },
    pagedProducts() {
      const page = this.$route.query.page ? this.$route.query.page - 1 : 0;
      return this.products.slice(
        page * this.maxItemsOnPage,
        (page + 1) * this.maxItemsOnPage
      );
    },
  },
  components: { ProductTableLine, Pagination },
};
</script>
