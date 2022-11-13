<template>
  <div class="container-fluid bg-image p-0">
    <div
      class="parallax d-flex flex-column justify-content-center align-items-center"
      :style="{ minHeight: 'calc(85vh - 75px)' }"
    >
      <h1 class="fw-bold text-white display-3 pb-3">Relive your trips</h1>
      <h3 class="text-white type">
        <span v-if="(pastTrips.length + upcomingTrips.length) == 0"
          >Start planning your trips now!
        </span>
        <span v-else
          >Together, we have planned
          {{ upcomingTrips.length + pastTrips.length }} trips!
        </span>
      </h3>
    </div>

    <div v-if="noShownTrips">
      <div class="p-5 text-center justify-content-center">
        <div class="display-4 mb-2">
          No planned trips yet!
        </div >
        <div class="col-sm-6 offset-sm-3  mb-5">
          <div
            class="d-flex justify-content-center align-items-center bg-light-blue h-100 w-100 text-center p-3 py-5 rounded-4"
          >
            <div class="fw-bold w-90 display-5 me-3">{{counter}}</div>
            <h5>
              trips planned and counting!            
            </h5>
          </div>
        </div>
        <h2 class="fw-bold">Start planning your first trip with us!</h2>
      </div>
    </div>
    
    <div v-else>
      <div class="p-5">
        <h3 class="fw-bold px-3 py-2">
          Upcoming & Current Trips ({{
            upcomingTrips.length - deletedItemsUpcoming
          }})
        </h3>
        <div v-if="!loaded" class="text-center">
          <!-- <div v-if="!loaded" class="text-center"> -->
          <!-- <div  class="spinner-border" role="status" style="width: 5rem; height: 5rem;stroke-width:;">
            </div>           -->
          <div class="row d-none d-sm-none d-md-flex">
            <TripCardSkeleton v-for="info in 3" />
          </div>
        </div>
        <div v-else class="row d-none d-sm-none d-md-flex">
          <TripCard
            v-for="info in this.upcomingTrips"
            :dayData="info"
            @trip-Deleted="tripDeletedHandler"
          />
        </div>
        <div class="row d-md-none d-lg-none d-xl-none">
          <PhoneTripCard
            v-for="info in this.upcomingTrips"
            :dayData="info"
            @trip-Deleted="tripDeletedHandler"
          />
        </div>
      </div>
      <div class="px-5 pb-5">
        <h3 class="fw-bold px-3 py-2">
          Past Trips ({{ pastTrips.length - deletedItemsPast }})
        </h3>
        <div v-if="!loaded" class="text-center">
          <!-- <div  class="spinner-border" role="status" style="width: 5rem; height: 5rem;stroke-width:;">
            </div>           -->
          <div class="row d-none d-sm-none d-md-flex">
            <TripCardSkeleton v-for="info in 1" />
          </div>
        </div>
  
        <div v-else class="row d-none d-sm-none d-md-flex">
          <TripCard
            v-for="info in this.pastTrips"
            :dayData="info"
            @trip-Deleted="tripDeletedHandler"
          />
        </div>
        <div class="row d-md-none d-lg-none d-xl-none">
          <PhoneTripCard
            v-for="info in this.pastTrips"
            :dayData="info"
            @trip-Deleted="tripDeletedHandler"
          />
        </div>
      </div>
    </div>

    <lottie-player 
      v-if="noShownTrips"
      class="w-100 mx-auto position-absolute"
      style="z-index:1; top: 75vh;"
      src="https://assets5.lottiefiles.com/packages/lf20_iIAhmmGBMG.json"
      background="transparent"
      speed="1"
      loop
      autoplay
    ></lottie-player>
  </div>
</template>

<script>
import TripCard from "@/components/common/TripCard.vue";
import TripCardSkeleton from "@/components/common/TripCardSkeleton.vue";
import Footer from "@/components/layout/Footer.vue";
import PhoneTripCard from "@/components/common/PhoneTripCard.vue";

