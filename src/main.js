import { createApp, markRaw, watch } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import { MotionPlugin } from "@vueuse/motion";
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";
import Datepicker from "@vuepic/vue-datepicker";

import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@vuepic/vue-datepicker/dist/main.css";

// initializeApp(firebaseConfig);


const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

app.use(pinia);
app.use(router);
app.use(MotionPlugin);
app.use(LottieVuePlayer);
app.use(Datepicker);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";

