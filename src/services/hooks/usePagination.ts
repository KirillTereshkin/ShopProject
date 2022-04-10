import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const usePagination = () => {
  const route = useRoute();
  const router = useRouter();

  const currentPage = ref(1);
  const pagesCount = ref(0);
  const maxPageItems = ref(0);

  const changePage = (newPageIndex: number) => {
    currentPage.value = newPageIndex;

    router.push({
      query: { ...route.query, page: newPageIndex },
    });
  };

  const setPagination = (itemsNumber: number, maxPageItemsNumber = 6) => {
    currentPage.value = Number(route.query.page) || 1;
    currentPage.value =
      currentPage.value > maxPageItemsNumber ? 1 : currentPage.value;

    maxPageItems.value = maxPageItemsNumber;
    pagesCount.value = Math.ceil(itemsNumber / maxPageItemsNumber);
  };

  return {
    currentPage,
    pagesCount,
    maxPageItems,
    changePage,
    setPagination,
  };
};

export default usePagination;
