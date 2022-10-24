<template>
  <NavBar v-if="!this.$route.meta.hideNavBar" />
  <RouterView
    :class="[
      this.$route.meta.hideNavBar ? 'bg-white' : 'bg-light',
      this.$route.meta.hideNavBar ? '' : 'py-5 px-5',
    ]"
    :style="[
      this.$route.meta.hideNavBar
        ? { 'min-height': `100vh` }
        : { 'min-height': `calc(100vh - 75px)` },
    ]"
  />
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import { useItineraryStore } from "@/stores/itinerary";
import NavBar from "@/components/layout/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {};
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
