<template>
  <div class="trip-card p-4 col-md-6 col-lg-4 col-xl-3" @click="viewItinerary">
    <div class="effect-image-1 zoom-effect-1">
      <img src="../../assets/img/tripcard.jpg" class="w-100" />
      <div
        class="overlay text-white d-flex justify-content-center align-items-center text-center"
        style="bottom: 45% !important"
      >
        <div>
          <h3>{{ dayData.name.slice(1, -1) }}</h3>
          <div>{{ startDate }} - {{ endDate }}</div>
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
            @click="generateReport"
            type="btn"
            class="btn bg-pink text-white btn-sm my-2"
          >
            Download as PDF
          </button>
        </p>
      </div>
    </div>
    <!-- <vue3-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :preview-modal="true"
      :paginate-elements-by-height="1400"
      :filename="dayData.name.slice(1, -1)"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a4"
      pdf-orientation="landscape"
      pdf-content-width="1100px"
      @progress="onProgress($event)"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"
      ref="html2Pdf"
    >
      <template v-slot:pdf-content>
        <span>
          <h1 class="text-center">
            {{ dayData.name.slice(1, -1) }}
          </h1>
          <h5 class="text-center">{{ startDate }} - {{ endDate }}</h5>
          <p>
            <span class="fw-bold ms-5 ps-5">Starting Location: </span
            >{{ input.startLoc }}
          </p>
          <div
            v-for="(day, index1) in itinerary"
            :key="index1"
            class="py-2 ms-5 ps-5"
          >
            <h5 class="fw-bold">Day {{ index1 + 1 }}</h5>
            <div
              v-for="(activity, index2) in day.itinerary"
              :key="index2"
              class="py-2 ms-5 ps-5"
            >
              <p class="text-decoration-underline">Activity {{ index2 + 1 }}</p>
              <p><span class="fw-bold">Location: </span> {{ activity.name }}</p>
              <p>
                <span class="fw-bold">Start time: </span>
                {{ activity.arriveTime }}
              </p>
              <p>
                <span class="fw-bold">End Time: </span> {{ activity.endTime }}
              </p>
              <p>
                <span class="fw-bold">Duration of Activity: </span>
                {{ activity.dur }} Hours
              </p>
              <p>
                <span class="fw-bold">Travel Time: </span>
                {{ activity.travelTimeTo }} Minutes
              </p>
              <p>
                <span class="fw-bold">Weather: </span> {{ activity.status }}
              </p>
            </div>
          </div>
        </span>
      </template>
    </vue3-html2pdf> -->
  </div>
</template>

<script>
import { useItineraryStore } from "@/stores/itinerary";
// import Vue3Html2pdf from "vue3-html2pdf";

export default {
  name: "TripCard",
  props: {
    dayData: null,
  },
  components: {
    // Vue3Html2pdf,
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
    };
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
  created() {
    let currDate = new Date();
  },
  setup() {
    const itineraryStore = useItineraryStore();
    return { itineraryStore };
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
    generateReport() {
      // this.$refs.html2Pdf.generatePdf(document.getElementById("pdf-content"));
    },
  },
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
</style>
