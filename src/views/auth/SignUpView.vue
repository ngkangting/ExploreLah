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
          <h1 class="text-dark-blue">Sign Up</h1>
          <p class="text-black-50">
            Create an account to take your trip planning to the next level!
          </p>
        </div>
        <form @submit.prevent="registerUser()">
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
              <input type="checkbox" class="form-check-input" id="termsCheck" />
              <label class="form-check-label text-secondary" for="termsCheck"
                >I have read and agree to the
                <router-link to="/signup" class="text-decoration-none"
                  >Terms of Service</router-link
                ></label
              >
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-pink w-100">Sign Up</button>
          </div>
        </form>
        <LineText content="OR" />
        <div class="mb-5">
          <button
            type="button"
            class="btn btn-light-gray w-100"
            @click="loginWithGoogle()"
          >
            <GoogleIcon class="me-2" /> Sign Up with Google
          </button>
        </div>
        <div class="text-center">
          <span class="text-secondary">Already have an account? </span>
          <router-link to="/" class="text-decoration-none">Login</router-link>
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
  name: "SignUpView",
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
  methods: {
    async registerUser() {
      try {
        const response = await this.authStore.registerUser(
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
  },
};
</script>

<style lang="scss"></style>
