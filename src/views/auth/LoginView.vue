<template>
  <div class="container-fluid vh-100">
    <div class="row h-100 justify-content-around">
      <div class="col-12 col-lg-4 my-auto px-5 offset-lg-1">
        <div class="mb-5">
          <h1 class="text-dark-blue">Login</h1>
          <p class="text-black-50">Ready to explore Singapore?</p>
        </div>
        <form @submit.prevent="login()">
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
              <label class="form-check-label" for="rememberCheck"
                >Remember Me</label
              >
            </div>
            <router-link to="/signup" class="link-primary"
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
            class="btn btn-light w-100"
            @click="loginGoogle()"
          >
            Sign In with Google
          </button>
        </div>
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
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import AuthHero from "@/components/auth/AuthHero.vue";
import LineText from "@/components/LineText.vue";

export default {
  name: "LoginView",
  components: {
    AuthHero,
    LineText,
  },
  data() {
    return {
      email: "",
      password: "",
      token: null,
      user: null,
    };
  },
  created() {
    console.log(this.user);
  },
  methods: {
    login() {
      const vm = this;
      const auth = getAuth();

      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          vm.user = userCredential.user;
          vm.$router.push("/home");
        })
        .catch((error) => {
          alert("User not found!");
        });
    },
    loginGoogle() {
      const vm = this;
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {
          vm.user = result.user;
          vm.$router.push("/home");
        })
        .catch((error) => {
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);

          console.log(error.message);
        });
    },
  },
};
</script>

<style></style>
