<template>
  <div class="container-fluid pb-5">
    <h1 class="text-center fw-semibold py-5 pb-0">Recommended Food Places</h1>

    <div class="p-3 offset-1">
      <router-link to="/result" class="text-decoration-none text-secondary"
        ><i class="bi-chevron-left text-secondary" style="font-size: 1rem"></i>
        <span class="ps-1"> Back to Itinerary </span>
      </router-link>
    </div>
    <div class="col-10 offset-1 card border-0 p-3 rounded-4 position-relative">
      <div class="card-body">
        <div class="pb-3"></div>

        <div class="row">
          <div class="col-md-6 pb-4">
            <GoogleMapWPinsForFood :pins-info="markers" />
          </div>

          <div class="col-md-6">
            <ul class="nav nav-tabs position-relative">
              <MerlionMascot class="d-none d-lg-block" :posX="210" :posY="25" />

              <li class="nav-item">
                <button
                  @click="toggleState"
                  class="nav-link px-2"
                  :class="lunchStyle"
                >
                  Lunch
                </button>
              </li>
              <li class="nav-item">
                <button
                  @click="toggleState"
                  class="nav-link px-2"
                  :class="dinnerStyle"
                >
                  Dinner
                </button>
              </li>
              <li class="nav-item">
                <div
                  class="nav-link position-absolute end-0 border-0"
                  style="color: black"
                >
                  Day {{ currDay }} of
                  {{ this.itineraryStore.itineraryList.length }}
                </div>
              </li>
            </ul>
            <div
              v-for="(place, idx) in Object.values(shownFoodReco)[0]"
              :key="idx"
            >
              <FoodCard
                :placeName="place[0]"
                :randomNum="randomNumList[idx]"
              ></FoodCard>
            </div>

            <!-- Next buttons -->
            <div class="d-flex justify-content-center pb-3">
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

            <!-- Button trigger modal -->
            <div v-if="authStore.isLoggedIn" class="d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-pink"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Save Itinerary
              </button>
            </div>

            <div v-else class="d-flex justify-content-end">
              <button @click="generatePDF" type="button" class="btn btn-pink">
                Download as PDF
              </button>
            </div>

            <!-- Modal -->
            <div
              class="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Give this trip a name!<span class="text-danger">*</span>
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <input
                      class="form-control"
                      type="text"
                      v-model="inputName"
                      placeholder="Exciting day trip!"
                    />
                    <div v-if="showInvalid" class="text-danger mt-1 text-start">
                      Please enter a name!
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      class="btn btn-pink"
                      @click="saveItineraryToDb"
                    >
                      <lottie-player
                        v-if="submitting"
                        class="mx-auto"
                        style="z-index: 1; height: 25px; width: 44px"
                        src="https://assets4.lottiefiles.com/packages/lf20_rwq6ciql.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                      ></lottie-player>

                      <span v-else>Save</span>
                    </button>
                    <button
                      type="button"
                      class="d-none"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      ref="hideModal"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

...
<script>
import { useAuthStore } from "@/stores/auth";
import { useItineraryStore } from "@/stores/itinerary";
import { GoogleMap, Marker, CustomMarker } from "vue3-google-map";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  getDocs,
} from "firebase/firestore";

import firebaseApp from "../firebaseConfig";
import FoodLocation from "../components/resultpage/FoodLocation.vue";
import FoodCard from "../components/resultpage/FoodCard.vue";
import GoogleMapWPinsForFood from "../components/common/GoogleMapWPinsForFood.vue";
import MerlionMascot from "@/components/common/MerlionMascot.vue";

