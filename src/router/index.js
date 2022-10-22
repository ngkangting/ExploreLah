import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/auth/LoginView.vue";
import SignUpView from "../views/auth/SignUpView.vue";
import ForgotPasswordView from "../views/auth/ForgotPasswordView.vue";
import Plan from "../views/Plan.vue";
import MyTrips from "../views/MyTrips.vue";
import Result from "../views/ResultView.vue";
import AboutUs from "../views/AboutUs.vue";

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
      path: "/mytrips",
      name: "mytrips",
      component: MyTrips,
    },
    {
      path: "/aboutus",
      name: "aboutus",
      component: AboutUs,
    },
    {
      path: "/result",
      name: "result",
      component: Result,
    },
  ],
});

export default router;
