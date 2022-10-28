<template>
  <div>
    <div class="row d-flex align-items-center justify-content-center mb-5" style="background-color: #d6f4ff"
      :style="{ height: 'calc(100vh - 75px)' }">
      <div class="col-lg-6">
        <h1 class="display-4 fw-bold lh-1 text-center ps-5">
          We help you make exploring Singapore easier than ever.
        </h1>
      </div>
      <div class="col-lg-6 d-flex justify-content-center pe-5">
        <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_5i5tlydx.json" background="transparent"
          speed="1" style="width: 400px; height: 400px" hover loop autoplay></lottie-player>
      </div>
    </div>
    <div v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0 }"
      class="row d-flex align-items-center justify-content-center p-5 my-5 mx-5">
      <h3 style="color: #ff8397; font-weight: bold">About Us</h3>
      <p class="lead">
        ExploreLah! enables you to quickly and easily explore Singapore’s
        offerings and create personalized itineraries by utilizing local
        expertise and cutting-edge artificial intelligence. Our algorithm does
        all the research for you and compiles the best destinations into one
        place. All you need to do is decide when you want to start and end your
        trip, and adjust your preferences. Our trip planner does the rest.
        Drawing from a database of over 260 attractions, Explorelah! makes trip
        planning easy, intuitive and enjoyable for anyone and everyone from
        tourists visiting Singapore to locals who want to explore what the city
        has to offer.
      </p>
    </div>
  </div>

  <div v-motion-slide-visible-once-left class="row row-cols-1 row-cols-md-2 mx-5 mb-5">
    <div class="col">
      <div class="card h-100 text-center p-5" style="background-color: #174877; border: none; color: white">
        <div class="mx-auto">
          <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_x9h8ar8l.json" background="transparent"
            speed="1" style="width: 200px; height: 200px" hover loop autoplay>
          </lottie-player>
        </div>
        <div class="card-body">
          <h3 class="card-title">Our Mission</h3>
          <p class="card-text">
            To create a platform that makes planning trips quick and efficient,
            enabling more travelers to explore the wonders of Singapore.
            ExploreLah! has been committed to solving travelers' various
            problems when planning trips from what to eat to preparing for the
            weather travelers will encounter during their trip.
          </p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100 text-center p-5" style="border-color: #174877; border: solid 2px; color: #174877">
        <div class="card-body">
          <h3 class="card-title">Our Vision</h3>
          <p class="card-text">
            By making planning trips around Singapore easier, we hope to
            effectively promote inbound tourism for Singapore so more are able
            to explore what our beautiful city has to offer.
          </p>
        </div>
        <div class="mx-auto">
          <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_swnrn2oy.json" background="transparent"
            speed="1" style="width: 300px; height: 300px" hover loop autoplay>
          </lottie-player>
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
