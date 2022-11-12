<template>
  <div class="container-fluid">
    <div v-if="isLoading">
      <div class="row d-flex py-5 px-4 px-md-5">
        <h1 class="text-center fw-semibold mb-4 mb-md-5">Trip Itinerary</h1>
        <!-- Result -->
        <div class="col-12 col-md-6 col-lg-8 order-2 order-md-1">
          <div class="card w-100 border-0">
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-12 col-lg-8">
                  <div
                    class="w-100 rounded skeleton"
                    style="height: 350px"
                  ></div>
                </div>
                <div
                  class="col-4 d-none d-lg-flex flex-column justify-content-between"
                >
                  <div class="row">
                    <div class="col-12">
                      <div
                        class="w-100 rounded skeleton"
                        style="height: 165px"
                      ></div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div
                        class="w-100 rounded skeleton"
                        style="height: 165px"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-lg-6 rounded-3 px-3 py-3">
                  <div
                    class="w-100 rounded skeleton"
                    style="height: 500px"
                  ></div>
                </div>

                <div class="column col-12 col-lg-6 rounded-3 px-3 py-3">
                  <!-- Header -->
                  <div
                    class="skeleton skeleton-text rounded pb-1"
                    style="height: 35px; width: 150px"
                  ></div>
                  <!-- Tags -->
                  <div class="d-flex">
                    <div
                      class="skeleton skeleton-text rounded me-2"
                      style="height: 18px; width: 75px"
                    ></div>
                    <div
                      class="skeleton skeleton-text rounded mx-2"
                      style="height: 18px; width: 75px"
                    ></div>
                    <div
                      class="skeleton skeleton-text rounded mx-2"
                      style="height: 18px; width: 75px"
                    ></div>
                    <div
                      class="skeleton skeleton-text rounded mx-2"
                      style="height: 18px; width: 75px"
                    ></div>
                  </div>

                  <!-- Table -->
                  <div>
                    <div class="d-flex align-items-center my-2">
                      <div
                        class="skeleton rounded-circle skeleton-text my-auto"
                        style="height: 30px; width: 30px"
                      ></div>
                      <div
                        class="skeleton skeleton-text ms-2"
                        style="height: 20px; width: 150px"
                      ></div>
                    </div>

                    <div class="d-flex align-items-center my-2">
                      <div
                        class="skeleton rounded-circle skeleton-text my-auto"
                        style="height: 30px; width: 30px"
                      ></div>
                      <div
                        class="skeleton skeleton-text ms-2"
                        style="height: 20px; width: 150px"
                      ></div>
                    </div>

                    <div class="d-flex align-items-center my-2">
                      <div
                        class="skeleton rounded-circle skeleton-text my-auto"
                        style="height: 30px; width: 30px"
                      ></div>
                      <div
                        class="skeleton skeleton-text ms-2"
                        style="height: 20px; width: 150px"
                      ></div>
                    </div>

                    <div class="d-flex align-items-center my-2">
                      <div
                        class="skeleton rounded-circle skeleton-text my-auto"
                        style="height: 30px; width: 30px"
                      ></div>
                      <div
                        class="skeleton skeleton-text ms-2"
                        style="height: 20px; width: 150px"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Locations -->
        <div
          class="col-12 col-md-6 col-lg-4 order-1 order-md-2 position-relative"
        >
          <div
            class="skeleton skeleton-text rounded mx-auto my-2 mb-4"
            style="height: 35px; width: 200px"
          ></div>

          <div
            class="nav nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <PillTabSkeleton
              v-for="(activity, index) in 3"
              :key="index"
              :index="index"
              :isLast="index == 2"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="row d-flex py-5 px-4 px-md-5">
        <div v-if="itineraryStore.viewingTrip">
          <p class="text-center fw-semibold">Viewing Saved Trip</p>
          <h1 class="text-center fw-semibold mb-4 mb-md-5">
            {{ itineraryStore.name }}
          </h1>
        </div>

        <h1 v-else class="text-center fw-semibold mb-4 mb-md-5">
          Trip Itinerary
        </h1>

        <!-- Result -->
        <div class="col-12 col-md-6 col-lg-8 order-2 order-md-1">
          <div class="card w-100 border-0">
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-12 col-lg-8">
                  <!-- First Image -->
                  <img
                    v-if="
                      'photos' in
                      currentDayDetails[idx][currentDayData[idx].placeID].result
                    "
                    :src="
                      'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' +
                      currentDayDetails[idx][currentDayData[idx].placeID].result
                        .photos[0].photo_reference +
                      imgKey
                    "
                    class="w-100 rounded"
                    height="350"
                  />

                  <div
                    v-else
                    class="w-100 rounded bg-light position-relative"
                    style="height: 350px"
                  >
                    <span
                      class="fs-4 position-absolute top-50 start-50 translate-middle text-secondary"
                      >No Image Found</span
                    >
                  </div>
                </div>
                <div
                  class="col-4 d-none d-lg-flex flex-column justify-content-between"
                >
                  <div class="row">
                    <div class="col-12">
                      <!-- Second Image -->
                      <img
                        v-if="
                          'photos' in
                          currentDayDetails[idx][currentDayData[idx].placeID]
                            .result
                        "
                        :src="
                          'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' +
                          currentDayDetails[idx][currentDayData[idx].placeID]
                            .result.photos[1].photo_reference +
                          imgKey
                        "
                        class="w-100 rounded"
                        height="165"
                      />

                      <div
                        v-else
                        class="w-100 rounded bg-light position-relative"
                        style="height: 165px"
                      >
                        <span
                          class="position-absolute top-50 start-50 translate-middle text-secondary"
                          >No Image Found</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <!-- Third Image -->
                      <img
                        v-if="
                          'photos' in
                          currentDayDetails[idx][currentDayData[idx].placeID]
                            .result
                        "
                        :src="
                          'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' +
                          currentDayDetails[idx][currentDayData[idx].placeID]
                            .result.photos[2].photo_reference +
                          imgKey
                        "
                        class="w-100 rounded"
                        height="165"
                      />

                      <div
                        v-else
                        class="w-100 rounded bg-light position-relative"
                        style="height: 165px"
                      >
                        <span
                          class="position-absolute top-50 start-50 translate-middle text-secondary"
                          >No Image Found</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12 col-lg-6 rounded-3 px-3 py-3">
                  <GoogleMapWPins :pinsInfo="currentDayMarkers" />
                </div>

                <div class="column col-12 col-lg-6 rounded-3 px-3 py-3">
                  <h3 class="pb-1 fw-bold">
                    {{
                      currentDayDetails[idx][currentDayData[idx].placeID].result
                        .name
                    }}
                  </h3>

                  <div class="mb-4">
                    <span
                      v-for="(tag, index) in currentDayData[idx].tags"
                      :key="index"
                      class="tag bg-grey rounded-2 p-1 px-2 me-2"
                      >{{ tag }}</span
                    >
                  </div>

                  <table>
                    <tr>
                      <td>
                        <i
                          class="bg-grey bi bi-star-fill rounded-circle p-2 text-dark-blue"
                        ></i>
                      </td>
                      <td
                        v-if="
                          'rating' in
                          currentDayDetails[idx][currentDayData[idx].placeID]
                            .result
                        "
                        style="padding-left: 10px"
                      >
                        {{
                          currentDayDetails[idx][currentDayData[idx].placeID]
                            .result.rating
                        }}
                        / 5
                      </td>
                      <td v-else style="padding-left: 10px">
                        No Rating Available
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <i
                          class="bg-grey bi bi-pin-map-fill rounded-circle p-2 text-dark-blue"
                        ></i>
                      </td>
                      <td
                        v-if="
                          'formatted_address' in
                          currentDayDetails[idx][currentDayData[idx].placeID]
                            .result
                        "
                        style="padding-left: 10px"
                      >
                        {{
                          currentDayDetails[idx][currentDayData[idx].placeID]
                            .result.formatted_address
                        }}
                      </td>
                      <td v-else style="padding-left: 10px">
                        No Address Available
                      </td>
                    </tr>

                    <tr
                      v-if="currentDayData[idx].status.toLowerCase() == 'clear'"
                    >
                      <td>
                        <i
                          class="bg-grey bi bi-sun-fill rounded-circle p-2 text-dark-blue"
                        ></i>
                      </td>
                      <td style="padding-left: 10px">
                        Forecast: {{ currentDayData[idx].status }}
                      </td>
                    </tr>

                    <tr
                      v-if="currentDayData[idx].status.toLowerCase() == 'rain'"
                    >
                      <td>
                        <i
                          class="bg-grey bi bi-cloud-drizzle-fill rounded-circle p-2 text-dark-blue"
                        ></i>
                      </td>
                      <td style="padding-left: 10px">
                        Forecast: {{ currentDayData[idx].status }}
                      </td>
                    </tr>

                    <tr
                      v-if="
                        currentDayData[idx].status.toLowerCase() == 'clouds'
                      "
                    >
                      <td>
                        <i
                          class="bg-grey bi bi-cloud-fill rounded-circle p-2 text-dark-blue"
                        ></i>
                      </td>
                      <td style="padding-left: 10px">
                        Forecast: {{ currentDayData[idx].status }}
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <i
                          class="bg-grey bi bi-clock-fill rounded-circle p-2 text-dark-blue"
                        ></i>
                      </td>
                      <td
                        v-if="
                          'opening_hours' in
                          currentDayDetails[idx][currentDayData[idx].placeID]
                            .result
                        "
                        style="padding-left: 10px"
                      >
                        Opening Hours:
                      </td>
                      <td v-else style="padding-left: 10px">
                        Opening Hours Unavailable
                      </td>
                    </tr>

                    <tr
                      v-if="
                        'opening_hours' in
                        currentDayDetails[idx][currentDayData[idx].placeID]
                          .result
                      "
                    >
                      <td></td>
                      <td>
                        <ul style="list-style: none; padding-left: 10px">
                          <li
                            v-for="(day, index) in currentDayDetails[idx][
                              currentDayData[idx].placeID
                            ].result.opening_hours.weekday_text"
                            :key="index"
                          >
                            {{ day }}
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Locations -->
        <div
          class="col-12 col-md-6 col-lg-4 order-1 order-md-2 position-relative mb-4 mb-md-0"
        >
          <h4 class="text-center my-2 mb-4">
            Day {{ currDay }} of {{ this.itineraryStore.itineraryList.length }}
          </h4>

          <div
            class="nav nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <PillTab
              v-for="(activity, index) in currentDayData"
              :key="index"
              :index="index"
              :isSelected="idx == index"
              :isLast="index == currentDayData.length - 1"
              :place="activity.name"
              :type="activity.tags"
              :arrivalTime="activity.arriveTime"
              :departureTime="activity.endTime"
              :duration="activity.dur"
              :travelTimeToThis="activity.travelTimeTo"
              :name="`pill-tab-${index}`"
              @click="idx = index"
            />
          </div>

          <!-- Next buttons -->
          <div class="d-flex justify-content-center pb-5 mb-5">
            <button
              v-if="this.currDay != 1"
              @click="goPrevDay"
              class="rounded bg-dark-blue border-0 py-2 px-3 mx-2 text-white"
            >
              Back
            </button>
            <button
              v-if="this.currDay != this.itineraryStore.itineraryList.length"
              @click="goNextDay"
              class="rounded bg-dark-blue border-0 py-2 px-3 mx-2 text-white"
            >
              Next
            </button>
          </div>

          <div class="position-absolute bottom-0 end-0 p-3">
            <router-link
              to="/foodview"
              class="text-decoration-none text-secondary"
            >
              <span class="ps-1"> See Food Recommendations </span>
              <i
                class="bi-chevron-right text-secondary"
                style="font-size: 1rem"
              ></i>
            </router-link>
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

