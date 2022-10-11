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
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: {
        hideNavBar: true,
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
      meta: {
        hideNavBar: true,
      },
    },
    {
      path: "/forgotpassword",
      name: "forgotpassword",
      component: ForgotPasswordView,
      meta: {
        hideNavBar: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (
    (to.path === "/login" ||
      to.path === "/signup" ||
      to.path === "/forgotpassword") &&
    getAuth().currentUser
  ) {
    next("/");
    return;
  }

  next();
});

export default router;
