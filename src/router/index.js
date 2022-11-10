import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import LoginView from "../views/auth/LoginView.vue";
import SignUpView from "../views/auth/SignUpView.vue";
import ForgotPasswordView from "../views/auth/ForgotPasswordView.vue";
import Plan from "../views/Plan.vue";
import ResultFood from "../views/ResultPage.vue";
import MyTrips from "../views/MyTrips.vue";
import Result from "../views/ResultView.vue";
import Discover from "../views/Discover.vue";
import AboutUs from "../views/AboutUs.vue";
import PageNotFound from "../views/PageNotFound.vue";
import ViewResultView from "../views/ViewResultView.vue";

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
      component: Plan,
    },
    {
      path: "/result",
      name: "Result",
      component: Result,
    },
    {
      path: "/resultfood",
      name: "Food Recommendation",
      component: ResultFood,
    },
    {
      path: "/mytrips",
      name: "My Trips",
      component: MyTrips,
    },
    {
      path: "/discover",
      name: "Discover",
      component: Discover,
    },
    {
      path: "/aboutus",
      name: "About Us",
      component: AboutUs,
    },
    {
      path: "/viewresult",
      name: "View Result",
      component: ViewResultView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "Page Not Found",
      component: PageNotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  to.name ? (document.title = `ExploreLah | ${to.name}`) : "ExploreLah";
  next();
});

export default router;
