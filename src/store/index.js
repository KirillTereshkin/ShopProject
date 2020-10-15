import Vue from "vue";
import Vuex from "vuex";
import products from "@/store/products";
import cart from "@/store/cart";
import orders from "@/store/orders";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    cart,
    orders,
  },
});
