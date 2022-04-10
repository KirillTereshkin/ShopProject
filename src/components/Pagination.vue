<template>
  <!-- <div v-if="pagesCount !== 1 && pagesCount !== 0" class="row">
    <div class="col-md-12 text-center">
      <div class="site-block-27">
        <ul>
          <li>
            <a
              @click.prevent="currentPage > 1 && changePage(currentPage - 1)"
              href="#"
              >&lt;</a
            >
          </li>
          <li
            v-for="page in pagesCount"
            :key="page"
            :class="{ active: page === currentPage }"
          >
            <a @click.prevent="changePage(page)" href="#">{{ page }}</a>
          </li>
          <li>
            <a
              @click.prevent="
                currentPage < pagesCount && changePage(currentPage + 1)
              "
              href="#"
              >&gt;</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div> -->
</template>
<script>
// import paginationMixin from "@/mixins/pagination.mixin.js";

// export default {
//   name: "pagination",
//   props: {
//     itemsNumber: {
//       type: Number,
//       required: true,
//     },
//     maxItemsOnPage: {
//       type: Number,
//       required: true,
//     },
//   },
//   mixins: [paginationMixin],
//   watch: {
//     itemsNumber(val) {
//       this.setPagination(this.itemsNumber, this.maxItemsOnPage);
//     },
//   },
//   mounted() {
//     this.setPagination(this.itemsNumber, this.maxItemsOnPage);
//   },
// };
</script>
