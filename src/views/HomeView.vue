<template>
  <div class="text-center align-middle">
    <button type="button" class="btn btn-secondary" @click="signOutUser()">
      Logout
    </button>
  </div>
</template>

<script>
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  created() {},
  methods: {
    signOutUser() {
      const vm = this;
      const auth = getAuth();

      signOut(auth)
        .then(() => {
          vm.$router.push("/");
        })
        .catch((error) => {});
    },
  },
};
</script>

<style></style>
