<template>
  <div class="container-fluid vh-100">
    <div class="row h-100 justify-content-around position-relative">
      <FixedAlert
        :variant="variant"
        :alertContent="alertContent"
        v-if="isAlert"
      />
      <div class="col-12 col-lg-4 my-auto px-5 offset-lg-1">
        <RoundLink
          class="position-absolute top-0 start-0 mt-4 ms-4"
          :path="'/'"
          :height="50"
          :width="50"
        >
          <i class="bi-chevron-left text-secondary" style="font-size: 1rem"></i>
        </RoundLink>
        <div class="mb-5">
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
              v-model="email"
              required
            />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-pink w-100">
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
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
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
      isAlert: false,
    };
  },
  methods: {
    resetPassword() {
      const vm = this;
      const auth = getAuth();

      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          vm.variant = "alert-success";
          vm.alertContent = "We have e-mailed your password reset link!";
        })
        .catch((error) => {
          vm.variant = "alert-danger";
          vm.alertContent = "Oops! Something went wrong...";

          console.log(error.message);
        })
        .finally(() => {
          vm.showAlert();
        });
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
