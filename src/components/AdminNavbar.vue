<template>
  <div class="link-bar">
    <router-link to="/products-list">Список товаров</router-link>
    <router-link to="/orders">Заказы</router-link>
    <router-link to="/questions">Вопросы покупателей</router-link>
    <router-link to="/subscribers">Подписались на оповещения</router-link>
  </div>
</template>
<style scoped>
.link-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>