<template>
  <div class="mb-4">
    <h3 class="mb-3 h6 text-uppercase text-black d-block">Отфильтровать по цене</h3>
    <div id="slider-range" class="border-primary"></div>
    <input
      type="text"
      name="text"
      id="amount"
      class="form-control border-0 pl-0 bg-white"
      disabled
    />
    <button
      class="btn btn-sm btn-primary"
      :disabled="!isChanged"
      @click="filterByPrice"
    >
      Отфильтровать
    </button>
  </div>
</template>
<script>
import priceRangeScript from "@/jQuerryFunctions/price-range-script";

export default {
  name: "CollectionSortByPrice",
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    currentMin: null,
    currentMax: null,
    isChanged: false,
    watchCount: 0,
  }),
  watch: {
    currentMin(val, oldVal) {
      if (this.watchCount > 2 && !this.isChanged && val !== oldVal) {
        this.isChanged = true;
      }
      this.watchCount++;
    },
    currentMax(val, oldVal) {
      if (this.watchCount > 2 && !this.isChanged && val !== oldVal) {
        this.isChanged = true;
      }
      this.watchCount++;
    },
  },
  methods: {
    pricesFilter() {
      const massArr = this.products.map((item) => item.price);
      const { query } = this.$route;

      const totalMin = Math.min(...massArr),
        totalMax = Math.max(...massArr);

      this.currentMin =
        query.minPrice || Math.round(totalMin + 0.25 * (totalMax - totalMin));
      this.currentMax = query.maxPrice || Math.round(totalMin + 0.75 * (totalMax - totalMin));
      return { totalMin, totalMax };
    },
    filterByPrice() {
      this.$router.push({
        query: {
          ...this.$route.query,
          minPrice: this.currentMin,
          maxPrice: this.currentMax,
          page:1
        },
      });
      this.isChanged = false;
    },
  },
  mounted() {
    priceRangeScript(this);
    this.isChanged = false;
  },
};
</script>