// router.beforeEach((to, from, next) => {
//   if (
//     to.meta.home === "admin" &&
//     (!store.state.admin.userInfo ||
//       (store.state.admin.userInfo && !store.state.admin.userInfo.isAdmin))
//   )
//     next("/home");

//   if (to.meta.home === "admin" && !firebase.auth().currentUser) next("/login");
//   else next();
// });

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { basicPages, profilePages } from "../constants/pages";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Домашняя страница",
    meta: { home: "home" },
    component: () => import("@/views/Home.vue"),
  },
  {
    path: basicPages.collection.path,
    name: basicPages.collection.name,
    meta: { home: "home" },
    component: () => import("@/views/Collection.vue"),
  },
  {
    path: basicPages.product.path,
    name: basicPages.product.name,
    meta: { home: "home" },
    component: () => import("@/views/ProductPage.vue"),
  },
  {
    path: basicPages.cart.path,
    name: basicPages.cart.name,
    meta: { home: "home" },
    component: () => import("@/views/Cart.vue"),
  },
  {
    path: basicPages.checkout.path,
    name: basicPages.checkout.name,
    meta: { home: "home" },
    component: () => import("@/views/Checkout.vue"),
  },
  {
    path: basicPages.thankyou.path,
    name: basicPages.thankyou.name,
    meta: { home: "home" },
    component: () => import("@/views/Thankyou.vue"),
  },
  {
    path: basicPages.contacts.path,
    name: basicPages.contacts.name,
    meta: { home: "home" },
    component: () => import("@/views/Contacts.vue"),
  },
  {
    path: basicPages.checkOrder.path,
    name: basicPages.checkOrder.name,
    meta: { home: "home" },
    component: () => import("@/views/CheckOrder.vue"),
  },
  {
    path: profilePages.admin.path,
    redirect: basicPages.productList.path,
  },
  {
    path: basicPages.productList.path,
    name: basicPages.productList.name,
    meta: { home: "admin" },
    component: () => import("@/views/ProductsList.vue"),
  },
  {
    path: basicPages.editProduct.path,
    name: basicPages.editProduct.name,
    meta: { home: "admin" },
    component: () => import("@/views/Edit.vue"),
  },
  {
    path: basicPages.orders.path,
    name: basicPages.orders.name,
    meta: { home: "admin" },
    component: () => import("@/views/Orders.vue"),
  },
  {
    path: basicPages.questions.path,
    name: basicPages.questions.name,
    meta: { home: "admin" },
    component: () => import("@/views/Questions.vue"),
  },
  {
    path: basicPages.subscribers.path,
    name: basicPages.subscribers.name,
    meta: { home: "admin" },
    component: () => import("@/views/Subscribers.vue"),
  },
  {
    path: profilePages.signIn.path,
    name: profilePages.signIn.name,
    meta: { home: "home" },
    component: () => import("@/views/Login.vue"),
  },
  {
    path: profilePages.register.path,
    name: profilePages.register.name,
    meta: { home: "home" },
    component: () => import("@/views/Register.vue"),
  },
  {
    path: profilePages.myOrders.path,
    name: profilePages.myOrders.name,
    meta: { home: "home" },
    component: () => import("@/views/MyOrders.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
