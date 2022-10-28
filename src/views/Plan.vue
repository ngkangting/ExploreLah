<template>
  <div class="container-fluid d-flex position-relative">
    <div
      class="bg-dark-blue w-100 mx-0 px-0 position-absolute"
      style="height: 250px"
    ></div>
    <div class="row d-flex flex-grow-1 justify-content-center my-5">
      <div class="col-lg-6 card border-0 shadow-sm h-100 p-0">
        <div class="d-stepper mt-4">
          <div class="d-stepper-header d-flex justify-content-around mt-2">
            <div
              class="step-number-content text-center"
              :class="{ active: step == i }"
              v-for="(stepItem, i) in steps"
              :key="i"
            >
              <div
                class="step-number align-items-center justify-content-center mx-auto"
                :class="stepNumberClasses(i)"
                style="font-size: 1.2rem"
              >
                <div
                  class="m-0 p-0 h-100 m-auto d-flex justify-content-center align-items-center"
                  v-html="stepItem.icon"
                ></div>
              </div>
              <div class="mt-1 small fw-bold text-secondary">
                {{ stepItem.name }}
              </div>
            </div>
          </div>
        </div>

        <div class="card-body">
          <div class="mb-5">
            <h5 class="card-title text-center fs-2 fw-bolder mt-4">
              {{ headerText[activePhase].heading }}
            </h5>
            <p class="text-center fs-4 text-secondary">
              {{ headerText[activePhase].secondaryHeading }}
            </p>
          </div>
          <form
            @submit.prevent="generateItinerary()"
            class="needs-validation"
            novalidate
          >
            <!-- Form Part 1 -->
            <template v-if="activePhase === 0">
              <div class="col-lg-8 offset-lg-2 mb-4">
                <label for="location" class="form-label fs-5">Location</label>
                <input
                  type="text"
                  class="form-control"
                  id="location"
                  placeholder="Enter location"
                  v-model="location"
                  required
                />
                <div v-if="!isLocationValid" class="text-danger mt-1">
                  Please enter a location
                </div>
              </div>
              <div class="text-center">
                <button class="btn btn-pink" @click.prevent="goToNextStep()">
                  Next
                </button>
              </div>
            </template>

            <!-- Form Part 2 -->
            <template v-if="activePhase === 1">
              <div class="col-6 offset-3 mb-4 mb-3 form-floating">
                <input
                  type="date"
                  class="form-control"
                  id="start-date"
                  v-model="startDate"
                />
                <label for="start-date" class="form-label">Start Date</label>
              </div>
              <div class="col-6 offset-3 mb-4">
                <label for="duration" class="form-label">Duration</label>
                <input
                  type="number"
                  class="form-control"
                  id="duration"
                  v-model="duration"
                />
                <div class="text-center">
                  <button class="btn btn-link" @click.prevent="goToPrevStep()">
                    Back
                  </button>
                  <button class="btn btn-pink" @click.prevent="goToNextStep()">
                    Next
                  </button>
                </div>
              </div>
            </template>

            <!-- Form Part 3 -->
            <template v-if="activePhase === 2">
              <div class="col-6 offset-3 mb-4">
                <div>
                  <label for="shopping" class="form-label">Shopping</label>
                  <input
                    type="range"
                    class="form-range"
                    min="0"
                    max="5"
                    id="shopping"
                    v-model="shopping"
                  />
                </div>
                <div>
                  <label for="arts-culture" class="form-label"
                    >Arts & Culture</label
                  >
                  <input
                    type="range"
                    class="form-range"
                    min="0"
                    max="5"
                    id="arts-culture"
                    v-model="arts"
                  />
                </div>
                <div>
                  <label for="outdoor" class="form-label">Outdoor</label>
                  <input
                    type="range"
                    class="form-range"
                    min="0"
                    max="5"
                    id="outdoor"
                    v-model="outdoor"
                  />
                </div>
                <div>
                  <label for="adventure" class="form-label">Adventure</label>
                  <input
                    type="range"
                    class="form-range"
                    min="0"
                    max="5"
                    id="adventure"
                    v-model="adventure"
                  />
                </div>
                <div>
                  <label for="nightlife" class="form-label">Nightlife</label>
                  <input
                    type="range"
                    class="form-range"
                    min="0"
                    max="5"
                    id="nightlife"
                    v-model="nightlife"
                  />
                </div>
              </div>
              <div class="text-center">
                <button class="btn btn-link" @click.prevent="goToPrevStep()">
                  Back
                </button>
                <button class="btn btn-pink" @click.prevent="goToNextStep()">
                  Next
                </button>
              </div>
            </template>
            <!-- Form Part 4 -->
            <template v-if="activePhase === 3">
              <div class="col-6 offset-3 mb-4">
                <h6>Transportation Method</h6>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="public-transport"
                    id="public-transport"
                    value="public"
                    v-model="transportation"
                    checked
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Public Transport
                  </label>
                </div>

                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="private-transport"
                    id="private-transport"
                    value="private"
                    v-model="transportation"
                  />
                  <label class="form-check-label" for="private-transport">
                    Private Transport
                  </label>
                </div>
              </div>
              <div class="text-center">
                <button class="btn btn-link" @click.prevent="goToPrevStep()">
                  Back
                </button>

                <button type="submit" class="btn btn-pink">Plan Now!</button>
              </div>
            </template>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useItineraryStore } from "@/stores/itinerary";

