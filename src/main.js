import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import { MotionPlugin } from "@vueuse/motion";

import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

initializeApp(firebaseConfig);

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

app.use(pinia);
app.use(router);
app.use(MotionPlugin);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
