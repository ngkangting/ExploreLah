<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Logo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-0 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">Discover</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-if="!this.authStore.user">
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class="nav-link">Sign Up</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0" v-else>
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="logoutUser()"
              >Logout</router-link
            >
          </li>
        </ul>
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
