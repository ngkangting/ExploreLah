<template>
  <div class="text-center align-middle">Home</div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  methods: {
    async logoutUser() {``
      try {
        const response = await this.authStore.logoutUser();
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style></style>
