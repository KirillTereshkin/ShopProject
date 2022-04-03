<template>
  <div v-if="currentPageName !== pages.home.name" class="bg-white py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-12 mb-0">
          <router-link :to="homePage.path">{{ homePage.name }}</router-link> <span class="mx-2 mb-0">/</span>
          <strong class="text-black">{{ currentPageName }}</strong>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { pages } from '@/router/pages'

export default {
    data: () => ({
      pages
    }),
    computed: {
      currentPageName(){
        return this.$route.name
      },
      homePage(){
        return this.pages[this.$route.meta.home] || this.pages.home; 
      }
    },
}
</script>