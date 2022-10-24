<template>
  <div class="p-4 bg-dark-blue">
    <div class="row top container-fluid p-5 text-white">
      <div class="top-words col-12 col-lg-6 bg-dark-blue p-5">
        <h1 class="fw-bold pb-2">Singapore is yours to explore!</h1>
        <h5>
          Planning your itinerary has never been easier with ExploreLah!
        </h5>
        <span class="btn-special my-3">Start Planning!</span>
      </div>
      <div class="train col-lg-6 d-none d-lg-block d-xl-block mb-5 pb-5">
        <div class="sliding-container pt-1">
          <div class="sliding-background"></div>
        </div>
        <img
          class="train-pic"
          src="../assets/img/train.png"
          alt="train">
      </div>
      </div>
  </div>


  <div class="mx-5">
    <h1 class="fw-bold text-center mt-5 py-5">
      Features to replace all your other tools
    </h1>
    <div class="row text-center justify-content-center">
      <div class="feature col-12 col-sm-6 col-lg-4 p-3">
        <div class="row picture align-items-center">
          <img
            class="w-50 p-2 mx-auto"
            src="../assets/img/feature2.png"
            alt="feature2"
          />
        </div>
        <h4>Optimise your route</h4>
        <p class="text-secondary">Minimise travel time. Maximise fun.</p>
      </div>

      <div class="feature col-12 col-sm-6 col-lg-4 p-3">
        <div class="row picture align-items-center">
          <img
            class="w-25 p-2 mx-auto"
            src="../assets/img/feature3.png"
            alt="feature3"
          />
        </div>
        <h4>Check weather forecast</h4>
        <p class="text-secondary">
          Be fully prepared for your amazing day with equipment of your choice
          (e.g umbrella, sunblock).
        </p>
      </div>
      <div class="feature col-12 col-sm-6 col-lg-4 p-3">
        <div class="row picture align-items-center">
          <img
            class="w-25 p-2 mx-auto"
            src="../assets/img/feature4.png"
            alt="feature4"
          />
        </div>
        <h4>Check live traffic conditions</h4>
        <p class="text-secondary">
          Planning to travel by car? Traffic can be tough sometimes.
        </p>
      </div>

      <div class="feature col-12 col-sm-6 col-lg-4 p-3">
        <div class="row picture align-items-center">
          <img
            class="w-25 p-2 mx-auto"
            src="../assets/img/feature1.jpg"
            alt="feature1"
          />
        </div>
        <h4>Personalise your itinerary with just a few clicks</h4>
        <p class="text-secondary">
          Plan your best trip based on your travel preferences in the easiest
          possible way.
        </p>
      </div>

      <div class="feature col-12 col-sm-6 col-lg-4 p-3">
        <div class="row picture align-items-center">
          <img
            class="w-25 p-2 mx-auto"
            src="../assets/img/feature5.png"
            alt="feature5"
          />
        </div>
        <h4>Download your itinerary to your phone</h4>
        <p class="text-secondary">
          No wifi, no problem. Your trip plans can be downloaded for access
          anywhere.
        </p>
      </div>
    </div>
  </div>

  <div class="mx-5">
    <h1 class="fw-bold text-center mt-5 py-5">
      How It Works
    </h1>

    <div class="row justify-content-center">
      <div class="col-5 bg-pink d-flex justify-content-center align-items-center py-3">
        <lottie-player src="https://lottie.host/712cd913-eaae-47e7-b808-a59e233c96f4/t26HzyDftD.json" background="transparent" speed="1" style="width: 150px; height: 150px;" loop autoplay></lottie-player>
      </div>
      <div class="col-5 d-flex justify-content-center align-items-center">
        <div class="m-4">
          <h2>
            <i class="bi bi-1-circle"></i>
            Location
          </h2>
          <div>
            Let us know where you're currently staying so we have an idea of whats near you!
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-5 d-flex justify-content-center align-items-center">
        <div class="m-4">
          <h2>
            <i class="bi bi-2-circle"></i>
            Duration
          </h2>
          <div>
            Tell us how long you plan on hanging around Singapore!
          </div>
        </div>
      </div>
      <div class="col-5 bg-light-pink d-flex justify-content-center align-items-center">
        <lottie-player src="https://lottie.host/048ba3f9-a020-4b50-bdc6-8b83e1756fee/YkvCh1R331.json" background="transparent" speed="1" style="width: 180px; height: 180px;" loop autoplay></lottie-player>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-5 bg-light-blue d-flex justify-content-center align-items-center">
        <lottie-player src="https://lottie.host/68c62294-996a-42ad-adb4-9d32e0f9d46a/uJcTvqPOAh.json" background="transparent" speed="1" style="width: 190px; height: 190px;" loop autoplay></lottie-player>
      </div>
      <div class="col-5 d-flex justify-content-center align-items-center">
        <div class="m-4">
          <h2>
            <i class="bi bi-3-circle"></i>
            Preferences
          </h2>
          <div>
            Use our sliders to indicate what you'd rather do around Singapore.
          </div>
        </div>
      </div>
    </div>
    
    <div class="row justify-content-center">
      <div class="col-5 d-flex justify-content-center align-items-center">
        <div class="m-4">
          <h2>
            <i class="bi bi-4-circle"></i>
            Transportation
          </h2>
          <div>
            Whether you're taking the MRT, bus or private transport, we will plan the best route for you!
          </div>
        </div>
      </div>
      <div class="col-5 bg-blue d-flex justify-content-center align-items-center py-3">
        <lottie-player src="https://lottie.host/4dc34aa3-8885-4abd-b4f6-420193871a48/MNifFgZ0g3.json" background="transparent" speed="1" style="width: 150px; height: 150px;" loop autoplay></lottie-player>
      </div>
    </div>
  </div>


  <div class="m-5 px-5">
    <h1 class="fw-bold text-center mt-5 py-5">
      Iconic Landmarks in Singapore
    </h1>
    <div class="row justify-content-center">
      <div class="landmark p-2 col-12 col-md-12 col-lg-8">
        <img 
          class="w-100"
          src="../assets/img/Landmark1.jpg" 
          alt="Landmark1"
        />
        <div class="description p-3 text-white fw-bolder">
          <h2>GARDENS BY THE BAY</h2>
        </div>
      </div>
      <div class="landmark p-2 col-12 col-md-6 col-lg-4">
        <img 
          class="w-100"
          src="../assets/img/Landmark2.jpg" 
          alt="Landmark2"
        />
        <div class="description p-3 text-white fw-bolder">
          <h2>S.E.A AQUARIUM</h2>
        </div>
      </div>
      <div class="landmark p-2 col-12 col-md-6 col-lg-4">
        <img 
          class="w-100"
          src="../assets/img/Landmark3.jpg" 
          alt="Landmark3"
        />
        <div class="description p-3 text-white fw-bolder">
          <h2>HAJI LANE</h2>
        </div>
      </div>
      <div class="p-2 col-12 col-md-12 col-lg-4">
        <div class="d-flex justify-content-center align-items-center bg-light-blue h-100 w-100 text-center p-5 rounded-5">
          <div class="h3 fw-bold w-90">258</div>&nbsp;&nbsp;&nbsp;
          <div>trips planned in the last hour</div>
        </div>
      </div>
      <div class="landmark p-2 col-12 col-md-6 col-lg-4">
        <img 
          class="w-100"
          src="../assets/img/Landmark4.jpg" 
          alt="Landmark4"
        />
        <div class="description p-3 text-white fw-bolder">
          <h2>JEWEL CHANGI AIRPORT</h2>
        </div>
      </div>
      <div class="landmark p-2 col-12 col-md-6 col-lg-4">
        <img 
          class="w-100"
          src="../assets/img/Landmark5.jpg" 
          alt="Landmark5"
        />
        <div class="description p-3 text-white fw-bolder">
          <h2>MASJID SULTAN</h2>
        </div>
      </div>
      <div class="landmark p-2 col-12 col-md-12 col-lg-8">
        <img 
          class="w-100"
          src="../assets/img/Landmark6.jpg" 
          alt="Landmark6"
        />
        <div class="description p-3 text-white fw-bolder">
          <h2>MARINA BAY SANDS</h2>
        </div>
      </div>
    </div>
  </div> 

  <div class="m-5">
    <h1 class="text-center mt-5 fw-bold py-5">Don't just take our word for it</h1>
    <vueper-slides
    class="no-shadow m-5"
    :visible-slides="3"
    :gap="3"
    :slide-ratio="1 / 4"
    :dragging-distance="200"
    :breakpoints="{ 992: { visibleSlides: 2 },  576: { visibleSlides: 1 } }"
    :infinite="true"
    :arrows-outside="true"
    bullets-outside
    autoplay
    >
      <template #arrow-left>
        <i class="bi bi-arrow-left-circle display-6 text-dark-blue"></i>
      </template>

      <template #arrow-right>
        <i class="bi bi-arrow-right-circle display-6 text-dark-blue"></i>
      </template>
      <vueper-slide 
      class="p-4 rounded-5"
      v-for="(slide, i) in slides" 
      :key="i" 
      style="background-color: #f8f9fa;"
      >
        <template #content>
          <div style="min-height: 150px">
            <p class="py-2">
              <i class="bi bi-quote border border-0 rounded-circle p-2 bg-dark-blue text-white"></i>
            </p>
            <p class="fw-bold text-dark-blue">
              {{ slide.title }}
            </p>
            <p class="text-dark-blue">
              {{ slide.content }}
            </p>
          </div>
          <h3 class="text-pink">
            {{ slide.stars}}
          </h3>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>

  <div>
    <h1 class="fw-bold text-center mt-5 py-5">Ready to plan your trip in half the time?</h1>
    <div class="d-flex justify-content-center">
      <h4 class="btn-special">Plan Now</h4>
    </div>
  </div>

  
  <div>
    <img
      class="w-100 mx-auto d-block"
      src="../assets/img/skyline.png"
      alt="Skyline Image"
    />
  </div>

  <Footer></Footer>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Footer,
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      initialActiveCards: 0,
      slides: [
          {
            title: "John",
            content:
              "ExploreLah makes planning activities really easy! Highly recommend.",
            stars: "★★★★★",
          },
          {
            title: "Derrick",
            content:
              "Easy to use and convenient! Wish I had something like this for overseas too.",
            stars: "★★★★☆",
          },
          { title: "Prof Mok", 
          content: 
              "Amazing app! A+!", 
            stars: "★★★★★" 
          },
          {
            title: "Nicole",
            content:
              "Great app that saved me a lot of time while I was travelling",
            stars: "★★★★☆",
          },
          {
            title: "Instructor Jason",
            content: 
              "Aesthetically pleasing and really user friendly!",
            stars: "★★★★★",
          },
          {
            title: "TA Chen",
            content: 
              "App is so useful! Will never stop using it",
            stars: "★★★★★",
          },
      ],
    };
  },
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },

  methods: {
    async logoutUser() {
      try {
        const response = await this.authStore.logoutUser();
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style lang="scss">

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1200px, 0, 0); /* The image width */
  }
}

