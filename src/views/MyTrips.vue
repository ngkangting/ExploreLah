<template>
  <div class="container-fluid bg-image p-0">
    <div
      class="parallax d-flex flex-column justify-content-center align-items-center"
      :style="{ minHeight: 'calc(80vh - 75px)' }"
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

    <div class="p-5">
      <h3 class="fw-bold px-3 pt-4">
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
        <PhoneTripCard v-for="info in this.upcomingTrips" :dayData="info" />
      </div>
    </div>
    <div class="px-5 pb-5">
      <h3 class="fw-bold px-3">
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
        <PhoneTripCard v-for="info in this.pastTrips" :dayData="info" />
      </div>
    </div>
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
  onSnapshot
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
    this.triggerWatcher += 1;    
    //Runs whenever got snapshot
    const q = query(collection(this.db, this.authStore.userUid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      //clear current itienrarystore
      this.itineraryStore.myTripsData = {}
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
  },
  watch: {
    async triggerWatcher() {
      //Check if store have
     if (this.authStore.isLoggedIn != null) {
        if (this.itineraryStore.myTripsDataExist){
          this.loaded = true;
          //When redirect gets here
        } else {
          //Get from firebaseDB this work...
          this.loaded = false;
          // console.log(`Is loading is ${this.loaded}`)
          // const q = query(collection(this.db, this.authStore.userUid));
          // const querySnapshot = await getDocs(q);
          // // console.log(querySnapshot);
          // querySnapshot.forEach((doc) => {
          //   // doc.data() is never undefined for query doc snapshots
          //   this.itineraryStore.myTripsData[doc.id] = doc.data();
          //   // console.log(doc.id, " => ", doc.data());
          //   this.itineraryStore.myTripsData = this.data;
          // });
          // this.itineraryStore.myTripsDataExist = true;
          // console.log("We have loaded ")
          this.loaded = true;
        }
        this.parseTrips();
        // querySnapshot.forEach((doc) => {
        //   // doc.data() is never undefined for query doc snapshots
        //   this.data[doc.id] = doc.data();
        //   // console.log(doc.id, " => ", doc.data());
        //   this.itineraryStore.myTripsData = this.data;
        //   this.loaded = true;
        //   this.parseTrips();
        // });
        //Write to local
      }
    },
  },
  methods: {
    tripDeletedHandler(tripDate) {
      console.log("Event recieved")
      let todayDate = new Date();
      todayDate.setDate(todayDate.getDate() + 1);
      console.log(`The trip date is GREATER than today ${tripDate > todayDate}`)
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
  handleDelete() {
    console.log("deleted");
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
