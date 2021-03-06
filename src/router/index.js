import Vue from "vue";
import { pages } from "./pages";
import VueRouter from "vue-router";
import firebase from "firebase/app";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: pages.home.path,
    name: pages.home.name,
    meta: { home: "home" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: pages.collection.path,
    name: pages.collection.name,
    meta: { home: "home" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Collection.vue"),
  },
  {
    path: pages.product.path,
    name: pages.product.name,
    meta: { home: "home" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductPage.vue"),
  },
  {
    path: pages.cart.path,
    name: pages.cart.name,
    meta: { home: "home" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
  },
  {
    path: pages.checkout.path,
    name: pages.checkout.name,
    meta: { home: "home" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Checkout.vue"),
  },
  {
    path: pages.thankyou.path,
    name: pages.thankyou.name,
    meta: { home: "home" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Thankyou.vue"),
  },
  {
    path: pages.contacts.path,
    name: pages.contacts.name,
    meta: { home: "home" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contacts.vue"),
  },
  {
    path: pages.checkOrder.path,
    name: pages.checkOrder.name,
    meta: { home: "home" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CheckOrder.vue"),
  },
  {
    path: pages.admin.path,
    redirect: pages.productList.path,
  },
  {
    path: pages.productList.path,
    name: pages.productList.name,
    meta: { home: "admin" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductsList.vue"),
  },
  {
    path: pages.editProduct.path,
    name: pages.editProduct.name,
    meta: { home: "admin" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Edit.vue"),
  },
  {
    path: pages.orders.path,
    name: pages.orders.name,
    meta: { home: "admin" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Orders.vue"),
  },
  {
    path: pages.questions.path,
    name: pages.questions.name,
    meta: { home: "admin" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Questions.vue"),
  },
  {
    path: pages.subscribers.path,
    name: pages.subscribers.name,
    meta: { home: "admin" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Subscribers.vue"),
  },
  {
    path: pages.login.path,
    name: pages.login.name,
    meta: { home: "home" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: pages.register.path,
    name: pages.register.name,
    meta: { home: "home" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: pages.myOrders.path,
    name: pages.myOrders.name,
    meta: { home: "home" },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyOrders.vue"),
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.meta.home === "admin" &&
    (!store.state.admin.userInfo ||
      (store.state.admin.userInfo && !store.state.admin.userInfo.isAdmin))
  )
    next("/home");

  if (to.meta.home === "admin" && !firebase.auth().currentUser) next("/login");
  else next();
});

export default router;
