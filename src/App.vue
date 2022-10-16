<template>
  <NavBar v-if="!this.$route.meta.hideNavBar" />
  <RouterView />
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import {useItineraryStore} from "@/stores/itinerary";
import NavBar from "@/components/layout/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  setup() {
    const authStore = useAuthStore();
    const itineraryStore = useItineraryStore();
    return { authStore, itineraryStore };
  },
  beforeMount() {
    this.authStore.fetchUser();
  },
};
</script>

<style lang="scss"></style>
