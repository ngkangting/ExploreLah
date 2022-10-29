<template>
    <div class="container-fluid">
      <h3 class="text-center fw-semibold mb-4">Result</h3> 
      <div class="col-10 offset-1 card">
        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <GoogleMap api-key="AIzaSyA__JlBf_-nIjvNRUNSpM4gdrygcyDenm0" style="width: 100%; height: 85vh; background-color: azure;" :center="center" :zoom="15">
                <!-- <Marker v-for="(pos, index) in markers" :options="{ position: pos }" :icon="{url:('../../public/ico/food.ico'), size: {width:30, height:30}}" /> -->
                <CustomMarker v-for="(pos, index) in markers" :options="{ position: pos}">
                    <img src="../../public/ico/food.ico" width="32" height="32" style="margin-top: 8px" />
                </CustomMarker>
              </GoogleMap> 
            </div>
            <div class="col-6">
                <div class="row">
                  <div>
                    <button @click="toggleState" :class="lunchStyle">Lunch</button>
                    <button @click="toggleState" :class="dinnerStyle">Dinner</button>
                  </div>
                </div>  
                <div class="row">
                  <div>
                    <FoodLocation :data="shownFoodReco"></FoodLocation>
                    <!-- {{shownFoodReco}} -->
                  </div>
                </div>
                <div class="row">
                  <div class="col-6">
                    <button @click="goPrevDay">Prev</button>
                    {{currDay}}
                    <button @click="goNextDay">Next</button>
                  </div>
                </div>

           
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

import FoodLocation from "../components/resultpage/FoodLocation.vue";


  export default {
    name: "ResultPage",
    components: {
      GoogleMap, Marker, FoodLocation,CustomMarker
    },
    data() {
      return {
        state:1, //O for lunch, 1 for dinner
        currDay:1,
      };
    },
    setup(){
      const authStore = useAuthStore();
      const itineraryStore = useItineraryStore();
      const center = {lat: 1.290270 ,lng: 103.851959};
      return { authStore,itineraryStore, center };
    },
    computed:{
      foodReco(){
        return this.itineraryStore.foodReco;
      },
      lunchStyle(){
        if (this.state) {
          // return "text-dark-blue display-3 mx-5"
          return "selected-style text-dark-blue"
        } 
        return "unselected-style" //Add in unclicked button
      },
      dinnerStyle(){
        if (!this.state){
          return "selected-style text-dark-blue"
        } 
        return "unselected-style" //Add in unclicked button
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
          console.log(this.foodReco[this.currDay-1]["lunchPin"][0])
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
      }

      },
      
  
  };
  </script>
  
  <style lang="scss">
  .selected-style{
    font-weight: bold;
    border: none;
    background-color: transparent;
    font-size: 4rem;
  }

  .unselected-style{
    border:none;
    background-color: transparent;
    color: grey;
    font-size: 2rem;
  }

  </style>
  