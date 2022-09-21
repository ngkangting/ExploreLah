import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/auth/LoginView.vue";
import SignUpView from "../views/auth/SignUpView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
