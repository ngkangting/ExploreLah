<template>
  <div>
    <div class="row d-flex align-items-center justify-content-center mb-5" style="background-color: #d6f4ff"
      :style="{ height: 'calc(100vh - 75px)' }">
      <div class="col-lg-6">
        <h1 class="display-3 fw-bold lh-1 text-center p-5">
          We help you make exploring Singapore easier than ever.
        </h1>
        <h3 class="lh-1 text-center px-5 text-muted w-75 mx-auto">The
          all-in-one platform to create your travel plans.
        </h3>
      </div>
      <div class="col-lg-6 d-flex justify-content-center align-items-center p-5">
        <lottie-player class="w-75 mx-auto" src="https://assets3.lottiefiles.com/private_files/lf30_5i5tlydx.json"
          background="transparent" speed="1" loop autoplay></lottie-player>
      </div>
    </div>
  </div>

  <div v-motion-slide-visible-once-left class="px-5 text-center mb-5">
    <h3 style="color: #ff8397; font-weight: bold">About Us</h3>
    <h5 style="color:#174877">Creating a community of explorers</h5>
    <p class="lead w-50 mx-auto pt-3">
      ExploreLah! enables you to quickly and easily explore Singapore’s offerings and create personalized itineraries by
      utilizing local expertise and cutting-edge artificial intelligence.
    </p>
    <div class="d-flex justify-content-center align-items-center w-50 mx-auto pb-5">
      <lottie-player class="w-75 mx-auto" src="https://assets9.lottiefiles.com/packages/lf20_jmuq5aha.json"
        background="transparent" speed="1" loop autoplay></lottie-player>
    </div>
  </div>

  <div v-motion-slide-visible-once-left class="row row-cols-1 row-cols-md-2 mx-5 mt-5 mb-5">
    <div class="col">
      <div class="card h-100 text-center p-5" style="background-color: #174877; border: none; color: white">
        <div class="mx-auto d-flex justify-content-center">
          <lottie-player style="width:60%" src="https://assets1.lottiefiles.com/packages/lf20_x9h8ar8l.json"
            background="transparent" speed="1" loop autoplay>
          </lottie-player>
        </div>
        <div class="card-body">
          <h3 class="card-title" style="color: #ff8397; font-weight: bold">Our Mission</h3>
          <p class="card-text lead">
            To create a platform that makes planning trips quick and efficient,
            enabling more travelers to explore the wonders of Singapore and solve their various
            problems when planning trips.
          </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100 text-center p-5 my-auto mx-auto"
        style="border-color: #174877; border: solid 2px; color: #174877">
        <div class="card-body">
          <h3 class="card-title" style="color: #ff8397; font-weight: bold">Our Vision</h3>
          <p class="card-text lead">
            By making planning trips around Singapore easier, we hope to
            effectively promote inbound tourism for Singapore so more people are able
            to explore what our beautiful city has to offer.
          </p>
          <div class="mx-auto d-flex justify-content-center">
            <lottie-player class="py-5" style="width:60%"
              src="https://assets6.lottiefiles.com/packages/lf20_swnrn2oy.json" background="transparent" speed="1" loop
              autoplay>
            </lottie-player>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "AboutUs",
  components: {},
  data() { },

  methods: {},
};
</script>

<style>

</style>
