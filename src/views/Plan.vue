<template>
  <div class="container-fluid position-relative">
    <div class="row position-absolute w-100">
      <div class="bg-dark-blue" style="height: 250px"></div>
    </div>
    <div class="row pt-5 pb-1">
      <h1
        class="fs-3 text-center text-secondary-lighter d-sm-none"
        style="z-index: 0"
      >
        Build Your Own Customised Itinerary Now!
      </h1>
      <h1
        class="fs-2 text-center text-secondary-lighter d-none d-sm-block"
        style="z-index: 0"
      >
        Build Your Own Customised Itinerary Now!
      </h1>
    </div>
    <div class="row d-flex flex-grow-1 justify-content-center pt-4 pb-5">
      <div
        class="plan col-12 col-sm-10 col-md-8 col-lg-6 card border-0 h-100 p-0"
      >
        <div class="d-stepper mt-4">
          <div class="d-stepper-header d-flex justify-content-around mt-2">
            <div
              class="step-number-content text-center"
              :class="{ active: activePhase == i }"
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
          <div class="mb-4">
            <h5 class="card-title text-center fs-2 fw-bolder mt-4">
              {{ headerText[activePhase].heading }}
            </h5>
            <p class="text-center fs-4 text-secondary">
              {{ headerText[activePhase].secondaryHeading }}
            </p>
          </div>
          <form @submit.prevent="generateItinerary()" novalidate>
            <!-- Form Part 1 -->
            <template v-if="activePhase === 0">
              <div class="col-10 col-sm-8 offset-1 offset-sm-2 mb-4">
                <label for="locationInput" class="form-label"
                  >Location<span class="text-danger">*</span></label
                >
                <TypeaheadInput
                  id="locationInput"
                  class="typeahead-input"
                  :items="validLocations"
                  v-model="location"
                  :emptyMessage="typeaheadMessage"
                  placeholder="Enter location"
                />
                <div v-if="!isLocationValid" class="text-danger mt-1">
                  Please enter a location!
                </div>
              </div>
            </template>

            <!-- Form Part 2 -->
            <template v-if="activePhase === 1">
              <div
                class="col-10 col-sm-8 offset-1 offset-sm-2 mb-4 mb-3 form-floating"
              >
                <div class="mb-2">
                  Trip Dates<span class="text-danger">*</span>
                </div>
                <Datepicker
                  v-model="date"
                  modelAuto
                  range
                  placeholder="Select dates"
                  :enableTimePicker="false"
                  :partialRange="false"
                  :minDate="new Date()"
                  maxRange="5"
                />
                <div
                  class="text-secondary-light mt-1"
                  style="font-size: 0.8rem"
                >
                  Please select trip dates within a range of 7 days
                </div>
                <div v-if="!isDurationValid" class="text-danger mt-1">
                  Please select the trip dates!
                </div>
              </div>
            </template>

            <!-- Form Part 3 -->
            <template v-if="activePhase === 2">
              <div class="col-8 col-sm-6 offset-2 offset-sm-3 mb-4">
                <div class="mb-3 position-relative">
                  <label for="shopping" class="form-label">Shopping</label>
                  <input
                    type="range"
                    class="form-range"
                    min="1"
                    max="5"
                    id="shopping"
                    v-model="shopping"
                  />
                  <span
                    class="position-absolute text-secondary"
                    style="left: -2rem; top: 50%; transform: translateY(-50%)"
                    ><i class="bi bi-emoji-frown" style="font-size: 1.4rem"></i>
                  </span>
                  <span
                    class="position-absolute text-secondary"
                    style="right: -2rem; top: 50%; transform: translateY(-50%)"
                    ><i
                      class="bi bi-emoji-laughing"
                      style="font-size: 1.4rem"
                    ></i>
                  </span>
                  <p class="text-center text-secondary">
                    {{ rangeState[shopping] }}
                  </p>
                </div>
                <div class="mb-3 position-relative">
                  <label for="arts-culture" class="form-label"
                    >Arts & Culture</label
                  >
                  <input
                    type="range"
                    class="form-range"
                    min="1"
                    max="5"
                    id="arts-culture"
                    v-model="arts"
                  />
                  <span
                    class="position-absolute text-secondary"
                    style="left: -2rem; top: 50%; transform: translateY(-50%)"
                    ><i class="bi bi-emoji-frown" style="font-size: 1.4rem"></i>
                  </span>
                  <span
                    class="position-absolute text-secondary"
                    style="right: -2rem; top: 50%; transform: translateY(-50%)"
                    ><i
                      class="bi bi-emoji-laughing"
                      style="font-size: 1.4rem"
                    ></i>
                  </span>
                  <p class="text-center text-secondary">
                    {{ rangeState[arts] }}
                  </p>
                </div>
                <div class="mb-3 position-relative">
                  <label for="outdoor" class="form-label">Outdoor</label>
                  <input
                    type="range"
                    class="form-range"
                    min="1"
                    max="5"
                    default="3"
                    id="outdoor"
                    v-model="outdoor"
                  />
                  <span
                    class="position-absolute text-secondary"
                    style="left: -2rem; top: 50%; transform: translateY(-50%)"
                    ><i class="bi bi-emoji-frown" style="font-size: 1.4rem"></i>
                  </span>
                  <span
                    class="position-absolute text-secondary"
                    style="right: -2rem; top: 50%; transform: translateY(-50%)"
                    ><i
                      class="bi bi-emoji-laughing"
                      style="font-size: 1.4rem"
                    ></i>
                  </span>
                  <p class="text-center text-secondary">
                    {{ rangeState[outdoor] }}
                  </p>
                </div>
                <div class="mb-3 position-relative">
                  <label for="adventure" class="form-label">Adventure</label>
                  <input
                    type="range"
                    class="form-range"
                    min="1"
                    max="5"
                    id="adventure"
                    v-model="adventure"
                  />
                  <span
                    class="position-absolute text-secondary"
                    style="left: -2rem; top: 50%; transform: translateY(-50%)"
                    ><i class="bi bi-emoji-frown" style="font-size: 1.4rem"></i>
                  </span>
                  <span
                    class="position-absolute text-secondary"
                    style="right: -2rem; top: 50%; transform: translateY(-50%)"
                    ><i
                      class="bi bi-emoji-laughing"
                      style="font-size: 1.4rem"
                    ></i>
                  </span>
                  <p class="text-center text-secondary">
                    {{ rangeState[adventure] }}
                  </p>
                </div>
                <div class="mb-3 position-relative">
                  <label for="nightlife" class="form-label">Nightlife</label>
                  <input
                    type="range"
                    class="form-range"
                    min="1"
                    max="5"
                    id="nightlife"
                    v-model="nightlife"
                  />
                  <span
                    class="position-absolute text-secondary"
                    style="left: -2rem; top: 50%; transform: translateY(-50%)"
                    ><i class="bi bi-emoji-frown" style="font-size: 1.4rem"></i>
                  </span>
                  <span
                    class="position-absolute text-secondary"
                    style="right: -2rem; top: 50%; transform: translateY(-50%)"
                    ><i
                      class="bi bi-emoji-laughing"
                      style="font-size: 1.4rem"
                    ></i>
                  </span>
                  <p class="text-center text-secondary">
                    {{ rangeState[nightlife] }}
                  </p>
                </div>
              </div>
            </template>
            <!-- Form Part 4 -->
            <template v-if="activePhase === 3">
              <div class="col-8 col-sm-6 offset-2 offset-sm-3 mb-4">
                <div class="d-flex justify-content-between">
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
              </div>
            </template>

            <div class="text-center my-3">
              <button
                class="btn btn-gray px-4 py-2 mx-2"
                v-if="activePhase != 0"
                @click.prevent="goToPrevStep()"
              >
                Back
              </button>

              <button
                class="btn btn-pink px-4 py-2 mx-2"
                v-if="activePhase != 3"
                @click.prevent="goToNextStep()"
              >
                Next
              </button>

              <button
                type="submit"
                class="btn btn-pink mx-2"
                v-if="activePhase == 3"
              >
                Plan Now!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import { useItineraryStore } from "@/stores/itinerary";

