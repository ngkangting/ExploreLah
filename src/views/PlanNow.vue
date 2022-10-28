<template>         
 <ProgressPin1/>

    <div id="background" class="bg-dark-blue">
    </div>
  <div class="d-flex justify-content-center">
    <div class="col-lg-6 card mt-5 pt-5 pb-5 h-25">
      <div class="progress">
          <div class="progress-bar bg-pink" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" :style=progressCompleted></div>
        </div>
      <div class="card-body">
        <h5 class=" card-title text-center mt-4">
          Build Your Own Customised Itinerary Now!
        </h5>
        <p class="text-center">
          <!-- Catered to your personal preferences, find the best possible travel
          route! -->
          {{headerText[activePhase]}}
        </p>
        <form @submit.prevent="generateItinerary()" class="needs-validation" novalidate>
          <!-- Form Part 1 -->
          <template v-if="activePhase === 0">
              <div class="col-lg-8 offset-lg-2 mb-4">
                <label for="location" class="form-label" >Location</label>
                <input
                  type="text"
                  class="form-control"
                  id="location"
                  placeholder="Where are you staying?"
                  v-model="location"
                  required
                />
                <div v-if="!isLocationValid" class="text-danger">MAKE ME A SLOT PLEASE Empty Field</div> 
            </div>
            <div class="text-center">
              <button class="btn btn-pink" @click.prevent="goToNextStep()">Next</button>
            </div>
          </template>

          <!-- Form Part 2 -->
          <template v-if="activePhase === 1">
            <div class="col-6 offset-3 mb-4 mb-3 form-floating">
              <input
                type="date"
                class="form-control"
                id="start-date"
                v-model="startDate"
              />
              <label for="start-date" class="form-label">Start Date</label>

            </div>
            <div class="col-6 offset-3 mb-4">
              <label for="duration" class="form-label">Duration</label>
              <input
                type="number"
                class="form-control"
                id="duration"
                v-model="duration"
              />
              <div class="text-center">
              <button class="btn btn-link" @click.prevent="goToPrevStep()">Back</button>
              <button class="btn btn-pink" @click.prevent="goToNextStep()">Next</button>
            </div>
            </div>
          </template>

          <!-- Form Part 3 -->
          <template v-if="activePhase === 2">
            <div class="col-6 offset-3 mb-4">
            <div>
              <label for="shopping" class="form-label">Shopping</label>
              <input
                type="range"
                class="form-range"
                min="0"
                max="5"
                id="shopping"
                v-model="shopping"
              />
            </div>
            <div>
              <label for="arts-culture" class="form-label">Arts & Culture</label>
              <input
                type="range"
                class="form-range"
                min="0"
                max="5"
                id="arts-culture"
                v-model="arts"
              />
            </div>
            <div>
              <label for="outdoor" class="form-label">Outdoor</label>
              <input
                type="range"
                class="form-range"
                min="0"
                max="5"
                id="outdoor"
                v-model="outdoor"
              />
            </div>
            <div>
              <label for="adventure" class="form-label">Adventure</label>
              <input
                type="range"
                class="form-range"
                min="0"
                max="5"
                id="adventure"
                v-model="adventure"
              />
            </div>
            <div>
              <label for="nightlife" class="form-label">Nightlife</label>
              <input
                type="range"
                class="form-range"
                min="0"
                max="5"
                id="nightlife"
                v-model="nightlife"
              />
            </div>
            </div>
            <div class="text-center">
              <button class="btn btn-link" @click.prevent="goToPrevStep()">Back</button>
              <button class="btn btn-pink" @click.prevent="goToNextStep()">Next</button>
            </div>
          </template>
          <!-- Form Part 4 -->
          <template v-if="activePhase === 3">

            <div class="col-6 offset-3 mb-4">
              <h6>Transportation Method</h6>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="public-transport"
                  id="public-transport"
                  value="public"
                  v-model="transportation"
                  checked
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Public Transport
                </label>
              </div>
              
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="private-transport"
                  id="private-transport"
                  value="private"
                  v-model="transportation"
                />
                <label class="form-check-label" for="private-transport">
                  Private Transport
                </label>
              </div>
          </div>
          <div class="text-center">
            <button class="btn btn-link" @click.prevent="goToPrevStep()">Back</button>

            <button type="submit" class="btn btn-pink">Plan Now!</button>
          </div>
          </template>
        </form>
        
      </div>
    </div>
  </div>
  <!-- <MerlionMascot positionX=0 positionY=-150></MerlionMascot> -->

</template>

<script>
import {useItineraryStore} from "@/stores/itinerary";
import MerlionMascot from "../components/common/MerlionMascot.vue"

//Importing SVG
import ProgressPin1 from '../assets/svg/google.svg?sfc';

export default {
    name: "PlanNow",
    setup() {
        const itineraryStore = useItineraryStore();
        return { itineraryStore };
    },
    components:{
      ProgressPin1, MerlionMascot
    },
    data() {
        return {
            location: "",
            startDate: "",
            duration: "",
            shopping: 0,
            arts: 0,
            outdoor: 0,
            adventure: 0,
            nightlife: 0,
            transportation: "",
            activePhase: 0,
            checkLocation:false,
            headerText: ['Where do you want to start from?', "How many days will this trip be?", "What type of activities are you interested in?", "Lastly, how are you planning on travelling?"],
        };
    },
    computed: {
        progressCompleted() {
            return `width:${this.activePhase * 33.33}%`;
        },
        isLocationValid() {
          return this.location || !this.checkLocation
        },
    },
    methods: {
        generateItinerary() {
            let parsedStartDay = new Date(this.startDate);
            let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const userInfo = {
                name: "ignore",
                startLoc: this.location,
                day: days[parsedStartDay.getDay()],
                dur: this.duration,
                byCar: this.transportation == "public" ? true : false,
                pref: {
                    shop: parseInt(this.shopping),
                    arts: parseInt(this.arts),
                    outdoor: parseInt(this.outdoor),
                    adventure: parseInt(this.adventure),
                    nightlife: parseInt(this.nightlife)
                },
            };
            this.itineraryStore.fetchItinerary(userInfo);
            this.redirect();
        },
        redirect() {
            this.$router.push({
                name: "Result",
            });
        },
        goToNextStep() {
            // Check if the first step is filled in, if it is not don't let them go to second page
            if (this.activePhase==0 && this.location ==""){
              this.checkLocation = true;
            } else {
              this.activePhase += 1;
            }
        },
        goToPrevStep() {
            this.activePhase -= 1;
        }
    },
    created() {
        console.log(this.activePhase);
    },
    components: { MerlionMascot }
};
</script>

<style>
  @import '../assets/breakpoints_ref.css';

  .progress{
    height: 8px !important;
    margin-top: -17px !important;
    
  }
  
  #background{
    height:200px;
    position:absolute;
    width: 100vw;
  }

</style>
