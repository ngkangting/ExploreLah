import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/auth/LoginView.vue";
import SignUpView from "../views/auth/SignUpView.vue";
import ForgotPasswordView from "../views/auth/ForgotPasswordView.vue";
import PlanNow from "../views/PlanNow.vue";
import ResultPage from "../views/ResultPage.vue";
import Plan from "../views/Plan.vue";
import Result from "../views/ResultView.vue";

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
    {
      path: "/plan",
      name: "plan",
      component: Plan,
    },
    {
      path: "/result",
      name: "result",
      component: Result,
    },
    {
      path: "/result",
      name: "result",
      component: ResultPage,
    },
  ],
});

export default router;
