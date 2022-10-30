<template>
  <NavBar v-if="!this.$route.meta.hideNavBar" />
  <main>
    <RouterView
      :class="[this.$route.meta.hideNavBar ? 'bg-white' : 'bg-light']"
      :style="[
        this.$route.meta.hideNavBar
          ? { 'min-height': `100vh` }
          : { 'min-height': `calc(100vh - 75px)` },
      ]"
    />
  </main>
  <Footer v-if="!this.$route.meta.hideNavBar" />
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import { useItineraryStore } from "@/stores/itinerary";
import NavBar from "@/components/layout/NavBar.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
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
