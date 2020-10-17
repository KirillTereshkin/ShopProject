<template>
  <div class="login-navbar">
    <div>
      <router-link :class="{'text-black': $route.path === '/login'}" to="/login"><h4>Вход</h4></router-link>
    </div>
    <div>
      <router-link :class="{'text-black': $route.path === '/register'}" to="/register"><h4>Регистрация</h4></router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login-navbar {
  margin-bottom: 40px;
  display: flex;
  width: 50%;

  div {
    padding: 5px;
    width: 50%;
    text-align: center;

    &:first-child {
      border-bottom: 1px solid #9e9e9e;
    }
    &:nth-child(2) {
      border-bottom: 1px solid #9e9e9e;
      border-left: 1px solid #9e9e9e;
    }
  }
}
</style>