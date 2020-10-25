<template>
  <div class="border p-4 mb-4">
    <h3 class="mb-3 h6 text-uppercase text-black d-block">Категории</h3>
    <ul class="list-unstyled mb-0">
      <li
        v-for="(collectionType, index) in pages.collection.subsections"
        :key="index"
        class="mb-1"
        :class="[
          'collection-active-link',
          {
            'collection-active-link-exact':
              chosenCategory === collectionType.path,
          },
        ]"
      >
        <a
          href="#"
          @click.prevent="chooseCategory(collectionType.path)"
          class="d-flex"
        >
          <span>{{ collectionType.name }} одежда</span>
          <span class="text-black ml-auto"
            >({{ collectionSubsectionNumber[collectionType.path] || 0 }})</span
          >
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { pages } from "@/router/pages";

export default {
  name: "collection-sort-by-category",
  data: () => ({
    pages,
    collectionSubsectionNumber: {},
  }),
  computed: {
    chosenCategory() {
      return this.$route.query.type || null;
    },
  },
  methods: {
    chooseCategory(type) {
      if (type === this.chosenCategory) type = null;
      this.$router
        .push({ query: { ...this.$route.query, type, page: 1 } })
        .catch((e) => {});
    },

    getSubsectionNumber() {
      const collectionSubsectionNumber = {};
      const products = this.$store.getters.getProducts;

      products.forEach(({ type }) => {
        if (collectionSubsectionNumber[type])
          collectionSubsectionNumber[type] += 1;
        else collectionSubsectionNumber[type] = 1;
      });
      this.collectionSubsectionNumber = { ...collectionSubsectionNumber };
    },
  },
  mounted() {
    this.getSubsectionNumber();
  },
};
</script>
