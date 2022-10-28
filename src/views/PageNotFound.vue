<template>
  <div class="container-fluid px-0 d-flex">
    <div class="row d-flex flex-grow-1 px-5">
      <div
        class="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center"
      >
        <div class="">
          <h1 class="display-3 text-pink fw-semibold">Error 404</h1>
          <h3 class="display-5 fw-medium text-dark-blue">
            Oops! Page not found
          </h3>
          <p class="fs-4 text-secondary fw-medium">
            We could not find the page you were looking for...
          </p>
          <router-link to="/" class="btn btn-pink btn-lg mt-3 fs-6"
            >Back To Home</router-link
          >
        </div>
      </div>
      <div
        class="col-12 col-lg-6 d-none d-lg-block d-flex align-items-center justify-content-center"
      >
        <lottie-player
          class="hero-error"
          background="transparent"
          src="https://assets6.lottiefiles.com/packages/lf20_0hxkpskc.json"
          :speed="1"
          :loop="true"
          :autoplay="true"
        ></lottie-player>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
@media only screen and (max-width: 991px) {
  .hero-error {
    width: 40%;
    height: 100%;
  }
}

@media (min-width: 992px) {
  .hero-error {
    width: 80%;
    height: 100%;
  }
}
</style>
