import Vue from "vue";
import Toasted from "vue-toasted";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebaseConfig from "@/firebase.config";

import currencyFilter from "@/filters/currency.filter";
import dateFilter from "@/filters/date.filter";

Vue.filter("currencyFilter", currencyFilter);
Vue.filter("dateFilter", dateFilter);

Vue.use(Toasted, { duration: 3000, keepOnHover: true });
Vue.config.productionTip = false;

firebase.initializeApp(firebaseConfig);
let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app)
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
});
