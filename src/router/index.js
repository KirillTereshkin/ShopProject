import Vue from "vue";
import { pages } from "./pages";
import VueRouter from "vue-router";

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
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
