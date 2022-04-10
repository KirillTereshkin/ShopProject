import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";

import firebaseConfig from "@/services/config/firebase.config.json";

import App from "./App.vue";
import router from "./services/routes";

export const firebaseApp = initializeApp(firebaseConfig);

createApp(App).use(router).use(createPinia()).mount("#app");
