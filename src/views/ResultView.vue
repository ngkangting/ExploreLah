<template>
  <div class="container-fluid">
    <div class="row d-flex">
      <!-- Result -->
      <div
        class="col-md-6 col-lg-8 order-2 order-sm-2 order-md-1 order-lg-1 order-xl-1"
      >
        <div class="card w-100 border-0">
          <div class="card-body">
            <div class="row mb-3">
              <div class="col-12 col-lg-8">
                <img
                  class="w-100 rounded"
                  src="../assets/img/mbs-4.jpg"
                  alt="..."
                  height="350"
                />
              </div>
              <div
                class="col-4 d-none d-lg-flex flex-column justify-content-between"
              >
                <div class="row">
                  <div class="col-12">
                    <img
                      class="w-100 rounded"
                      src="../assets/img/mbs-2.jpg"
                      alt="..."
                      height="165"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <img
                      class="w-100 rounded"
                      src="../assets/img/mbs-1.jpeg"
                      alt="..."
                      height="165"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 pt-2">
                <h3 class="pb-1 fw-bold">The Shoppes at Marina Bay Sands</h3>
              </div>

              <div class="column col-12 col-lg-6 rounded-3 px-3 py-3">
                <p class="mb-4">
                  <!--to add color -->
                  <span class="tag bg-grey rounded-2 p-1 px-2"
                    >Luxury Shopping</span
                  >
                  <span class="tag bg-grey rounded-2 p-1 px-2 ms-2"
                    >Night Life</span
                  >
                  <span class="tag bg-grey rounded-2 p-1 px-2 ms-2"
                    >Casino</span
                  >
                  <span class="tag bg-grey rounded-2 p-1 px-2 ms-2"
                    >Museum</span
                  >
                </p>

                <p>
                  <span>
                    <i
                      class="bg-grey bi bi-star-fill rounded-circle p-2 text-dark-blue"
                    ></i>
                  </span>
                  <span class="mx-2">
                    4.3 #4 of 339 in Shopping In Singapore
                  </span>
                </p>
                <p>
                  <span>
                    <i
                      class="bg-grey bi bi-pin-map-fill rounded-circle p-2 text-dark-blue"
                    ></i>
                  </span>
                  <span class="mx-2"> 10 Bayfront Ave, Singapore 018956 </span>
                </p>
                <p>
                  <span>
                    <i
                      class="bg-grey bi bi-clouds-fill rounded-circle p-2 text-dark-blue"
                    ></i>
                  </span>
                  <span class="mx-2"> Cloudy Day </span>
                </p>
                <p>
                  <span>
                    <i
                      class="bg-grey bi bi-currency-dollar rounded-circle p-2 text-dark-blue"
                    ></i>
                  </span>
                  <span class="mx-2"> Luxury Shopping </span>
                </p>
              </div>

              <div class="column col-12 col-lg-6 rounded px-3 py-3">
                <h6>Highlights</h6>
                <ul>
                  <li class="py-1">
                    Shop at luxury brands such as Balenciga, Chanel, Dior
                  </li>
                  <li class="py-1">
                    Award winning restaurants such as db Bistro & Oyster Bar
                  </li>
                  <li class="py-1">SkyPark Observation Deck</li>
                  <li class="py-1">Digital Light Canvas & Sampan Rides</li>
                  <li class="py-1">Arts & Science Museum</li>
                  <li class="py-1">Casino</li>
                  <li class="py-1">Marquee Nightclub</li>
                </ul>
              </div>
              <!--address, weather, ratings, price range, summary, highlights-->
              <!-- <div class="col-5">
                <div class="bg-light p-2 h-100 rounded">Test</div>
              </div>
              <div class="col-7">
                <h5 class="card-title">Marina Bay Sands</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quisque id diam vel quam elementum pulvinar etiam non quam.
                  Elementum eu facilisis sed odio. Nibh sit amet commodo nulla.
                  Dui nunc mattis enim ut tellus elementum sagittis vitae.
                </p>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <!-- Locations -->
      <div
        class="col col-md-6 col-lg-4 order-1 order-sm-1 order-md-2 order-lg-2 order-xl-2"
      >
        <div
          class="nav nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <!-- <PillTab
            v-for="index in 3"
            :key="index"
            :index="index"
            :isSelected="false"
            :isLast="false"
            :place="'Museum of Old'"
            :type="'Arts & Culture'"
            :arrivalTime="'12:00'"
            :departureTime="'15:00'"
            :name="`pill-tab-${index}`"
          />

          <PillTab
            :index="0"
            :isSelected="true"
            :isLast="true"
            :place="'Museum of Old'"
            :type="'Arts & Culture'"
            :arrivalTime="'12:00'"
            :departureTime="'15:00'"
          /> -->

          <PillTab
            v-for="(activity, index) in currentDayData"
            :key="index"
            :index="index"
            :isSelected="false"
            :isLast="false"
            :place="activity.name"
            :type="'Arts & Culture'"
            :arrivalTime="activity.arriveTime"
            :departureTime="activity.endTime"
            :forecast="activity.status"
            :duration="activity.dur"
            :travelTimeToThis="activity.travelTimeTo"
            :name="`pill-tab-${index}`"
          />
          <!-- <div v-for="activity in currentDayData">
            <h2>{{activity.order}}.{{activity.name}}</h2>
            <p>Arrival Time: {{activity["arriveTime"]}}</p>
            <p>Time Spent: {{activity["dur"]}}</p>
            <p>Leave At: {{activity["endTime"]}}</p>
            <p>Estimated travel time from previous place to this:{{activity["travelTimeTo"]}}min</p>
            <p>Weather Forecast: {{activity["status"]}}</p>
          </div> -->
        </div>
        <!-- Next buttons -->
        <div class="row">
          <div class="col-6">
            <button @click="goPrevDay">Prev</button>
            {{ currDay }}
            <button @click="goNextDay">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/auth";
import { useItineraryStore } from "@/stores/itinerary";
import { GoogleMap, Marker, CustomMarker } from "vue3-google-map";

import PillTab from "@/components/result/PillTab.vue";

export default {
  name: "ResultView",
  components: {
    PillTab,
  },
  data() {
    return {
      currDay: 1,
    };
  },
  setup() {
    const authStore = useAuthStore();
    const itineraryStore = useItineraryStore();
    const center = { lat: 1.29027, lng: 103.851959 };
    return { authStore, itineraryStore, center };
  },
  computed: {
    currentDayData() {
      return this.itineraryStore.itineraryList[this.currDay]["itinerary"];
    },
  },
  methods: {
    getUser() {},
  },
};
</script>

<style lang="scss">
.column {
  font-size: smaller;
}

.bg-grey {
  background-color: #e9ecef;
}

.tag {
  font-size: small;
}
</style>
