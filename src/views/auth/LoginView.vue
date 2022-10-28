<template>
  <div class="container-fluid h-100 px-0">
    <div class="row min-vh-100 pt-5 pt-lg-0 justify-content-around">
      <FixedAlert
        :variant="variant"
        :alertContent="alertContent"
        v-if="isAlert"
      />
      <div class="col-12 col-lg-5 offset-lg-1 my-auto px-5">
        <RoundLink
          class="position-absolute top-0 start-0 mt-4 ms-3 mt-lg-4 ms-lg-4"
          :path="'/'"
          :height="50"
          :width="50"
        >
          <i class="bi-chevron-left text-secondary" style="font-size: 1rem"></i>
        </RoundLink>
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
              placeholder="Enter email address"
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
              placeholder="Enter password"
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
            <button
              type="submit"
              class="btn btn-pink w-100"
              :disabled="isLoading"
            >
              Login
            </button>
          </div>
        </form>
        <LineText content="or" />
        <div class="mb-5">
          <button
            type="button"
            class="btn btn-light-gray w-100 d-flex align-items-center justify-content-center"
            @click="loginWithGoogle()"
            :disabled="isLoading"
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

import RoundLink from "@/components/ui/RoundLink.vue";
import AuthHero from "@/components/auth/AuthHero.vue";
import LineText from "@/components/common/LineText.vue";
import GoogleIcon from "@/components/icons/GoogleIcon.vue";
import FixedAlert from "@/components/ui/FixedAlert.vue";

export default {
  name: "LoginView",
  components: {
    RoundLink,
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
      isLoading: false,
      isAlert: false,
    };
  },
  setup() {
    const authStore = useAuthStore();

    return { authStore };
  },
  methods: {
    async loginWithEmail() {
      this.isLoading = true;

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

      this.isLoading = false;
    },
    async loginWithGoogle() {
      this.isLoading = true;

      try {
        const response = await this.authStore.loginWithGoogle();
      } catch (error) {
        this.variant = "alert-danger";
        this.alertContent = error.message;
        this.showAlert();
      }

      this.isLoading = false;
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
