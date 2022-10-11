<template>
  <div class="container-fluid vh-100">
    <div class="row h-100 justify-content-around">
      <FixedAlert
        :variant="variant"
        :alertContent="alertContent"
        v-if="isAlert"
      />
      <div class="col-12 col-lg-4 my-auto px-5 offset-lg-1">
        <div class="mb-5">
          <h1 class="text-dark-blue">Login</h1>
          <p class="text-black-50">Ready to explore Singapore?</p>
        </div>
        <form @submit.prevent="loginWithEmail()">
          <div class="mb-3">
            <label for="emailInput" class="form-label"
              >Email address<span class="text-danger">*</span></label
            >
            <input
              type="email"
              class="form-control"
              id="emailInput"
              aria-describedby="emailInput"
              v-model="email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="passwordInput" class="form-label"
              >Password<span class="text-danger">*</span></label
            >
            <input
              type="password"
              class="form-control"
              id="passwordInput"
              v-model="password"
              required
            />
          </div>
          <div class="mb-3 d-flex justify-content-between">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="rememberCheck"
              />
              <label class="form-check-label text-secondary" for="rememberCheck"
                >Remember Me</label
              >
            </div>
            <router-link
              to="/forgotpassword"
              class="link-primary text-decoration-none"
              >Forgot Password?</router-link
            >
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-pink w-100">Login</button>
          </div>
        </form>
        <LineText content="OR" />
        <div class="mb-5">
          <button
            type="button"
            class="btn btn-light-gray w-100"
            @click="loginWithGoogle()"
          >
            <GoogleIcon class="me-2" /> Login with Google
          </button>
        </div>
        <div class="text-center">
          <span class="text-secondary">Don't have an account? </span>
          <router-link to="/signup" class="text-decoration-none"
            >Sign up</router-link
          >
        </div>
      </div>
      <AuthHero />
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";

import AuthHero from "@/components/auth/AuthHero.vue";
import LineText from "@/components/common/LineText.vue";
import GoogleIcon from "@/components/icons/GoogleIcon.vue";
import FixedAlert from "@/components/ui/FixedAlert.vue";

export default {
  name: "LoginView",
  components: {
    AuthHero,
    LineText,
    GoogleIcon,
    FixedAlert,
  },
  data() {
    return {
      email: "",
      password: "",
      variant: "",
      alertContent: "",
      isAlert: false,
    };
  },
  setup() {
    const authStore = useAuthStore();

    return { authStore };
  },
  created() {},
  methods: {
    async loginWithEmail() {
      try {
        const response = await this.authStore.loginWithEmail(
          this.email,
          this.password
        );
      } catch (error) {
        this.variant = "alert-danger";
        this.alertContent = error.message;
        this.showAlert();
      }
    },
    async loginWithGoogle() {
      try {
        const response = await this.authStore.loginWithGoogle();
      } catch (error) {
        this.variant = "alert-danger";
        this.alertContent = error.message;
        this.showAlert();
      }
    },
    showAlert() {
      this.isAlert = true;
      setTimeout(() => {
        this.isAlert = false;
      }, 5000);
    },
  },
};
</script>

<style lang="scss"></style>
