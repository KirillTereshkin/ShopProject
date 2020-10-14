<template>
  <div class="site-wrap">
    <ShopHeader/>
    <SectionPath/>
    <router-view/>
    <ShopFooter/>
  </div>
</template>
<script>
import ShopHeader from '@/components/Header.vue';
import ShopFooter from '@/components/Footer.vue';
import SectionPath from '@/components/Path.vue';

export default {
  components: {
    ShopHeader,
    ShopFooter,
    SectionPath,
  },
}
</script>