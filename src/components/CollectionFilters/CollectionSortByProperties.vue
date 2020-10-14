<template>
  <div class="btn-group">
    <button
      type="button"
      class="btn btn-white btn-sm dropdown-toggle px-4"
      id="dropdownMenuReference"
      data-toggle="dropdown"
    >
      {{ chosenSortingWay || "Упорядочить" }}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuReference">
      <a
        @click.prevent="sortAlphabeticallyAsc('По алфавиту - от А до Я')"
        class="dropdown-item"
        href="#"
        >По алфавиту - от А до Я</a
      >
      <a
        @click.prevent="sortAlphabeticallyDesc('По алфавиту - от Я до А')"
        class="dropdown-item"
        href="#"
        >По алфавиту - от Я до А</a
      >
      <div class="dropdown-divider"></div>
      <a
        @click.prevent="sortByPriceAsc('По возрастанию цены')"
        class="dropdown-item"
        href="#"
        >По возрастанию цены</a
      >
      <a
        @click.prevent="sortByPriceDesc('По убыванию цены')"
        class="dropdown-item"
        href="#"
        >По убыванию цены</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "product-properties-sort",
  props: {
      products: {
          type: Array,
          required: true,
      }
  },
  data: () => ({
    chosenSortingWay: "",
  }),
  methods: {
    sortAlphabeticallyAsc(title) {
      this.$emit('on-sort',[...this.products].sort((a, b) => a.title.localeCompare(b.title)));
      this.chosenSortingWay = title;
    },
    sortAlphabeticallyDesc(title) {
      this.$emit('on-sort',[...this.products].sort((a, b) => -a.title.localeCompare(b.title)));
      this.chosenSortingWay = title;
    },
    sortByPriceAsc(title) {
      this.$emit('on-sort',[...this.products].sort((a, b) => a.price - b.price));
      this.chosenSortingWay = title;
    },
    sortByPriceDesc(title) {
      this.$emit('on-sort',[...this.products].sort((a, b) => b.price - a.price ));
      this.chosenSortingWay = title;
    },
  },
};
</script>