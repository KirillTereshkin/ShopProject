<template>
  <div class="site-mobile-menu">
    <div class="site-mobile-menu-header">
      <div class="site-mobile-menu-logo">
        <router-link to="/" class="js-logo-clone">Vis-a-Vis</router-link>
      </div>
      <div class="site-mobile-menu-close">
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
            <li v-for="ref in collectionSubsecitons" :key="ref.path">
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
          <router-link :to="basicPages.contacts.path">{{
            basicPages.contacts.name
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
            <li v-if="admin.userInfo !== null && admin.userInfo.isAdmin">
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
                @click.prevent="admin.signOut()"
                >{{ profilePages.signOut.name }}</a
              >
            </li>
          </ul>
        </li>

        <li>
          <router-link :to="basicPages.cart.path"
            >{{ basicPages.cart.name }}
            <!-- <span class="cart-items" v-if="cartItems">{{
              cartItems
            }}</span> -->
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  basicPages,
  collectionSubsecitons,
  profilePages,
} from "@/services/constants/pages";
import useAdminStore from "@/services/store/admin";

const admin = useAdminStore();

const isCollectionOpen = ref(false);
const isCabinetOpen = ref(false);
</script>

<style scoped></style>
