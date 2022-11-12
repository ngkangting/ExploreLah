<template>
    <div class="container-fluid pb-5"> 
      <h1 class="text-center fw-semibold p-4">
        Recommended Food Places
      </h1> 
      <div class="col-10 offset-1 card border-0 p-3 rounded-4">                  <div class="card-title">
                    <h3 class="text-secondary">
                      You are viewing: <span class="text-dark fw-bold">{{itineraryStore.name}}</span>
                    </h3> 
                  </div> 
        <div class="card-body">
          <h2 class="mb-4 py-2 fw-bold d-flex justify-content-center text-white bg-dark-blue">
            Day {{currDay}}
          </h2>

          <div class="row">
            <div class="col-6">
              <GoogleMapWPinsForFood :pinsInfo="markers"/> 

              <!-- <GoogleMap :api-key="apiKey" style="width: 100%; height: 85vh; background-color: azure;" :center="center" :zoom="15"> -->
                <!-- <Marker v-for="(pos, index) in markers" :options="{ position: pos }" :icon="{url:('../../public/ico/food.ico'), size: {width:30, height:30}}" /> -->
                <!-- <CustomMarker v-for="(pos, index) in markers" :options="{ position: pos}">
                    <img src="../../public/ico/food.ico" width="32" height="32" style="margin-top: 8px" />
                </CustomMarker> -->
              <!-- </GoogleMap>  -->
            </div> 
            
            <div class="col-6">
              <ul class="nav nav-tabs">
                <li class="nav-item">
                  <button @click="toggleState" class="nav-link" :class="lunchStyle">
                    Lunch
                  </button>
                </li>
                <li class="nav-item">
                  <button @click="toggleState" class="nav-link" :class="dinnerStyle">
                    Dinner
                  </button>
                </li>
              </ul>

              <div class="row">
                <div>
                  <FoodLocation :data="shownFoodReco"></FoodLocation>
                  <!-- {{shownFoodReco}} -->
                </div>
              </div>

              <div class="d-flex justify-content-center py-2">
                <button @click="goPrevDay" class="rounded bg-dark-blue border-0 p-2 px-3 text-white">
                  Prev
                </button>
                <span class="mx-3 d-flex justify-content-center align-items-center">
                  Day {{currDay}}
                </span>
                <button @click="goNextDay" class="rounded bg-dark-blue border-0 py-1 px-3 text-white">
                  Next
                </button>
              </div>
              <!-- Button trigger modal -->
              <button type="button" class="btn btn-pink" @click="redirectToMyTrips">
                Back to My Trips
              </button>


            </div>
          </div>
        </div>
      </div>
    </div>

</template>
  
  <script>
import { useAuthStore } from "@/stores/auth";
import {useItineraryStore} from "@/stores/itinerary";
import { GoogleMap, Marker, CustomMarker } from "vue3-google-map";
import {getFirestore} from "firebase/firestore";
import firebaseApp from "../firebaseConfig";
import GoogleMapWPinsForFood from "@/components/common/GoogleMapWPinsForFood.vue";

import FoodLocation from "../components/resultpage/FoodLocation.vue";


export default {
  name: "ResultPage",
  components: {
    GoogleMap, Marker, FoodLocation,CustomMarker, GoogleMapWPinsForFood
  },
  data() {
    return {
      state:1, //O for lunch, 1 for dinner
      currDay:1,
      inputName:null,
      apiKey: 'AIzaSyAWD7RGn64dPl6DvyAQ4GciUGSWmsiF2Ys',

    };
  },
  setup(){
    const db = getFirestore(firebaseApp);
    const authStore = useAuthStore();
    const itineraryStore = useItineraryStore();
    const center = {lat: 1.290270 ,lng: 103.851959};
    return { authStore,itineraryStore, center,db};
  },
  computed:{
    foodReco(){
      return this.itineraryStore.foodReco;
    },
    lunchStyle(){
      if (this.state) {
        // return "text-dark-blue display-3 mx-5"
        return "selected-style text-white bg-blue"
      } 
      return "unselected-style text-secondary"
    },
    dinnerStyle(){
      if (!this.state){
        return "selected-style text-white bg-blue"
      } 
      return "unselected-style text-secondary"
    },
    shownFoodReco(){
      if (this.state) {
        //Show lunch reco
        return this.foodReco[this.currDay-1]["lunch"]
      } 
      return this.foodReco[this.currDay-1]["dinner"]
    },
    markers(){
      if(this.state) {
        return this.foodReco[this.currDay-1]["lunchPin"]
      }
      return this.foodReco[this.currDay-1]["dinnerPin"]

    }
  },

  methods: {
    toggleState(){
      this.state = !this.state;
    },
    goPrevDay(){
      if (this.currDay != 1) {
        this.currDay -= 1;
      }
    },
    goNextDay(){
      if(this.currDay!= Object.keys(this.foodReco).length){
        this.currDay += 1
      }
    },
    redirectToMyTrips(){
        this.$router.push({
          path: "/mytrips",
        });
    }


    },
    

};
</script>

<style lang="scss">
.selected-style, .unselected-style {
  font-weight:bold;
}

</style>
  