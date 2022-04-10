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
              <li :class="isLinkActive(basicPages.home.path)">
                <router-link :to="basicPages.home.path">{{
                  basicPages.home.name
                }}</router-link>
              </li>
              <li
                class="has-children"
                :class="isLinkActive(basicPages.collection.path)"
              >
                <router-link :to="basicPages.collection.path">{{
                  basicPages.collection.name
                }}</router-link>

                <ul class="dropdown">
                  <li
                    v-for="([key, { path, name }], index) in Object.entries(
                      collectionSubsecitons
                    )"
                    :key="key"
                    class="has-children"
                  >
                    <router-link
                      :to="{
                        path: 'collection',
                        query: { type: path },
                      }"
                      >{{ name }}</router-link
                    >
                    <ul v-if="getProductTypeSectionArr(path)" class="dropdown">
                      <li
                        v-for="productTypeItem in getProductTypeSectionArr(
                          path
                        )"
                        :key="productTypeItem.path"
                      >
                        <router-link
                          :to="{
                            path: 'collection',
                            query: {
                              type: path,
                              productType: productTypeItem.path,
                            },
                          }"
                          >{{ productTypeItem.name }}</router-link
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li :class="isLinkActive(basicPages.contacts.path)">
                <router-link :to="basicPages.contacts.path">{{
                  basicPages.contacts.name
                }}</router-link>
              </li>

              <li :class="isLinkActive(basicPages.checkOrder.path)">
                <router-link :to="basicPages.checkOrder.path">{{
                  basicPages.checkOrder.name
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
                <li class="has-children">
                  <router-link to="/"
                    ><span class="material-icons">
                      account_circle
                    </span></router-link
                  >
                  <ul class="dropdown">
                    <li v-if="!admin.userInfo">
                      <router-link :to="profilePages.register.path">{{
                        profilePages.register.name
                      }}</router-link>
                    </li>
                    <li v-if="!admin.userInfo">
                      <router-link :to="profilePages.signIn.path">{{
                        profilePages.signIn.name
                      }}</router-link>
                    </li>
                    <li
                      v-if="admin.userInfo !== null && admin.userInfo.isAdmin"
                    >
                      <router-link :to="profilePages.admin.path">{{
                        profilePages.admin.name
                      }}</router-link>
                    </li>
                    <li>
                      <router-link
                        v-if="admin.userInfo"
                        :to="profilePages.myOrders.path"
                        >{{ profilePages.myOrders.name }}</router-link
                      >
                    </li>
                    <li>
                      <a
                        v-if="admin.userInfo"
                        href="#"
                        @click.prevent="signOut"
                        >{{ profilePages.signOut.name }}</a
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <router-link
            :to="basicPages.cart.path"
            class="icons-btn d-inline-block bag"
            :class="isLinkActive(basicPages.cart.path, 'text-primary')"
          >
            <span class="icon-shopping-bag"></span>
            <!-- <span v-if="cartItems" class="number">{{ cartItems }}</span> -->
          </router-link>
          <a
            href="#"
            class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
          >
            <span class="icon-menu" @click="emits('toggleMenu')"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  basicPages,
  collectionSubsecitons,
  profilePages,
  productType,
} from "@/services/constants/pages";
import AdminApi from "@/services/api/admin.api";
import useAdminStore from "@/services/store/admin";

const emits = defineEmits(["toggleMenu"]);

const route = useRoute();
const router = useRouter();

const admin = useAdminStore();

const isMenuOpen = ref(false);

const isLinkActive = (linkName: string, activeClass = "active") =>
  linkName === route.path && activeClass;

const signOut = async () => {
  await AdminApi.signOut();
  router.push(basicPages.home.path);
};

const getProductTypeSectionArr = (sectionName: string) =>
  productType.filter(
    (item) => item.type === "general" || item.type.includes(sectionName)
  );
</script>

<style scoped></style>
