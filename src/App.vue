<template>
  <div class="site-wrap" v-if="isLoaded">
    <ShopHeader />
    <SectionPath />
    <router-view />
    <ShopFooter />
  </div>
  <Loader v-else/>
</template>
<script>
import ShopHeader from "@/components/Header";
import ShopFooter from "@/components/Footer";
import SectionPath from "@/components/Path";
import Loader from "@/components/Loader"

export default {
  components: {
    ShopHeader,
    ShopFooter,
    SectionPath,
    Loader,
  },
  computed: {
    isLoaded(){
      return this.$store.getters.getLoadingStatus
    }
  },
  beforeCreate() {
    const products = JSON.parse(localStorage.getItem("productsCart"));
    this.$store.commit("setCartProducts", products);
  },
  async mounted() {
    await this.$store.dispatch("fetchProducts");
  },
};
</script>