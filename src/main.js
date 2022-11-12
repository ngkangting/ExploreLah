import { createApp, markRaw, watch } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";

import App from "./App.vue";
import router from "./router";

import "bootstrap-icons/font/bootstrap-icons.css";
import "@vuepic/vue-datepicker/dist/main.css";
import "vue3-typeahead-input/dist/style.css";
import "./assets/main.scss";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.$router = markRaw(router);
});

app.use(pinia);
app.use(router);
app.use(MotionPlugin);
app.use(LottieVuePlayer);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
