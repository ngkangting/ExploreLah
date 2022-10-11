import { createRouter, createWebHistory } from "vue-router";

import { getAuth } from "firebase/auth";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/auth/LoginView.vue";
import SignUpView from "../views/auth/SignUpView.vue";
import ForgotPasswordView from "../views/auth/ForgotPasswordView.vue";

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
      path: "/forgotpassword",
      name: "forgotpassword",
      component: ForgotPasswordView,
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path === "/" && getAuth().currentUser) {
    next("/home");
    return;
  }

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !getAuth().currentUser
  ) {
    next("/");
    return;
  }

  next();
});

export default router;
