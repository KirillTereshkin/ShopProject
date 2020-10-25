<template>
  <div class="site-mobile-menu">
    <div class="site-mobile-menu-header">
      <div class="site-mobile-menu-logo">
        <router-link to="/" class="js-logo-clone">Vis-a-Vis</router-link>
      </div>
      <div class="site-mobile-menu-close ">
        <span class="ion-ios-close js-menu-toggle"></span>
      </div>
    </div>
    <div class="site-mobile-menu-body">
      <ul class="site-nav-wrap">
        <li class="has-children active">
          <span
            class="arrow-collapse collapsed"
            @click="isCollectionOpen = !isCollectionOpen"
          ></span>
          <router-link to="/collection">Коллекция</router-link>
          <ul
            class="collapse"
            :class="{ show: isCollectionOpen }"
            id="collapseItem0"
          >
            <li v-for="ref in pages.collection.subsections" :key="ref.path">
              <router-link
                :to="{
                  path: 'collection',
                  query: { type: ref.path },
                }"
                >{{ ref.name }}</router-link
              >
            </li>
          </ul>
        </li>

        <li>
          <router-link :to="pages.contacts.path">{{
            pages.contacts.name
          }}</router-link>
        </li>
        <li class="has-children active">
          <span
            class="arrow-collapse collapsed"
            @click="isCabinetOpen = !isCabinetOpen"
          ></span>
          <router-link to="/collection">Личный кабинет</router-link>
          <ul
            class="collapse"
            :class="{ show: isCabinetOpen }"
            id="collapseItem0"
          >
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
              <router-link v-if="userInfo" :to="profilePages.myOrders.path">{{
                profilePages.myOrders.name
              }}</router-link>
            </li>
            <li>
              <a v-if="userInfo" href="#" @click.prevent="logOut">{{
                profilePages.logOut.name
              }}</a>
            </li>
          </ul>
        </li>

        <li>
          <router-link :to="pages.cart.path"
            >{{ pages.cart.name }}
            <span class="cart-items" v-if="cartItems">{{
              cartItems
            }}</span></router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { pages } from "@/router/pages";
import getToastMessage from "@/toast/toast-messages";

export default {
  name: "mobile-header",
  data: () => ({
    isCollectionOpen: false,
    isCabinetOpen: false,
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
      try {
        await this.$store.dispatch("logout");
        this.$toasted.success(getToastMessage("successLogout"));
        this.$router.push("/").catch((e) => {});
      } catch (e) {
        this.$toasted.error(e.code);
      }
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
  },
};
</script>
<style scoped>
.cart-items {
  color: #207dff;
  text-decoration: underline;
}
</style>
