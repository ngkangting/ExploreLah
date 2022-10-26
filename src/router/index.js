import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/auth/LoginView.vue";
import SignUpView from "../views/auth/SignUpView.vue";
import ForgotPasswordView from "../views/auth/ForgotPasswordView.vue";
import PlanNow from "../views/PlanNow.vue";
import ResultFood from "../views/ResultPage.vue";
import Plan from "../views/Plan.vue";
import MyTrips from "../views/MyTrips.vue";
import Result from "../views/ResultView.vue";
import AboutUs from "../views/AboutUs.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView,
      meta: {
        hideNavBar: true,
      },
    },
    {
      path: "/signup",
      name: "Sign Up",
      component: SignUpView,
      meta: {
        hideNavBar: true,
      },
    },
    {
      path: "/forgotpassword",
      name: "Forgot Password",
      component: ForgotPasswordView,
      meta: {
        hideNavBar: true,
      },
    },
    {
      path: "/plan",
      name: "Plan",
      component: PlanNow,
    },
    {
      path: "/result",
      name: "Result",
      component: Result,
    },
    {
      path:"/resultfood",
      name: "Food Recommendation",
      component: ResultFood,
    },
    {
      path: "/mytrips",
      name: "My Trips",
      component: MyTrips,
    },
    {
      path: "/aboutus",
      name: "About Us",
      component: AboutUs,
    },
  ],
});

router.beforeEach((to, from, next) => {
  to.name ? (document.title = `ExploreLah | ${to.name}`) : "ExploreLah";
  next();
});

export default router;
