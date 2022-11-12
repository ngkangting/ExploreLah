<template>
  <div
  v-motion-pop
  class="mb-0 pb-2 bg-light pt-5"
  :style="{ minHeight: 'calc(100vh - 75px)' }"
  >
  <MerlionMascot :posX=250 :posY=685></MerlionMascot>
    <div class="d-flex justify-content-center align-items-center">
      <h1 class="d-flex fw-bold justify-content-center pt-4 px-3 text-center">
        Singapore is yours to EXPLORE!
      </h1>
    </div>

    <div class="row d-md-none d-lg-none d-xl-none justify-content-center">
      <div class="col-5 pt-5 pb-0 d-">
        <div
          class="sm bg-light-pink p-1 d-flex justify-content-center align-items-center"
        >
          <img
            class="h-75 w-75"
            src="../assets/img/small-1.png"
            alt="cloud forest and flower dome"
          />
        </div>
        <div
          class="med bg-blue p-1 d-flex justify-content-center align-items-center"
        >
          <img
            class="h-100"
            src="../assets/img/med-2.png"
            alt="supertree at garden by the bay"
          />
        </div>
      </div>
      <div class="col-5 pt-5 pb-0">
        <div
          class="med bg-light-blue p-1 d-flex justify-content-center align-items-center"
        >
          <img class="h-100" src="../assets/img/med-3.png" alt="ferris wheel" />
        </div>
        <div
          class="sm bg-dark-blue p-1 d-flex justify-content-center align-items-center"
        >
          <img
            class="h-100"
            src="../assets/img/small-2.png"
            alt="art science museum"
          />
        </div>
      </div>
    </div>

    <div class="d-md-none d-lg-none d-xl-none">
      <lottie-player
        class="car"
        src="https://assets4.lottiefiles.com/packages/lf20_JOHmpu.json"
        background="transparent"
        speed="0.6"
        style="width: auto; height: 100px;"
        loop
        autoplay
      ></lottie-player>
      <div class="d-flex justify-content-center">
        <h6>
          <router-link to="/plan" class="btn-special-blue text-decoration-none">
          Start Planning!
          </router-link>
        </h6>
      </div>
    </div>

    <div class="row justify-content-center mx-5">
      <div class="col-lg-2 d-none d-lg-block d-xl-block pb-0">
        <div class="px-2 mb-0 pb-0">
          <div class="pb-2">
            <i
              class="bi bi-quote border border-0 rounded-circle p-1 mb-4 bg-mid-pink text-white small"
            ></i>
          </div>
          <div class="m-0 p-0">
            <p class="type p-0 m-0">Oh, the places you'll go!</p>
            <p
              class="type text-secondary font-italic fst-italic fw-lighter small m-0 py-0 ps-3"
            >
              <span> - Dr. Seuss </span>
            </p>
          </div>
        </div>
        <div
          class="med bg-dark-blue p-1 d-flex justify-content-center align-items-center"
        >
          <img class="w-75" src="../assets/img/med-1.png" alt="marina bay" />
        </div>
      </div>

      <div
        class="col-md-3 col-lg-2 pt-5 pb-0 d-none d-md-block d-lg-block d-xl-block"
      >
        <div
          class="sm bg-light-pink p-1 d-flex justify-content-center align-items-center"
        >
          <img
            class="h-75 w-75"
            src="../assets/img/small-1.png"
            alt="cloud forest and flower dome"
          />
        </div>
        <div
          class="med bg-blue p-1 d-flex justify-content-center align-items-center"
        >
          <img
            class="h-100"
            src="../assets/img/med-2.png"
            alt="supertree at garden by the bay"
          />
        </div>
      </div>

      <div
        class="col-md-3 col-lg-2 pt-2 pb-0 d-none d-md-block d-lg-block d-xl-block"
      >
        <div
          class="lg bg-mid-pink p-1 d-flex justify-content-center align-items-center"
        >
          <img class="h-75 w-75" src="../assets/img/large.png" alt="merlion" />
        </div>
      </div>

      <div
        class="col-md-3 col-lg-2 pt-5 pb-0 d-none d-md-block d-lg-block d-xl-block"
      >
        <div
          class="med bg-light-blue p-1 d-flex justify-content-center align-items-center"
        >
          <img class="h-100" src="../assets/img/med-3.png" alt="ferris wheel" />
        </div>
        <div
          class="sm bg-dark-blue p-1 d-flex justify-content-center align-items-center"
        >
          <img
            class="h-100"
            src="../assets/img/small-2.png"
            alt="art science museum"
          />
        </div>
      </div>

      <div class="col-lg-2 d-none d-lg-block d-xl-block pb-0">
        <div
          class="sm d-flex justify-content-center align-items-center position-relative"
        >
          <img class="w-25" src="../assets/img/compass.gif" alt="icon" />
          <img
            class="explore-icon w-50"
            src="../assets/img/circle-explore-icon.png"
            alt="icon"
          />
        </div>
        <div
          class="med bg-light-pink p-1 d-flex justify-content-center align-items-center"
        >
          <img class="h-100" src="../assets/img/med-4.png" alt="pagoda" />
        </div>
      </div>
    </div>

    <div class="d-none d-md-block d-lg-block d-xl-block">
      <span class="d-flex justify-content-center me-5 pe-5">
        <lottie-player
          class="car"
          src="https://assets4.lottiefiles.com/packages/lf20_JOHmpu.json"
          background="transparent"
          speed="0.6"
          style="width: 700px; height: 60px"
          loop
          autoplay
        ></lottie-player>
        <h4>
          <router-link to="/plan" class="d-flex justify-content align-items-center btn-special-blue text-center me-5 text-decoration-none">
            Start Planning
          </router-link>
        </h4>
      </span>
    </div>
  </div>

  <div class="mx-5 px-5">
    <h1 class="fw-bold text-center mt-5 py-5">
      Features to replace all your other tools
    </h1>
    <div
      v-motion-slide-visible-once-left
      class="row text-center justify-content-center"
    >
      <div class="feature col-12 col-md-6 col-lg-3 p-4">
        <div class="row picture align-items-center">
          <img
            class="w-50 p-2 mx-auto"
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

      <div class="feature col-12 col-md-6 col-lg-3 p-4">
        <div class="row picture align-items-center">
          <img
            class="w-75 p-2 mx-auto"
            src="../assets/img/feature2.png"
            alt="feature2"
          />
        </div>
        <h4>Optimise your route</h4>
        <p class="text-secondary">Minimise travel time. Maximise fun.</p>
      </div>

      <div class="feature col-12 col-md-6 col-lg-3 p-4">
        <div class="row picture align-items-center">
          <img
            class="w-50 p-2 mx-auto"
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

      <div class="feature col-12 col-md-6 col-lg-3 p-4">
        <div class="row picture align-items-center">
          <img
            class="w-50 p-2 mx-auto"
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
    <h1 class="fw-bold text-center mt-5 py-5">How It Works</h1>

    <div class="row fixed justify-content-center">
      <div
        class="col-5 rounded-4 d-none d-sm-block d-md-block d-lg-block d-xl-block"
        style="background-color: #ff8397"
      >
        <img
          src="../assets/img/gif1.gif"
          alt="gif1"
          class="d-block mx-auto w-75"
        />
      </div>
      <div
        class="col-12 col-sm-5 d-flex justify-content-center align-items-center"
      >
        <div class="m-4">
          <h2>
            <i class="bi bi-1-circle text-pink"></i>
            Location
          </h2>
          <div>
            Let us know where you want to start from so we have an idea of
            whats near you!
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div
        class="col-12 col-sm-5 d-flex justify-content-center align-items-center"
      >
        <div class="m-4">
          <h2>
            <i class="bi bi-2-circle text-newlightpink"></i>
            Duration
          </h2>
          <div>Tell us how long you plan on hanging around Singapore!</div>
        </div>
      </div>
      <div
        class="col-5 bg-newlightpink d-flex py-1 rounded-4 d-none d-sm-block d-md-block d-lg-block d-xl-block"
      >
        <img
          src="../assets/img/gif2.gif"
          alt="gif2"
          class="d-block mx-auto w-50"
        />
      </div>
    </div>

    <div class="row justify-content-center">
      <div
        class="col-5 bg-light-blue py-4 d-flex rounded-4 d-none d-sm-block d-md-block d-lg-block d-xl-block"
      >
        <img
          src="../assets/img/gif3.gif"
          alt="gif3"
          class="w-50 d-block mx-auto"
        />
      </div>
      <div
        class="col-12 col-sm-5 d-flex justify-content-center align-items-center"
      >
        <div class="m-4">
          <h2>
            <i class="bi bi-3-circle text-light-blue"></i>
            Preferences
          </h2>
          <div>
            Use our sliders to indicate what you'd rather do around Singapore.
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div
        class="col-12 col-sm-5 d-flex justify-content-center align-items-center"
      >
        <div class="m-4">
          <h2>
            <i class="bi bi-4-circle text-blue"></i>
            Transportation
          </h2>
          <div>
            Whether you're taking the MRT, bus or private transport, we will
            plan the best route for you!
          </div>
        </div>
      </div>
      <div
        class="col-5 bg-blue d-flex rounded-4 d-none d-sm-block d-md-block d-lg-block d-xl-block"
      >
        <img
          src="../assets/img/gif4.gif"
          alt="gif4"
          class="d-block mx-auto w-50"
        />
      </div>
    </div>
  </div>

  <div class="mx-5">
    <h1 class="fw-bold text-center mt-5 py-5">
      Don't just take our word for it
    </h1>
    <div class="row justify-content-center">
      <div class="col-5 col-md-3 justify-content-center">
        <div class="p-2">
          <div class="py-2 review">
            <div class="py-2 d-flex">
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink"
                style="font-size: 1.4rem"
              ></i>
            </div>
            <p>
              Amazing app! It is so easy to use and the planning feature is so
              cool. A+!
            </p>
            <p class="text-muted">- Professor Mok</p>
          </div>
          <div class="py-2 review">
            <div class="py-2 d-flex">
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink"
                style="font-size: 1.4rem"
              ></i>
            </div>
            <p>
              ExploreLah makes planning activities really easy! Highly
              recommend.
            </p>
            <p class="text-muted">- Instructor Jason</p>
          </div>
        </div>
      </div>
      <div
        class="col-md-3 d-none d-md-flex d-lg-flex d-xl-flex d-flex justify-content-center align-items-center"
      >
        <img
          src="../assets/img/merlionReview.gif"
          alt="merlion gif"
          class="w-100"
        />
      </div>
      <div class="col-5 col-md-3 justify-content-center">
        <div class="p-2">
          <div class="py-2 review">
            <div class="py-2 d-flex">
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink"
                style="font-size: 1.4rem"
              ></i>
            </div>
            <p>Great app that saved me a lot of time while I was travelling</p>
            <p class="text-muted">- TA Chen</p>
          </div>
          <div class="py-2 review">
            <div class="py-2 d-flex">
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink me-1"
                style="font-size: 1.4rem"
              ></i>
              <i
                class="bi bi-star-fill text-pink"
                style="font-size: 1.4rem"
              ></i>
            </div>
            <p>
              Easy to use and convenient! Wish I had something like this for
              overseas too.
            </p>
            <p class="text-muted">- Prof Kyong</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div>
    <h1
      class="type d-flex justify-content-center fw-bold text-center mt-5 py-5"
    >
      <span> Ready to plan your trip now? </span>
    </h1>
    <div class="d-flex justify-content-center">
      <h4>
        <router-link to="/plan" class="btn-special text-decoration-none">
        Plan Now
        </router-link>
      </h4>
    </div>
  </div>

  <div>
    <img
      class="w-100 mx-auto d-block"
      src="../assets/img/skyline.png"
      alt="Skyline Image"
    />
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import Footer from "@/components/layout/Footer.vue";
import MerlionMascot from "@/components/common/MerlionMascot.vue";

