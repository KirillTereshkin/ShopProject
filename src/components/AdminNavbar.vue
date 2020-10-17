<template>
  <div class="link-bar">
    <router-link
      v-for="(route, index) of Object.entries(routes)"
      :key="index"
      :class="{ 'text-black': $route.path !== route[0] }"
      :to="route[0]"
      ><h5>{{ route[1] }}</h5></router-link
    >
  </div>
</template>
<script>
export default {
  name: "admin-navbar",
  data: () => ({
    routes: {
      "/products-list": "Список товаров",
      "/orders": "Заказы",
      "/questions": "Вопросы покупателей",
      "/subscribers": "Подписались на оповещения",
    },
  }),
};
</script>
<style scoped>
.link-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>