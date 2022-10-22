<template>
  <div v-motion :initial="{opacity: 0,y: 100,}" :enter="{opacity: 1, y: 0,}">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-lg-6">
        <h1 class="display-4 fw-bold lh-1 text-center ps-5">We help you make exploring Singapore easier than ever.</h1>
      </div>
      <div class="col-lg-6 d-flex justify-content-center pe-5">
        <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_5i5tlydx.json" background="transparent"
          speed="1" style="width: 400px; height: 400px" hover loop autoplay></lottie-player>
      </div>
    </div>
    <div class="row d-flex align-items-center justify-content-center p-5">
      <h3 style="color:#FF8397; font-weight: bold;">About Us</h3>
      <p class="lead">ExploreLah! enables you to quickly and easily explore Singapore’s offerings and create
        personalized
        itineraries by utilizing local expertise and cutting-edge artificial intelligence. Our algorithm does all the
        research for you and compiles the best destinations into one place. All you need to do is decide when you want
        to start and end your trip, and adjust your preferences. Our trip planner does the rest. Drawing from a database
        of
        over 260 attractions Explorelah! makes trip planning easy, intuitive and enjoyable for anyone and everyone from
        tourists
        visiting Singapore to locals who want to explore what the city has to offer.</p>
    </div>
  </div>

  <div v-motion-slide-visible-left class="row row-cols-1 row-cols-md-2 mx-5">
    <div class="col">
      <div class="card h-100 text-center p-5">
        <div class="card-body">
          <h5 class="card-title">Our Mission</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.</p>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-100 text-center p-5">
        <div class="card-body">
          <h5 class="card-title">Our Vision</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
      </div>
    </div>
  </div>

  <Footer class="mt-5"></Footer>
</template>

<script>
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "AboutUs",
  data() { },
  components: {
    Footer
  },
  methods: {},
};

</script>

<style>

</style>
