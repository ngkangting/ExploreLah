<template>
  <div v-if="showTripCard">
    <div class="card m-4 col-10 ps-0 border-0 shadow-sm">
      <div class="row g-0">
        <div class="col-0 col-sm-4 position-relative" style="overflow: hidden">
          <img
            src="../../assets/img/merli5.jpg"
            class="img-fluid rounded-start h-100 d-none d-sm-block"
          />
          <div
            class="overlay d-none d-sm-block h-100"
            style="
              border-top-left-radius: 4px !important;
              border-top-right-radius: 0px !important;
            "
          ></div>
        </div>
        <div class="col-12 col-sm-8">
          <div class="card-body p-4">
            <div class="card-title">
              <h3>{{ dayData.name.slice(1, -1) }}</h3>
              <p>{{ startDate }} - {{ endDate }}</p>
            </div>

            <div class="position-absolute end-0 top-0 pt-4 pe-4">
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

            <div class="card-text d-none d-sm-block text-dark-blue mb-4">
              <p class="mb-1">
                <strong>Starting Location:</strong> {{ input.startLoc }}
              </p>
              <p><strong>Transportation Method:</strong> {{ byCar }}</p>
            </div>
            <button class="btn btn-pink py-2 mt-auto" @click="viewItinerary()">
              View Trip
            </button>
          </div>
        </div>
      </div>
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
  name: "PhoneTripCard",
  setup() {
    const itineraryStore = useItineraryStore();
    const authStore = useAuthStore();
    const db = getFirestore(firebaseApp);
    return { db, itineraryStore, authStore };
  },
  props: {
    dayData: null,
  },
  created() {
    let currDate = new Date();
  },
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
      if (startDate == NaN) {
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 1);
      }
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
img {
  object-fit: cover;
}
</style>