.sliding-background {
  background: url("../assets/img/slidingBackground.png") repeat-x;
  height: 350px;
  width: 1800px; /* The image width times 2 */
  animation: slide 60s linear infinite;
}

.sliding-container {
  overflow: hidden;
}

.train {
  position: relative;
}

.train-pic {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width:100%;
  height:auto;
}

.btn-special {
  cursor: pointer;
  clear: both;
  border-radius: 5px;
  padding: 7px 12px 7px 12px;
  display: inline-block;
  transition: all 0.8s, color 0.3s 0.3s;
  cursor: pointer;
  background: #ff8397;
  color: #fff;
}

a.btn-special:hover,
span.btn-special:hover {
  color: #fff;
}

.btn-special:hover {
  box-shadow: 127px 0 0 0 #f44a66 inset, -127px 0 0 0 #f44a66 inset;
}

.vueperslides__bullet .default {
  border-color: #174877;
  box-shadow: none;
  width: 13px;
  height: 13px;
}

.vueperslides__bullet--active .default {
  background-color: #174877;
}

.feature {
  min-height: 300px;
}

.picture {
  min-height: 150px;
}

.bg-light-pink {
  background-color: #ffdee1!important;
}

.landmark {
  position: relative;
  box-sizing:border-box;
  overflow: hidden;
  z-index:1;
  border-radius: 30px;
}

.landmark img{
  transition: 0.5s all ease-in-out;
  border-radius: 30px;
}

.landmark:hover img {
  transform: scale(1.5);
}

.description {
  position: absolute;
  bottom: 0;
  background: rgba(255,255,255,0); /* Black background with 0.5 opacity */
  bottom: 0;
  right: 0;
  left: 0;
  top:0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>