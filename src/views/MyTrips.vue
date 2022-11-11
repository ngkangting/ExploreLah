4jcYrtYH2Qca4REE2zW6TuIzkTr2<template>
  <div class="container-fluid bg-image p-0">
    <div class="background parallax">
      <div class="d-flex justify-content-center my-5">
        <h1 class="type my-5 fw-bold text-white display-4">
          <span> Relive your trips </span>
        </h1>
      </div>
      <div>
        <form
          class="search d-flex mx-auto align-items-center rounded-5"
          role="search"
        >
          <i class="bi bi-search mr-5 text-dark-blue ms-3"></i>
          <input
            class="form-control border-0 me-2 bg-transparent my-1 text-dark-blue"
            type="text"
            placeholder="Search Trips"
            aria-label="Search"
          />
        </form>
      </div>
    </div>
      <div class="mt-5 mb-5 mx-5">
        <h3 class="fw-bold px-3 mt-4">Upcoming & Current Trips ({{upcomingTrips.length}})</h3>
        <div v-if="!loaded" class="text-center">
          <!-- <div  class="spinner-border" role="status" style="width: 5rem; height: 5rem;stroke-width:;">
          </div>           -->
          <div  class="row d-none d-sm-none d-md-flex">
            <TripCardSkeleton v-for="info in 3" 
            /> 
          </div>
        </div>
        <div v-else class="row d-none d-sm-none d-md-flex">
           <TripCard v-for="info in this.upcomingTrips" 
                  :dayData="info"/> 
        </div>
        <div class="row d-md-none d-lg-none d-xl-none">
          <PhoneTripCard />
        </div>
      </div>
      <div class="mx-5 mb-5">
        <h3 class="fw-bold px-3">Past Trips ({{pastTrips.length}})</h3>
        <div v-if="!loaded" class="text-center">
          <!-- <div  class="spinner-border" role="status" style="width: 5rem; height: 5rem;stroke-width:;">
          </div>           -->
          <div  class="row d-none d-sm-none d-md-flex">
            <TripCardSkeleton v-for="info in 1" 
                  /> 
          </div>
        </div>


          <div v-else class="row d-none d-sm-none d-md-flex">
            <TripCard v-for="info in this.pastTrips" 
                  :dayData="info"/> 

          </div>
          <div class="row d-md-none d-lg-none d-xl-none">
            <PhoneTripCard />
            <PhoneTripCard />
            <PhoneTripCard />
            <PhoneTripCard />
            <PhoneTripCard />
            <PhoneTripCard />
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
import {getFirestore, collection, query, where, getDocs} from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

export default {
  name: "MyTrips",
  data() {
    return {
      data: {},
      triggerWatcher:0,
      loaded:false,
      upcomingTrips:[],
      pastTrips:[]
    }
  },
  components: {
    TripCard,
    TripCardSkeleton,
    Footer,
    PhoneTripCard,
  },
  setup(){
    const db = getFirestore(firebaseApp);
    const authStore = useAuthStore();
    return { authStore, db}
  },
  mounted(){
    this.triggerWatcher += 1;
  },
  computed: {
    async userUid(){
      await this.authStore.getUid.then(uid => {
        return uid
      });
      return null;
    },
    
  },
  watch:{
    async triggerWatcher(){
      if (this.authStore.user != null) {
        const q = query(collection(this.db,this.authStore.user.uid));
        const querySnapshot = await getDocs(q);
        // console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          this.data[doc.id] = doc.data();
          // console.log(doc.id, " => ", doc.data());
        })
        this.loaded = true;
        this.parseTrips();
      }
      
    }
  },
  methods: {
    parseTrips(){
      for(var info in this.data){
        let tempData =  JSON.parse(this.data[info]["input"]);
        let tripDate = new Date(tempData.dates[1]);
        let todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + 1);
        if (tripDate > todayDate ){
          this.upcomingTrips.push(this.data[info])
        } else {
          this.pastTrips.push(this.data[info])
        }  
      }
      return null
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
  min-height: 500px;
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
  animation: t 2s linear infinite alternate;
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
