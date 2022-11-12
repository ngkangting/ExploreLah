<template>
  <div class="container-fluid h-100">
    <div class="row min-vh-100 justify-content-around">
      <FixedAlert
        :variant="variant"
        :alertContent="alertContent"
        v-if="isAlert"
      />
      <div class="col-12 col-lg-5 offset-lg-1 my-auto px-5">
        <RoundLink
          class="position-absolute top-0 start-0 mt-4 ms-3 mt-lg-4 ms-lg-4"
          :path="'/login'"
          :height="50"
          :width="50"
        >
          <i class="bi-chevron-left text-secondary" style="font-size: 1rem"></i>
        </RoundLink>
        <div class="my-5">
          <h1 class="text-dark-blue">Forgot Password?</h1>
          <p class="text-black-50">
            Enter your email address and we'll send you instructions to reset
            your password
          </p>
        </div>
        <form @submit.prevent="resetPassword()" class="mb-5">
          <div class="mb-4">
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
          <div class="text-center">
            <button
              type="submit"
              class="btn btn-pink w-100"
              :disabled="isLoading"
            >
              Reset Password
            </button>
          </div>
        </form>
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
import FixedAlert from "@/components/ui/FixedAlert.vue";
import RoundLink from "@/components/ui/RoundLink.vue";

export default {
  name: "ForgotPasswordView",
  components: {
    AuthHero,
    RoundLink,
    FixedAlert,
  },
  data() {
    return {
      email: "",
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
    async resetPassword() {
      this.isLoading = true;

      try {
        const response = await this.authStore.resetPassword(this.email);

        if (response) {
          this.variant = "alert-success";
          this.alertContent = "We have e-mailed your password reset link!";
          this.showAlert();
        }
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
