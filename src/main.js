import { createApp, markRaw, watch } from "vue";
import { createPinia } from "pinia";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

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

//Persistance in localstorage
// console.log(localStorage.getItem("state"));
// if (localStorage.getItem("state")) {
//   pinia.state.value.foodReco = localStorage.getItem("foodReco");
// };

// watch (
//   pinia.state,
//   (foodReco) => {
//     localStorage.setItem("foodReco", JSON.stringify(foodReco))
//   }
// )

app.use(pinia);
app.use(router);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