import Location from "../assets/svg/location.svg?raw";
import Clock from "../assets/svg/clock.svg?raw";
import Shop from "../assets/svg/shop.svg?raw";
import Transport from "../assets/svg/transport.svg?raw";

import Datepicker from "@vuepic/vue-datepicker";
import TypeaheadInput from "vue3-typeahead-input";

export default {
  name: "Plan",
  components: {
    Location,
    Clock,
    Shop,
    Transport,
    Datepicker,
    TypeaheadInput,
  },
  data() {
    return {
      validLocations: [],
      typeaheadMessage: "Location not found!",
      location: "",
      date: [],
      shopping: 3,
      arts: 3,
      outdoor: 3,
      adventure: 3,
      nightlife: 3,
      transportation: "",
      activePhase: 0,
      checkLocation: false,
      checkDuration: false,
      steps: [
        { name: "Location", icon: Location },
        { name: "Duration", icon: Clock },
        { name: "Activities", icon: Shop },
        { name: "Transportation", icon: Transport },
      ],
      headerText: [
        {
          heading: "Location",
          secondaryHeading: "Where will you be starting your trip from?",
        },
        {
          heading: "Duration",
          secondaryHeading: "When will this trip be?",
        },
        {
          heading: "Activities",
          secondaryHeading: "What activities are you interested in?",
        },
        {
          heading: "Transportation",
          secondaryHeading: "Lastly, how are you planning on travelling?",
        },
      ],
      rangeState: {
        1: "No thanks, I'll pass",
        2: "Rather do something else",
        3: "I wouldn't mind",
        4: "Would be nice",
        5: "Definitely a must!",
      },
    };
  },
  computed: {
    resultQuery() {
      if (this.location) {
        return this.validLocations.filter((item) => {
          return item.toLowerCase().startsWith(this.location);
        });
      }
    },
    isLocationValid() {
      return this.location || !this.checkLocation;
    },
    isDurationValid() {
      return this.date.length > 0 || !this.checkDuration;
    },
  },
  setup() {
    const itineraryStore = useItineraryStore();
    return { itineraryStore };
  },
  created() {
    this.getValidLocations();
  },
  methods: {
    getValidLocations() {
      const apiUrl = "https://wad2-explorelah.as.r.appspot.com/validlocations";

      axios
        .get(apiUrl)
        .then((response) => {
          this.validLocations = response.data;
        })
        .catch((error) => {});
    },
    generateItinerary() {
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      const userInfo = {
        name: "ignore",
        startLoc: this.location,
        day: days[this.date[0].getDay()],
        dur: this.dateDiffInDays(this.date[0], this.date[1]) + 1,
        byCar: this.transportation == "public" ? true : false,
        pref: {
          shop: parseInt(this.shopping),
          arts: parseInt(this.arts),
          outdoor: parseInt(this.outdoor),
          adventure: parseInt(this.adventure),
          nightlife: parseInt(this.nightlife),
        },
        date: this.date,
      };

      this.itineraryStore.fetchItinerary(userInfo);
      this.itineraryStore.isLoading = true;
      this.$router.push({
        path: "/result",
      });
    },
    goToNextStep() {
      if (this.activePhase == 0 && !this.location) {
        this.checkLocation = true;
        return;
      }

      if (this.activePhase == 1 && this.date.length == 0) {
        this.checkDuration = true;
        return;
      }

      this.activePhase += 1;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    goToPrevStep() {
      this.activePhase -= 1;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    stepNumberClasses(i) {
      return {
        "bg-pink text-white": this.activePhase === i,
        "bg-dark-blue text-white": this.activePhase > i,
        "text-secondary-light": this.activePhase < i,
      };
    },
    dateDiffInDays(a, b) {
      const _MS_PER_DAY = 1000 * 60 * 60 * 24;
      // Discard the time and time-zone information.
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

      return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    },
  },
};
</script>

<style lang="scss">
@media only screen and (max-width: 576px) {
  .plan {
    border-radius: 0 !important;
    background-color: #f8f9fa !important;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
    box-shadow: none !important;
  }
}

.plan {
  box-shadow: 0 0.125rem 0.25rem rgba(#000000, 0.075);
}

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
  z-index: 2;
}

.typeahead-input::placeholder {
  opacity: 0.4;
}
</style>
