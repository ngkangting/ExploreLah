<template>
  <div class="container-fluid vh-100">
    <div class="row h-100 justify-content-around">
      <div class="col-12 col-lg-4 my-auto px-5 offset-lg-1">
        <div class="mb-5">
          <h1 class="text-dark-blue">Sign Up</h1>
          <p class="text-black-50">
            Register to take your trip planning to the next level!
          </p>
        </div>
        <form @submit.prevent="signUpUser()">
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
          <div class="mb-4">
            <label for="confirmPasswordInput" class="form-label"
              >Confirm Password<span class="text-danger">*</span></label
            >
            <input
              type="password"
              class="form-control"
              id="confirmPasswordInput"
              v-model="confirmPassword"
              required
            />
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-pink w-100">Sign Up</button>
          </div>
        </form>
        <LineText content="OR" />
        <div class="mb-5">
          <button type="button" class="btn btn-light w-100">
            Sign Up with Google
          </button>
        </div>
        <div class="text-center">
          <span class="text-secondary">Already have an account? </span>
          <router-link to="/">Login</router-link>
        </div>
      </div>
      <AuthHero />
    </div>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import AuthHero from "@/components/auth/AuthHero.vue";
import LineText from "@/components/LineText.vue";

export default {
  name: "SignUpView",
  components: {
    AuthHero,
    LineText,
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      user: null,
    };
  },
  methods: {
    signUpUser() {
      const vm = this;
      const auth = getAuth();

      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          vm.user = userCredential.user;
          vm.$router.push("/home");
        })
        .catch((error) => {
          console.log(error.message);
          alert("Unsuccessful Sign Up!");
        });
    },
  },
};
</script>

<style></style>
