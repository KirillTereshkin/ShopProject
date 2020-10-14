export default {
  name: "pagination-mixin",
  data: () => ({
    currentPage: 1,
    pagesCount: 0,
    maxPageItems: 0,
  }),
  methods: {
    setPagination(itemsNumber, maxPageItems = 6) {
      this.currentPage = Number(this.$route.query.page) || 1;
      this.currentPage = this.currentPage > maxPageItems ? 1 : this.currentPage;

      this.maxPageItems = maxPageItems;
      this.pagesCount = Math.ceil(itemsNumber / maxPageItems);
    },
    changePage(newPageIndex) {
      this.currentPage = newPageIndex;
      this.$router.push({
        query: { ...this.$route.query, page: newPageIndex },
      });
    },
  },
};
