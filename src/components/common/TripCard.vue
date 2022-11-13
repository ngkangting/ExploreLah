<template>
  <div
    v-if="showTripCard"
    class="tripCard card shadow-sm col-12 col-sm-6 col-md-4 col-lg-3 mx-0 mx-sm-3 mx-md-4 my-3 bg-white border-0 rounded-4 p-0"
  >
    <div class="card-img-wrap position-relative">
      <img
        src="../../assets/img/merli5.jpg"
        class="card-img-top w-100"
        style="max-height: 300px"
      />
      <div class="overlay h-100"></div>
    </div>

    <div class="card-body bg-white d-flex flex-column p-4 position-relative">
      <div class="mb-3">
        <h4 class="card-title">{{ dayData.name.slice(1, -1) }}</h4>
        <h6 class="mb-1">{{ startDate }} - {{ endDate }}</h6>

        <div class="position-absolute end-0 top-0 pt-3 pe-4">
          <button class="btn border-0 p-0 me-4" @click="generatePDF">
            <i
              class="bi bi-file-earmark-pdf-fill text-secondary"
              style="font-size: 1.4rem"
            ></i>
          </button>

          <button class="btn border-0 p-0" @click="deleteTrip">
            <i
              class="bi bi-trash-fill text-secondary"
              style="font-size: 1.4rem"
            ></i>
          </button>
        </div>
      </div>

      <div class="mb-4 text-dark-blue">
        <p class="mb-1 fs-6">
          <strong>Starting Location:</strong> {{ input.startLoc }}
        </p>
        <p class="fs-6"><strong>Transportation Method:</strong> {{ byCar }}</p>
      </div>

      <button class="btn btn-pink py-2 mt-auto" @click="viewItinerary()">
        View Trip
      </button>
    </div>
  </div>
</template>

<script>
import { useItineraryStore } from "@/stores/itinerary";
import { useAuthStore } from "@/stores/auth";
import { getFirestore, doc, updateDoc, collection } from "firebase/firestore";
import firebaseApp from "../../firebaseConfig";

import * as pdfFonts from "pdfmake/build/vfs_fonts.js";
import pdfMake from "pdfmake/build/pdfmake";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export default {
  name: "TripCard",
  props: {
    dayData: null,
  },
  data() {
    return {
      numToMonth: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      itinerary: JSON.parse(this.dayData["itinerary"]),
      food: JSON.parse(this.dayData["food"]),
      input: JSON.parse(this.dayData["input"]),
      showTripCard: true,
    };
  },
  mounted() {},
  computed: {
    startDate() {
      let startDate = new Date(this.input["dates"][0].toString());
      let outputStr =
        startDate.getDate() + " " + this.numToMonth[startDate.getMonth()];
      return outputStr;
    },
    endDate() {
      let endDate = new Date(this.input["dates"][1].toString());
      let outputStr =
        endDate.getDate() + " " + this.numToMonth[endDate.getMonth()];
      return outputStr;
    },
    byCar() {
      if (this.input.byCar) {
        return "Private Transport";
      }
      return "Public Transport";
    },
  },
  created() {
    let currDate = new Date();
  },
  setup() {
    const itineraryStore = useItineraryStore();
    const authStore = useAuthStore();
    const db = getFirestore(firebaseApp);
    return { db, itineraryStore, authStore };
  },
  methods: {
    viewItinerary() {
      //Set this to be the defacto inside intinerary store
      this.itineraryStore.setItinerary(this.dayData);
      this.itineraryStore.viewingTrip = true;
      this.itineraryStore.isLoading = false;
      //Redirect
      this.$router.push({
        path: "/result",
      });
    },

    generatePDF() {
      var dayCounter = 1;
      var activityCounter = 1;
      var docDefinition = {
        content: [
          "Trip Name: " + this.dayData.name.slice(1, -1),
          "Starting Location: " + this.input.startLoc,
          " ",
        ],
      };
      for (let day of this.itinerary) {
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
    async deleteTrip() {
      let docID = this.dayData["docID"];
      let userID = this.authStore.user.uid;
      const docRef = doc(this.db, userID, docID);
      //Start date
      let startDate = new Date(this.input["dates"][0].toString());
      // console.log(`Emitted is ${startDate}`);
      this.$emit("tripDeleted", startDate);

      this.showTripCard = false;
      delete this.itineraryStore.myTripsData[docID];
      await updateDoc(docRef, {
        deleted: true,
      });
    },
  },
  emits: ["tripDeleted"],
};
</script>

<style>
.tripCard {
  overflow: hidden;
}

.overlay {
  position: absolute;
  overflow: hidden;
  border-top-left-radius: 5px !important;
  border-top-right-radius: 5px !important;
  top: 0;
  right: 0;
  left: 0;
  background: rgba(66, 66, 66, 0.525);
}

.zoom-effect-trip {
  overflow: hidden;
}

.zoom-effect-trip img {
  border-radius: 5px !important;
  transform: scale(1);
  -webkit-transform: scale(1);
}

.zoom-effect-trip:hover img {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}

.effect-image-trip {
  border-radius: 5px !important;
  position: relative;
  display: block;
}

.zoom-effect-trip img {
  transition: all 0.4s linear;
  -webkit-transition: all 0.4s linear;
  -moz-transition: all 0.4s linear;
  -o-transition: all 0.4s linear;
}
</style>