// import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
export default {
  name: "FoodView",
  components: {
    GoogleMap,
    Marker,
    FoodLocation,
    CustomMarker,
    FoodCard,
    GoogleMapWPinsForFood,
    MerlionMascot,
  },
  data() {
    return {
      state: 1, //O for lunch, 1 for dinner
      currDay: 1,
      inputName: "",
      generatedOrder: [],
      showInvalid: false,
      submitting: false,
      windowWidth: window.innerWidth,
      // itinerary: JSON.parse(this.dayData["itinerary"]),
      // input: JSON.parse(this.dayData["input"]),
    };
  },
  setup() {
    const db = getFirestore(firebaseApp);
    const authStore = useAuthStore();
    const itineraryStore = useItineraryStore();
    const center = { lat: 1.29027, lng: 103.851959 };
    return { authStore, itineraryStore, center, db };
  },
  computed: {
    foodReco() {
      return this.itineraryStore.foodReco;
    },
    lunchStyle() {
      if (this.state) {
        // return "text-dark-blue display-3 mx-5"
        return "selected-style text-white bg-blue";
      }
      return "unselected-style text-secondary";
    },
    dinnerStyle() {
      if (!this.state) {
        return "selected-style text-white bg-blue";
      }
      return "unselected-style text-secondary";
    },
    shownFoodReco() {
      //Curr Day Toggles
      //Day 0 [0,3] day -> 0,6, 12 true += 3
      if (this.state) {
        //Show lunch reco
        return this.foodReco[this.currDay - 1]["lunch"];
      }
      return this.foodReco[this.currDay - 1]["dinner"];
    },
    randomNumList() {
      let startIdx = (this.currDay - 1) * 6;
      let endIdx;
      if (this.state) {
        // means is lunch
        endIdx = startIdx + 3;
      } else {
        startIdx += 3;
        endIdx = startIdx + 3;
      }
      let output = [];
      for (let i = startIdx; i < endIdx; i++) {
        output.push(this.generatedOrder[i.toString()]);
      }
      return output;
    },
    markers() {
      if (this.state) {
        return this.foodReco[this.currDay - 1]["lunchPin"];
      }
      return this.foodReco[this.currDay - 1]["dinnerPin"];
    },
    formInputs() {
      // get inputs
      return this.itineraryStore.itineraryInput;
    },
    formActivities() {
      // get activities
      return this.itineraryStore.itineraryList;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });

    let noOfDays = Object.keys(this.foodReco).length;
    let noOfFood = noOfDays * 3 * 2;
    let noOfImages = 42;
    var unselectedImgs = [];
    for (let i = 0; i < 42; i++) {
      unselectedImgs.push(i);
    }
    for (let i = 0; i <= noOfFood; i++) {
      let rnd = Math.floor(Math.random() * unselectedImgs.length);
      this.generatedOrder.push(unselectedImgs[rnd]);
      unselectedImgs.splice(rnd, 1);
    }
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
    toggleState() {
      this.state = !this.state;
    },
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
    async saveItineraryToDb() {
      if (this.inputName === "") {
        //Not valid name
        this.showInvalid = true;
      } else {
        this.submitting = true;
        //Write to DB
        let userID = this.authStore.user.uid;
        let itineraryList = this.itineraryStore.itineraryList;
        let foodReco = this.itineraryStore.foodReco;
        let itineraryInput = this.itineraryStore.itineraryInput;
        let details = this.itineraryStore.details;
        try {
          const docRef = await addDoc(collection(this.db, userID), {
            name: JSON.stringify(this.inputName),
            itinerary: JSON.stringify(itineraryList),
            food: JSON.stringify(foodReco),
            input: JSON.stringify(itineraryInput),
            details: JSON.stringify(details),
          });

          // console.log("Document written with ID: ", docRef.id);
          this.$router.push({
            path: "/mytrips",
          });
          this.$refs.hideModal.click();
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
    },
    generatePDF() {
      var dayCounter = 1;
      var activityCounter = 1;
      var docDefinition = {
        content: [
          "My Itinerary",
          " ",
          "Starting Location: " + this.formInputs.startLoc,
          " ",
        ],
      };
      for (let day of this.formActivities) {
        docDefinition.content.push("Day" + dayCounter);
        docDefinition.content.push(" ");
        dayCounter += 1;
        for (let activity of day.itinerary) {
          docDefinition.content.push("Activity" + activityCounter);
          docDefinition.content.push("Location: " + activity.name);
          docDefinition.content.push("Start Time: " + activity.arriveTime);
          docDefinition.content.push("End Time: " + activity.endTime);
          docDefinition.content.push("Duration of Activity: " + activity.dur);
          docDefinition.content.push(
            "Travel Time to Location: " + activity.travelTimeTo
          );
          docDefinition.content.push("Weather: " + activity.status);
          docDefinition.content.push(" ");
          activityCounter += 1;
        }
        docDefinition.content.push(" ");
        activityCounter = 1;
      }
      pdfMake.createPdf(docDefinition).download();
    },
  },
};
</script>

<style lang="scss">
.selected-style,
.unselected-style {
  font-weight: bold;
}
</style>
