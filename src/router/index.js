import Vue from "vue";
import { pages } from "./pages";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: pages.home.path,
    name: pages.home.name,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: pages.collection.path,
    name: pages.collection.name,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Collection.vue"),
  },
  {
    path: pages.product.path,
    name: pages.product.name,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductPage.vue"),
  },
  {
    path: pages.cart.path,
    name: pages.cart.name,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Cart.vue"),
  },
  {
    path: pages.checkout.path,
    name: pages.checkout.name,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Checkout.vue"),
  },
  {
    path: pages.thankyou.path,
    name: pages.thankyou.name,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Thankyou.vue"),
  },
  {
    path: pages.contacts.path,
    name: pages.contacts.name,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contacts.vue"),
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
