<template>
  <div class="text-center align-middle">Home</div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import {useItineraryStore} from "@/stores/itinerary";

export default {
  name: "HomeView",
  data() {
    return {};
  },
  setup() {
    const authStore = useAuthStore();
    const itineraryStore = useItineraryStore();
    return { authStore,itineraryStore };
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
