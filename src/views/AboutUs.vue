<template>
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

  <div v-motion-slide-visible-once-left class="px-5 text-center mb-5">
    <h1 style="color: #ff8397; font-weight: bold">About Us</h1>
    <h3 style="color:#174877">Creating a community of explorers</h3>
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
          <h2 class="card-title" style="color: #ff8397; font-weight: bold">Our Mission</h2>
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
          <h2 class="card-title" style="color: #ff8397; font-weight: bold">Our Vision</h2>
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

  <div v-motion-slide-visible-once-left class="p-5">
    <h1 class="text-center mb-5" style="color: #ff8397; font-weight: bold">Learn more about Us</h1>
    <div class="row mx-auto align-items-center">
      <AboutCard v-for="(card, index) in cards" :key="index" :icon="card.icon" :title="card.title"
        :content="card.content">
      </AboutCard>
    </div>
  </div>

</template>

<script>
import AboutCard from "@/components/common/AboutCard.vue";

export default {
  name: "AboutUs",

  components: {
    AboutCard
  },

  data() {
    return {
      cards: [
        { icon: "bi bi-people", title: "Our Team", content: "hi" },
        { icon: "bi bi-book", title: "Our Story", content: "bye" },
        { icon: "bi bi-code-slash", title: "How we do it", content: "hi" }
      ]
    }
  },

  methods: {},
};
</script>

<style>

</style>
