<template>
  <div class="border p-4 mb-4">
    <h3 class="mb-3 h6 text-uppercase text-black d-block">Тип одежды</h3>
    <ul class="list-unstyled mb-0">
      <li
        v-for="(type, index) in productTypes"
        :key="index"
        class="mb-1"
        :class="[
          'collection-active-link',
          {
            'collection-active-link-exact': chosenProductType === type.path,
          },
        ]"
      >
        <a href="#" @click.prevent="chooseProductType(type.path)" class="d-flex">
          <span>{{ type.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { pages } from "@/router/pages";

export default {
  name: "collection-sort-by-sub-section",
  data: () => ({
    pages,
    collectionSubsectionNumber: {},
    productTypes: [],
  }),
  computed: {
    chosenProductType() {
      return this.$route.query.productType || null;
    },
  },
  methods: {
    chooseProductType(productType) {
      if (productType === this.chosenProductType) productType = null;
      this.$router
        .push({ query: { ...this.$route.query, productType, page: 1 } })
        .catch((e) => {});
    },

    getSubsectionNumber() {
      this.productTypes = [...this.pages.collection.productType];
    },
  },
  mounted() {
    this.getSubsectionNumber();
  },
};
</script>
