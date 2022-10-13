<template>
  <nav
    class="navbar navbar-expand-lg bg-white border-bottom fw-bold"
    style="height: 75px"
  >
    <div class="container-fluid mx-4">
      <router-link to="/" class="navbar-brand">ExploreLah!</router-link>
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end w-100"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">ExploreLah!</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav flex-grow-1 pe-3 align-items-center">
            <li class="nav-item">
              <a class="nav-link" href="#">Discover</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Us</a>
            </li>
          </ul>
          <ul
            class="navbar-nav flex-grow-1 justify-content-end align-items-center"
            v-if="!this.authStore.isLoggedIn"
          >
            <li class="nav-item me-2">
              <router-link to="/signup" class="nav-link">Sign Up</router-link>
            </li>
            <li class="nav-item me-2">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/plannow" class="btn btn-pink"
                >Plan Now</router-link
              >
            </li>
          </ul>
          <ul
            class="navbar-nav flex-grow-1 justify-content-end align-items-center"
            v-else
          >
            <li class="nav-item dropdown me-4">
              <a
                class="nav-link d-flex justify-content-center align-items-center"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div
                  class="bg-secondary rounded-circle text-white d-flex justify-content-center align-items-center me-2"
                  style="width: 40px; height: 40px"
                >
                  {{ this.authStore.user.email.charAt(0).toUpperCase() }}
                </div>
                {{ this.authStore.user.email }}
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="bi bi-geo-alt"></i> My Trips</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="bi bi-gear"></i> Settings</a
                  >
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <router-link
                    to="/"
                    class="dropdown-item"
                    @click="logoutUser()"
                    ><i class="bi bi-box-arrow-right"></i> Logout</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/plannow" class="btn btn-pink"
                >Plan Now</router-link
              >
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

<style lang="scss"></style>
