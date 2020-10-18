<template>
  <div class="site-wrap" v-if="isLoaded">
    <MobileHeader />
    <ShopHeader />
    <SectionPath />
    <router-view />
    <ShopFooter />
  </div>
  <Loader v-else />
</template>
<script>
import MobileHeader from "@/components/MobileHeader";
import ShopHeader from "@/components/Header";
import ShopFooter from "@/components/Footer";
import SectionPath from "@/components/Path";
import Loader from "@/components/Loader";

export default {
  components: {
    MobileHeader,
    ShopHeader,
    ShopFooter,
    SectionPath,
    Loader,
  },
  computed: {
    isLoaded() {
      return this.$store.getters.getLoadingStatus;
    },
  },
  beforeCreate() {
    const products = JSON.parse(localStorage.getItem("productsCart"));
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (products) this.$store.commit("setCartProducts", products);
    this.$store.commit("setUserInfo", userInfo);
  },
  async mounted() {
    await this.$store.dispatch("fetchProducts");
  },
};
</script>