import PillTabSkeleton from "@/components/result/PillTabSkeleton.vue";
import PillTab from "@/components/result/PillTab.vue";
import GoogleMapWPins from "@/components/common/GoogleMapWPins.vue";
import MerlionMascot from "@/components/common/MerlionMascot.vue";

export default {
  name: "ResultView",
  components: {
    PillTabSkeleton,
    PillTab,
    GoogleMap,
    Marker,
    CustomMarker,
    GoogleMapWPins,
    MerlionMascot,
  },
  data() {
    return {
      currDay: 1,
      showSkeleton: true,
      idx: 0,
      imgKey: "&key=AIzaSyAWD7RGn64dPl6DvyAQ4GciUGSWmsiF2Ys",
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
      try {
        return this.itineraryStore.itineraryList[this.currDay - 1]["itinerary"];
      } catch (err) {
        return false;
      }
    },
    currentDayDetails() {
      try {
        return this.itineraryStore.details[this.currDay - 1];
      } catch (err) {
        return false;
      }
    },
    currentDayMarkers() {
      return this.itineraryStore.itineraryList[this.currDay - 1]["pinInfoList"];
    },

    isLoading() {
      return this.itineraryStore.isLoading;
    },
  },
  methods: {
    goPrevDay() {
      if (this.currDay != 1) {
        this.currDay -= 1;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    goNextDay() {
      if (this.currDay != this.itineraryStore.itineraryList.length) {
        this.currDay += 1;
        this.idx = 0;
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
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

.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
  height: 165px;
  width: 50px;
  opacity: 0.7;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

.skeleton-text {
  width: 100%;
  height: 0.5em;
  margin-bottom: 1rem;
  border-radius: 0.125rem;
}

.skeleton-text:last-child {
  margin-bottom: 0px;
  width: 80%;
}

th,
td {
  padding-bottom: 20px;
}
</style>
