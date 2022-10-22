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
  methods: {},
};
</script>

<style></style>
