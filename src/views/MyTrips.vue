<template>
  <div class="container-fluid bg-image p-0">
    <div class="background parallax">
      <div class="d-flex justify-content-center py-5">
        <div>
          <h1 class="py-5 fw-bold text-white display-3">
            <span> Relive your trips </span>
          </h1>
        </div>
      </div>

      <div class="d-flex justify-content-center pt-0">
        <h3 class="text-white type">
          <span>
            Together, we have planned
            {{ upcomingTrips.length + pastTrips.length }} trips!
          </span>
        </h3>
      </div>
    </div>

    <div class="p-5" >
      <h3 class="fw-bold px-3 pt-4">
        Upcoming & Current Trips ({{ upcomingTrips.length - deletedItemsUpcoming }})
      </h3>
      <div v-if="!loaded" class="text-center">
      <!-- <div v-if="!loaded" class="text-center"> -->
        <!-- <div  class="spinner-border" role="status" style="width: 5rem; height: 5rem;stroke-width:;">
          </div>           -->
        <div class="row d-none d-sm-none d-md-flex">
          <TripCardSkeleton v-for="info in 3" />
        </div>
      </div>
      <div v-else class="row d-none d-sm-none d-md-flex" >
        <TripCard v-for="info in this.upcomingTrips" :dayData="info" @trip-Deleted="tripDeletedHandler" />
      </div>
      <div class="row d-md-none d-lg-none d-xl-none">
        <PhoneTripCard v-for="info in this.upcomingTrips" :dayData="info" />
      </div>
    </div>
    <div class="px-5 pb-5">
      <h3 class="fw-bold px-3">Past Trips ({{ pastTrips.length - deletedItemsPast }})</h3>
      <div v-if="!loaded" class="text-center">
        <!-- <div  class="spinner-border" role="status" style="width: 5rem; height: 5rem;stroke-width:;">
          </div>           -->
        <div class="row d-none d-sm-none d-md-flex">
          <TripCardSkeleton v-for="info in 1" />
        </div>
      </div>

      <div v-else class="row d-none d-sm-none d-md-flex">
        <TripCard v-for="info in this.pastTrips" :dayData="info" @trip-Deleted="tripDeletedHandler" />
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
  doc
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
      deletedItemsUpcoming:0,
      deletedItemsPast:0,
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
      if (this.authStore.user != null) {
        const q = query(collection(this.db, this.authStore.user.uid));
        const querySnapshot = await getDocs(q);
        // console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.itineraryStore.myTripsData[doc.id] = doc.data();
          // console.log(doc.id, " => ", doc.data());
        });
        //Write to
        this.loaded = true;
        this.parseTrips();
      }
    },
  },
  methods: {
    tripDeletedHandler(tripDate) {
      
      let todayDate = new Date();
      todayDate.setDate(todayDate.getDate() + 1);
      if (tripDate > todayDate) {
        //Minus from upcoming
        this.deletedItemsUpcoming += 1;
      } else {
        this.deletedItemsPast += 1;
      }
    },
    parseTrips() {
      
      for (var info in this.itineraryStore.myTripsData) {
        let tempData = JSON.parse(this.itineraryStore.myTripsData[info]["input"]);
        let tripDate = new Date(tempData.dates[1]);
        let todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + 1);
        if (this.itineraryStore.myTripsData[info]["deleted"] == true) {
          //pass
        } else if (tripDate > todayDate) {
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
  handleDelete(){
    console.log("deleted")
  }
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
