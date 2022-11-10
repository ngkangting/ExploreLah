<template>
    <div class="container-fluid pb-5"> 
      <h1 class="text-center fw-semibold p-4">
        Recommended Food Places
      </h1> 
      <div class="col-10 offset-1 card border-0 p-3 rounded-4">
        <div class="card-body">
          <h2 class="mb-4 py-2 fw-bold d-flex justify-content-center text-white bg-dark-blue">
            Day {{currDay}}
          </h2>

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
              <button type="button" class="btn btn-pink" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Save Itinerary
              </button>

              <!-- Modal -->
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Give this trip a name!</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <input class="form-control" type="text" v-model="inputName" placeholder="Exciting day trip!">
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-pink" @click="saveItineraryToDb" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Save Trip</button>
                    </div>
                  </div>
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
import {getFirestore, collection, addDoc} from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

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
      inputName:null,
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
        console.log("hi")
        console.log(this.itineraryStore.details)
      }
    },
    goNextDay(){
      if(this.currDay!= Object.keys(this.foodReco).length){
        this.currDay += 1
        console.log("hi")
        console.log(this.itineraryStore.details)
      }
    },
    async saveItineraryToDb(){
        //Write to DB
        let userID = this.authStore.user.uid;
        let itineraryList = this.itineraryStore.itineraryList;
        let foodReco = this.itineraryStore.foodReco;
        let itineraryInput = this.itineraryStore.itineraryInput;
        let details = this.itineraryStore.details;
        try {
            const docRef = await addDoc(collection(this.db, userID), {
              name: JSON.stringify(this.inputName),
              itinerary : JSON.stringify(itineraryList),
              food : JSON.stringify(foodReco),
              input : JSON.stringify(itineraryInput),
              details: JSON.stringify(details),
            });
            console.log("Document written with ID: ", docRef.id);
            this.$router.push({
              path: "/mytrips",
            });
          } catch (e) {
            console.error("Error adding document: ", e);
          }
      },

    },
    

};
</script>

<style lang="scss">
.selected-style, .unselected-style {
  font-weight:bold;
}

</style>
  