export default {
  name: "HomeView",
  components: {
    MerlionMascot,
    Footer,
  },
  data() {
    return {};
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
@keyframes t {
  90%,
  100% {
    width: 100%;
  }
}

.type {
  display: inline-flex;
}

.type span {
  word-break: break-all;
  height: 1.2em;
  width: 0%;
  overflow: hidden;
  animation: t 2s linear infinite alternate;
  /*to be fixed*/
}

.type span:before {
  content: " ";
  display: inline-block;
}

.sm,
.med,
.lg {
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.sm {
  height: 70px;
}

.med {
  height: 130px;
}

.lg {
  height: 300px;
}

.explore-icon {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.bg-mid-pink {
  background-color: #ffafbc;
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

.btn-special-blue {
  cursor: pointer;
  clear: both;
  border-radius: 5px;
  padding: 7px 12px 7px 12px;
  display: inline-block;
  transition: all 0.8s, color 0.3s 0.3s;
  cursor: pointer;
  background: #5bb7d8;
  color: #fff;
}

a.btn-special-blue:hover,
span.btn-special:hover {
  color: #fff;
}

.btn-special-blue:hover {
  box-shadow: 127px 0 0 0 #174877 inset, -127px 0 0 0 #174877 inset;
}

.feature {
  min-height: 300px;
}

.picture {
  min-height: 150px;
}

.bg-light-pink {
  background-color: #ffdee1 !important;
}

.card {
  width: 500px;
}

.bg-newlightpink {
  background-color: #fad9e0;
}

.text-newlightpink {
  color: #fad9e0;
}

.review {
  min-height: 300px;
}
</style>
