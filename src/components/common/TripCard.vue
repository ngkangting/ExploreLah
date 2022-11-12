<template>
  <!-- <div v-if="showTripCard"> -->
  <div
    v-if="showTripCard"
    class="trip-card col-md-6 col-lg-4 col-xl-3 position-relative"
  >
    <button
      class="btn btn-light position-absolute end-0 top-0 m-3"
      @click="deleteTrip"
      style="z-index: 10"
    >
      <i class="bi bi-trash-fill text-secondary"></i>
    </button>
    <div
      class="effect-image-1 zoom-effect-1"
      @mouseenter="revealText = true"
      @mouseleave="revealText = false"
    >
      <img src="../../assets/img/tripcard.jpg" class="w-100" />
      <div
        class="overlay text-white d-flex justify-content-center align-items-center text-center"
        style="bottom: 45% !important"
      >
        <div>
          <h3>{{ dayData.name.slice(1, -1) }}</h3>
          <div>{{ startDate }} - {{ endDate }}</div>
          <span v-if="revealText" class="revealText"
            >Click to view details!</span
          >
        </div>
      </div>
      <div
        class="d-flex description bg-white text-dark-blue px-3"
        style="top: 45% !important"
      >
        <p class="m-0 w-100">
          <b>Starting Location:</b> {{ input.startLoc }}
          <br />
          <b>Transportation Method:</b> {{ byCar }}
          <br />
          <button
            @click="generatePDF"
            type="btn"
            class="btn bg-pink text-white btn-sm my-2"
          >
            Download as PDF
          </button>
        </p>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
import { useItineraryStore } from "@/stores/itinerary";
import { useAuthStore } from "@/stores/auth";
import { getFirestore, doc, updateDoc, collection } from "firebase/firestore";
import firebaseApp from "../../firebaseConfig";
import pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
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
      revealText: false,
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
      console.log(`Emitted is ${startDate}`);
      this.$emit("tripDeleted", startDate);

      this.showTripCard = false;
      await updateDoc(docRef, {
        deleted: true,
      });
    },
  },
  emits: ["tripDeleted"],
};
</script>

<style>
.trip-card {
  position: relative;
}
.trip-card img {
  border-radius: 30px !important;
}
.overlay {
  position: absolute;
  border-top-left-radius: 30px !important;
  border-top-right-radius: 30px !important;
  top: 0;
  right: 0;
  left: 0;
  background: rgba(66, 66, 66, 0.525);
}
.description {
  position: absolute;
  font-size: smaller;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 90%;
}

.zoom-effect-1 {
  overflow: hidden;
}

.zoom-effect-1 img {
  border-radius: 30px !important;
  transform: scale(1);
  -webkit-transform: scale(1);
}

.zoom-effect-1:hover img {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}

.effect-image-1 {
  border-radius: 30px !important;
  position: relative;
  display: block;
}

.zoom-effect-1 img {
  transition: all 0.4s linear;
  -webkit-transition: all 0.4s linear;
  -moz-transition: all 0.4s linear;
  -o-transition: all 0.4s linear;
}

.tripcard {
  position: relative;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  padding: 40px 20px;
  transition: 0.25s;
}

.tripcard:hover {
  transform: scale(1.1);
}

.tripcard:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 45%;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1;
  transform: skewY(-5deg) scale(1.5);
}

.reveal-text {
  position: absolute;
  color: red;
}
</style>
