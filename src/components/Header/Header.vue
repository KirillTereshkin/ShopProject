<template>
  <MobileHeader :class="{ 'menu-open': isMenuOpen }" @click="a" />
  <DesktopHeader @toggleMenu="isMenuOpen = !isMenuOpen" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import MobileHeader from "./MobileHeader/MobileHeader.vue";
import DesktopHeader from "./DesktopHeader/DesktopHeader.vue";

const isMenuOpen = ref(false);

const a = (e: any) => {
  console.log(e);
};
</script>

<style lang="scss" scoped>
.menu-open {
  transform: translate(0, 0);
}
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
