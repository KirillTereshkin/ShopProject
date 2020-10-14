import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import firebaseConfig from "@/firebase.config";

import currencyFilter from "@/filters/currency.filter";

Vue.filter("currencyFilter", currencyFilter);

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
