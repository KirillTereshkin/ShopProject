<template
  ><div class="col-md-12 header">
    <router-link :class="{ 'text-black': $route.path !== '/login' }" to="/login"
      ><h5 class="mb-3">Войти</h5></router-link
    >
    <router-link
      :class="{ 'text-black': $route.path !== '/register' }"
      to="/register"
      ><h5 class="mb-3">Регистрация</h5></router-link
    >
  </div>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  h5 {
    text-transform: uppercase;
  }
}
</style>