import { useAuthStore } from "@/stores/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import firebaseApp from "../firebaseConfig";
import { useItineraryStore } from "../stores/itinerary";

export default {
  name: "MyTrips",
  data() {
    return {
      data: {},
      triggerWatcher: 0,
      loaded: false,
      upcomingTrips: [],
      pastTrips: [],
      deletedItemsUpcoming: 0,
      deletedItemsPast: 0,
      counter:258,
    };
  },
  components: {
    TripCard,
    TripCardSkeleton,
    Footer,
    PhoneTripCard,
  },
  setup() {
    const db = getFirestore(firebaseApp);
    const authStore = useAuthStore();
    const itineraryStore = useItineraryStore();
    return { authStore, db, itineraryStore };
  },
  mounted() {
    setInterval(this.addCount, 2300);
    this.triggerWatcher += 1;
    //Runs whenever got snapshot
    const q = query(collection(this.db, this.authStore.userUid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      //clear current itienrarystore
      this.itineraryStore.myTripsData = {};
      querySnapshot.forEach((doc) => {
        this.itineraryStore.myTripsData[doc.id] = doc.data();
        // console.log(doc.id, " => ", doc.data());
        this.itineraryStore.myTripsData = this.data;
      });
    });
  },
  computed: {
    async userUid() {
      await this.authStore.getUid.then((uid) => {
        return uid;
      });
      return null;
    },
    noShownTrips(){
      if ((this.pastTrips.length - this.deletedItemsPast + this.upcomingTrips.length -this.deletedItemsUpcoming) == 0) {
        return true
      }
      return false
    }
  },
  watch: {
    async triggerWatcher() {
      //Check if store have
      if (this.authStore.isLoggedIn != null) {
        if (this.itineraryStore.myTripsDataExist) {
          this.loaded = true;
          //When redirect gets here
        } else {
          //Get from firebaseDB this work...
          this.loaded = false;
          this.loaded = true;
        }
        this.parseTrips();

      }
    },
  },
  methods: {
    addCount(){
      // Math.floor(Math.random() * 35)
      this.counter += Math.floor(Math.random() * 35);
    },
    tripDeletedHandler(tripDate) {
      let todayDate = new Date();
      todayDate.setDate(todayDate.getDate() - 1);
 
      if (tripDate >= todayDate) {
        //Minus from upcoming
        this.deletedItemsUpcoming += 1;
      } else {
        this.deletedItemsPast += 1;
      }
    },
    parseTrips() {
      for (var info in this.itineraryStore.myTripsData) {
        let tempData = JSON.parse(
          this.itineraryStore.myTripsData[info]["input"]
        );
        let tripDate = new Date(tempData.dates[1]);
        let todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + 1);

        if (this.itineraryStore.myTripsData[info]["deleted"] == true) {
          //pass
        } else if (tripDate >= todayDate) {
          //Adding in the unique document ID
          this.itineraryStore.myTripsData[info]["docID"] = info;
          this.upcomingTrips.push(this.itineraryStore.myTripsData[info]);
          //Write to itinerary store
        } else {
          this.itineraryStore.myTripsData[info]["docID"] = info;
          this.pastTrips.push(this.itineraryStore.myTripsData[info]);
        }
      }
      return null;
    },
  },
 
};
</script>

<style>
.search {
  background-color: #f2f2f2;
  width: 35%;
}

input:focus,
input.form-control:focus {
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}

.parallax {
  /* The image used */
  background-image: url("../assets/img/mytripsbg.png");

  /* Set a specific height */
  min-height: 40vh;
  width: 100%;
  overflow: hidden;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.type {
  display: inline-flex;
}

.type span {
  word-break: break-all;
  height: 1.2em;
  width: 0%;
  overflow: hidden;
  animation: t 3.5s linear infinite alternate;
}

.type span:before {
  content: " ";
  display: inline-block;
}

@keyframes t {
  90%,
  100% {
    width: 100%;
  }
}
</style>
