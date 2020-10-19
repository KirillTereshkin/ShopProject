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
              <li :class="isLinkActive(pages.home.path)">
                <router-link :to="pages.home.path">{{
                  pages.home.name
                }}</router-link>
              </li>

              <li
                class="has-children"
                :class="isLinkActive(pages.collection.path)"
              >
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

              <li :class="isLinkActive(pages.contacts.path)">
                <router-link :to="pages.contacts.path">{{
                  pages.contacts.name
                }}</router-link>
              </li>

              <li :class="isLinkActive(pages.checkOrder.path)">
                <router-link :to="pages.checkOrder.path">{{
                  pages.checkOrder.name
                }}</router-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="icons">
          <div class="main-nav d-none d-lg-block">
            <nav
              class="site-navigation text-right text-md-center"
              role="navigation"
            >
              <ul class="site-menu js-clone-nav d-none d-lg-block">
                <li class="has-children ">
                  <router-link
                    to="/" 
                    :class="isLinkOneOf"
                    ><span class="material-icons">
                      account_circle
                    </span></router-link
                  >
                  <ul class="dropdown">
                    <li v-if="!userInfo">
                      <router-link :to="profilePages.register.path">{{
                        profilePages.register.name
                      }}</router-link>
                    </li>
                    <li v-if="!userInfo">
                      <router-link :to="profilePages.logIn.path">{{
                        profilePages.logIn.name
                      }}</router-link>
                    </li>
                    <li v-if="userInfo !== null && userInfo.isAdmin">
                      <router-link :to="profilePages.admin.path">{{
                        profilePages.admin.name
                      }}</router-link>
                    </li>
                    <li>
                      <router-link
                        v-if="userInfo"
                        :to="profilePages.myOrders.path"
                        >{{ profilePages.myOrders.name }}</router-link
                      >
                    </li>
                    <li>
                      <a v-if="userInfo" href="#" @click.prevent="logOut">{{
                        profilePages.logOut.name
                      }}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <router-link
            :to="pages.cart.path"
            class="icons-btn d-inline-block bag"
            :class="isLinkActive(pages.cart.path, 'text-primary')"
          >
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
    profilePages: {
      admin: { name: "Администрирование", path: "/site-admin" },
      myOrders: { name: "Мои товары", path: "/my-orders" },
      logOut: { name: "Выйти", path: "/logout" },
      logIn: { name: "Войти", path: "/login" },
      register: { name: "Зарегестрироваться", path: "/register" },
    },
  }),
  methods: {
    saveDataToLocalStorage(data, fieldName) {
      const str = JSON.stringify(data);
      localStorage[fieldName] = str;
    },
    async logOut() {
      await this.$store.dispatch("logout");
      this.$router.push("/").catch((e) => {});
    },
    isLinkActive(linkName, activeClass = "active") {
      return linkName === this.$route.path ? activeClass : "";
    },
  },
  computed: {
    cartItems() {
      const cartProducts = this.$store.getters.getCartProducts;
      this.saveDataToLocalStorage(cartProducts, "productsCart");
      return cartProducts.length;
    },
    userInfo() {
      const userInfo = this.$store.getters.getUserInfo;
      this.saveDataToLocalStorage(userInfo, "userInfo");
      return userInfo;
    },
    isLinkOneOf() {
      return Object.values(this.profilePages)
        .map((item) => item.path)
        .includes(this.$route.path)
        ? "icon-active"
        : "icon-black";
    },
  },
};
</script>
<style scoped>
.site-navbar {
  position: relative !important;
}
.icons {
  display: flex;
  align-items: center;
}
.icon-black {
  color: black !important;
}
.icon-active {
  color: #207dff !important;
}
</style>
