<template>
  <div class="mb-4">
    <h3 class="mb-3 h6 text-uppercase text-black d-block">Размер</h3>
    <label
      v-for="(sizeCategory, index) in allSizes"
      :key="index"
      :for="sizeCategory"
      class="d-flex"
    >
      <input
        type="checkbox"
        :id="sizeCategory"
        :value="sizeCategory"
        v-model="checkedSize"
        class="mr-2 mt-1"
      />
      <span class="text-black"
        >{{ sizeCategory }} ({{ sizesNumber[sizeCategory] }})</span
      >
    </label>
  </div>
</template>
<script>
export default {
  name: "collection-sort-by-size",
  props: {
    products: {
      type: Array,
      requred: true,
    },
  },
  data: () => ({
    allSizes: null,
    checkedSize: [],
    sizesNumber: {},
  }),
  watch: {
    checkedSize(val) {
      this.$router
        .push({
          query: { ...this.$route.query, size: this.checkedSize, page: 1 },
        })
        .catch((e) => {});
    },
    $route(val) {
      const { size } = this.$route.query;
      if (size) this.checkedSize = Array.isArray(size) ? [...size] : [size];
      else this.checkedSize = [];
    },
  },
  methods: {
    getSubsectionNumbers() {},
    getAllSizes() {
      const allSizes = new Set();
      this.products.forEach((item) => {
        item.sizes.forEach((size) => allSizes.add(size));
      });
      this.allSizes = [...allSizes];
      this.allSizes.sort()
    },
    getsizesNumber() {
      const sizesNumber = {};
      const products = this.$store.getters.getProducts;

      this.allSizes.forEach((size) => {
        sizesNumber[size] = products.reduce(
          (prevVal, val) => prevVal + (val.sizes.includes(size) ? 1 : 0),
          0
        );
      });

      this.sizesNumber = sizesNumber;
    },
  },
  mounted() {
    this.getAllSizes();
    this.getsizesNumber();
  },
};
</script>