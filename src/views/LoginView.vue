<template>
  <div class="container-fluid vh-100">
    <div class="row h-100">
      <div class="col-12 col-lg-5 align-items-center my-auto px-5">
        <div class="mb-5">
          <h1>Login</h1>
          <p>Ready to explore Singapore?</p>
        </div>
        <form @submit.prevent="loginUser()">
          <div class="mb-3">
            <label for="emailInput" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="emailInput"
              aria-describedby="emailInput"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="passwordInput" class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              id="passwordInput"
              v-model="password"
            />
          </div>
          <div class="mb-5 d-flex justify-content-between">
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
            <a href="#" class="link-primary">Forgot Password?</a>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </div>
        </form>
      </div>
      <div class="col-12 col-lg-7 bg-warning"></div>
    </div>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loginUser() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential);
          alert("Logged In!");
        })
        .catch((error) => {
          console.log(error.message);
          alert("User not found!");
        });
    },
  },
};
</script>

<style></style>
