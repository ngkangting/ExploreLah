<template>
  <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top w-100" style="height: 75px">
    <div class="container-fluid mx-4">
      <router-link to="/" class="navbar-brand"><img src="../../assets/img/logo.png" alt="Logo" height="34" />
      </router-link>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="offcanvas offcanvas-end w-100" tabindex="-1" id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header py-4 pb-2 px-4">
          <img id="offcanvasNavbarLabel" src="../../assets/img/logo.png" alt="Logo" height="34" />

          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <hr class="d-block d-lg-none mx-4 text-secondary" />
        <div class="offcanvas-body align-items-center py-0 px-4 px-lg-0">
          <ul class="navbar-nav flex-grow-1 pe-3">
            <li class="nav-item navbar-item d-block d-lg-none" data-bs-dismiss="offcanvas">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item navbar-item" data-bs-dismiss="offcanvas">
              <router-link to="/discover" class="nav-link">Discover</router-link>
            </li>
            <li class="nav-item navbar-item" data-bs-dismiss="offcanvas">
              <router-link to="/aboutus" class="nav-link">About Us</router-link>
            </li>
            <li class="nav-item navbar-item" data-bs-dismiss="offcanvas" v-if="this.authStore.isLoggedIn">
              <router-link to="/mytrips" class="nav-link">My Trips</router-link>
            </li>
          </ul>
          <ul class="navbar-nav flex-grow-1 justify-content-end align-items-lg-center"
            v-if="!this.authStore.isLoggedIn">
            <li class="nav-item me-2 d-none d-lg-block">
              <router-link to="/plan" class="btn btn-pink">Plan Now</router-link>
            </li>
            <li class="nav-item navbar-item me-2 d-block d-lg-none" data-bs-dismiss="offcanvas">
              <router-link to="/plan" class="nav-link">Plan Now</router-link>
            </li>
            <li class="nav-item navbar-item me-2" data-bs-dismiss="offcanvas">
              <router-link to="/signup" class="nav-link">Sign Up</router-link>
            </li>
            <li class="nav-item navbar-item me-2" data-bs-dismiss="offcanvas">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
          </ul>
          <ul class="navbar-nav flex-grow-1 justify-content-end align-items-lg-center" v-else>
            <li class="nav-item me-2 d-none d-lg-block">
              <router-link to="/plan" class="btn btn-pink">Plan Now</router-link>
            </li>
            <li class="nav-item navbar-item me-2 d-block d-lg-none" data-bs-dismiss="offcanvas">
              <router-link to="/plan" class="nav-link">Plan Now</router-link>
            </li>
            <li class="nav-item dropdown me-4 d-none d-lg-block">
              <a class="nav-link d-flex justify-content-center align-items-center" href="#" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <div
                  class="bg-dark-blue rounded-circle text-white d-flex justify-content-center align-items-center me-2"
                  style="width: 40px; height: 40px">
                  {{ this.authStore.user.email.charAt(0).toUpperCase() }}
                </div>
              </a>
              <ul class="dropdown-menu dropdown-menu-end py-3">
                <li>
                  <router-link to="/" class="dropdown-item" @click="logoutUser()"><i class="bi bi-box-arrow-right"></i>
                    Logout</router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item navbar-item me-2 d-block d-lg-none" data-bs-dismiss="offcanvas">
              <router-link to="/" class="nav-link" @click="logoutUser()">Logout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from "@/stores/auth";

export default {
  name: "NavBar",
  data() {
    return {};
  },
  setup() {
    const authStore = useAuthStore();

    return { authStore };
  },
  methods: {
    async logoutUser() {
      try {
        const response = await this.authStore.logoutUser();
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style lang="scss">
@media only screen and (max-width: 991px) {
  .navbar-item {
    font-size: 1.4rem;
  }
}
</style>
