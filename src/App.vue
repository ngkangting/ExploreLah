<template>
  <NavBar v-if="!this.$route.meta.hideNavBar" />
  <RouterView
    :class="[
      this.$route.meta.hideNavBar ? 'bg-white' : 'bg-light',
      this.$route.meta.hideNavBar ? '' : 'py-4',
      this.$route.meta.hideNavBar ? '' : 'px-5',
    ]"
    style="min-height: calc(100vh - 75px)"
  />
</template>

<script>
import { useAuthStore } from "@/stores/auth";

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

    return { authStore };
  },
  beforeMount() {
    this.authStore.fetchUser();
  },
};
</script>

<style lang="scss"></style>
