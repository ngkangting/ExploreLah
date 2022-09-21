import { createApp } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
