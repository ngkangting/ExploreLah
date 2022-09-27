<template>
  <div class="container-fluid vh-100">
    <div class="row h-100 justify-content-around position-relative">
      <div class="col-12 col-lg-4 my-auto px-5 offset-lg-1">
        <router-link to="/" class="position-absolute top-0 start-0 mt-3 ms-3"
          >Back to login</router-link
        >
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
          <router-link to="/signup">Sign up</router-link>
        </div>
      </div>
      <AuthHero />
    </div>
  </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import AuthHero from "@/components/auth/AuthHero.vue";

export default {
  name: "ForgotPasswordView",
  components: {
    AuthHero,
  },
  data() {
    return {
      email: "",
    };
  },
  created() {},
  methods: {
    resetPassword() {
      const auth = getAuth();

      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          alert("Password reset email sent");
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>

<style></style>
