<template>
  <div class="site-navbar py-2 bg-light">
    <div class="search-wrap">
      <div class="container">
        <a href="#" class="search-close js-search-close" @click.prevent>
          <span class="icon-close2"></span>
        </a>
        <form action="#" method="post">
          <input
            type="text"
            class="form-control"
            placeholder="Search keyword and hit enter..."
          />
        </form>
      </div>
    </div>

    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <div class="logo">
          <div class="site-logo">
            <router-link to="/" class="js-logo-clone">Vis-a-Vis</router-link>
          </div>
        </div>
        <div class="main-nav d-none d-lg-block">
          <nav
            class="site-navigation text-right text-md-center"
            role="navigation"
          >
            <ul class="site-menu js-clone-nav d-none d-lg-block">
              <li>
                <router-link to="/">Домашня страница</router-link>
              </li>

              <li class="has-children active">
                <router-link :to="pages.collection.path">{{
                  pages.collection.name
                }}</router-link>

                <ul class="dropdown">
                  <li
                    v-for="(pathItem, index) in pages.collection.subsections"
                    :key="index"
                  >
                    <router-link
                      :to="{
                        path: 'collection',
                        query: { type: pathItem.path },
                      }"
                      >{{ pathItem.name }}</router-link
                    >
                  </li>
                </ul>
              </li>

              <li>
                <router-link v-if="false" to="/">Каталог</router-link>
              </li>
              <li>
                <router-link to="/contacts">Контакты</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="icons">
          <router-link to="/cart" class="icons-btn d-inline-block bag">
            <span class="icon-shopping-bag"></span>
            <span v-if="cartItems" class="number">{{ cartItems }}</span>
          </router-link>
          <a
            href="#"
            class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
          >
            <span class="icon-menu"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { pages } from "@/router/pages";

export default {
  name: "Header",
  data: () => ({
    pages,
  }),
  computed: {
    cartItems() {
      const cartProducts = this.$store.getters.getCartProducts;
      const str = JSON.stringify(cartProducts);
      localStorage.productsCart = str;
      return cartProducts.length;
    },
  },
};
</script>
<style scoped>
.site-navbar {
  position: relative !important;
}
</style>