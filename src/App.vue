<template>
  <!-- <div class="site-wrap" v-if="isLoaded"> -->
  <Header />
  <!-- <SectionPath /> -->
  <router-view />
  <Footer />
  <!-- </div> -->
  <!-- <Loader v-else /> -->
</template>

<script setup lang="ts">
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

// import SectionPath from "@/components/Path";
// import Loader from "@/components/Loader";

// export default {
//   name: "App",
//   components: {
//     MobileHeader,
//     ShopHeader,
//     ShopFooter,
//     SectionPath,
//     Loader,
//   },
//   computed: {
//     isLoaded() {
//       return this.$store.getters.getLoadingStatus;
//     },
//   },
//   beforeCreate() {
//     const products = JSON.parse(localStorage.getItem("productsCart"));
//     const userInfo = JSON.parse(localStorage.getItem("userInfo"));

//     if (products) this.$store.commit("setCartProducts", products);
//     if (userInfo) this.$store.commit("setUserInfo", userInfo);
//   },
//   async mounted() {
//     await this.$store.dispatch("fetchProducts");
//   },
// };
//
</script>