import Location from "../assets/svg/location.svg?raw";
import Clock from "../assets/svg/clock.svg?raw";
import Shop from "../assets/svg/shop.svg?raw";
import Transport from "../assets/svg/transport.svg?raw";

export default {
  name: "Plan",
  setup() {
    const itineraryStore = useItineraryStore();
    return { itineraryStore };
  },
  components: {
    Location,
    Clock,
    Shop,
    Transport,
  },
  data() {
    return {
      location: "",
      startDate: "",
      duration: "",
      shopping: 0,
      arts: 0,
      outdoor: 0,
      adventure: 0,
      nightlife: 0,
      transportation: "",
      activePhase: 0,
      checkLocation: false,
      headerText: [
        { heading: "Location", secondaryHeading: "Where will you be staying?" },
        {
          heading: "Duration",
          secondaryHeading: "How many days will this trip be?",
        },
        {
          heading: "Activities",
          secondaryHeading: "What type of activities are you interested in?",
        },
        {
          heading: "Transportation",
          secondaryHeading: "Lastly, how are you planning on travelling?",
        },
      ],
      steps: [
        { name: "Location", icon: Location },
        { name: "Duration", icon: Clock },
        { name: "Activities", icon: Shop },
        { name: "Transportation", icon: Transport },
      ],
      step: 0,
    };
  },
  computed: {
    isLocationValid() {
      return this.location || !this.checkLocation;
    },
    activeStep() {
      return this.steps[this.step];
    },
    stepComponent() {
      return this.steps[this.step].component;
    },
    iconClasses() {
      if (!this.activeStep.icon) return "";
      else if (/\s/.test(this.activeStep.icon)) return this.activeStep.icon;
      return `fas ${this.activeStep.icon}`;
    },
  },
  methods: {
    generateItinerary() {
      let parsedStartDay = new Date(this.startDate);
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const userInfo = {
        name: "ignore",
        startLoc: this.location,
        day: days[parsedStartDay.getDay()],
        dur: this.duration,
        byCar: this.transportation == "public" ? true : false,
        pref: {
          shop: parseInt(this.shopping),
          arts: parseInt(this.arts),
          outdoor: parseInt(this.outdoor),
          adventure: parseInt(this.adventure),
          nightlife: parseInt(this.nightlife),
        },
      };
      this.itineraryStore.fetchItinerary(userInfo);
      this.redirect();
    },
    redirect() {
      this.$router.push({
        name: "Result",
      });
    },
    goToNextStep() {
      // Check if the first step is filled in, if it is not don't let them go to second page
      if (this.activePhase == 0 && this.location == "") {
        this.checkLocation = true;
      } else {
        this.activePhase += 1;
      }
    },
    goToPrevStep() {
      this.activePhase -= 1;
    },
    stepNumberClasses(i) {
      return {
        "bg-pink text-white": this.step === i && !this.fatalError,
        "bg-dark-blue text-white": this.step > i && !this.fatalerror,
        "bg-danger text-white": this.fatalError && this.step === i,
        "text-secondary-light": this.step < i,
      };
    },
  },
  created() {
    console.log(this.activePhase);
  },
};
</script>

<style>
.d-stepper .d-stepper-header {
  margin: 0 auto;
  position: relative;
}

.d-stepper .d-stepper-header::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 5px;
  background-color: #ddd;
  top: 17px;
  left: 0;
}

.d-stepper .step-number {
  display: flex;
  height: 40px;
  width: 40px;
  background-color: #e9e9e9;
  border-radius: 50%;
  text-align: center;
}

.d-stepper .step-number-content {
  transition: transform 0.2s;
  z-index: 2;
  width: 100%;
}
</style>
