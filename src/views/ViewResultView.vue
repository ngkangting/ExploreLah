<template > 
    <div class="container-fluid">
      

  <div>
      <div class="row d-flex">
        <!-- Result -->
        <div class="col-md-6 col-lg-8 order-2 order-sm-2 order-md-1 order-lg-1 order-xl-1">
          <div class="card w-100 border-0 mt-4 ms-3" >
            <div class="card-body">
              <div class="row mb-3">
                  <div class="card-title">
                    <h3 class="text-secondary">
                      You are viewing: <span class="text-dark fw-bold">{{itineraryStore.name}}</span>
                    </h3> 
                  </div>  
                  <div class="col-12 col-lg-8">
                    <img
                    class="w-100 rounded"
                    src="../assets/img/mbs-4.jpg"
                    alt="..."
                    height="350"
                    />
                  </div>
                  <div
                  class="col-4 d-none d-lg-flex flex-column justify-content-between"
                  >
                  <div class="row">
                    <div class="col-12">
                      <img
                      class="w-100 rounded"
                      src="../assets/img/mbs-2.jpg"
                      alt="..."
                      height="165"
                      />
                    </div>
                    </div> 
                     <div class="row">
                      <div class="col-12">
                        <img
                        class="w-100 rounded"
                        src="../assets/img/mbs-1.jpeg"
                        alt="..."
                        height="165"
                        />
                      </div>
                    </div> 
                  </div>
                </div>
                <div class="row">
                  <div class="column col-6 col-lg-6 rounded-3 px-3 py-3">
                    <GoogleMapWPinsVue :pinsInfo="currentDayMarkers"/>
                    <!-- <GoogleMap :api-key="apiKey" style="width: 100%; height:500px; background-color: azure;" :center="center" :zoom="15">
                      <Marker v-for="pos in currentDayMarkers" :options="{ position: {lat:pos[1], lng:pos[2]} }" :icon="{url:('../../public/ico/food.ico'), size: {width:30, height:30}}" /> -->
                      <!-- <CustomMarker v-for="(pos, index) in markers" :options="{ position: pos}">
                          <img src="../../public/ico/food.ico" width="32" height="32" style="margin-top: 8px" />
                      </CustomMarker> -->
                    <!-- </GoogleMap>  -->
                  </div>
  
                  <div class="column col-6 col-lg-6 rounded-3 px-3 py-3">
                    <h3 class="pb-1 fw-bold">The Shopfkt Marina Bay Sands</h3>
  
                    <p class="mb-4">
                      <!--to add color -->
                      <span class="tag bg-grey rounded-2 p-1 px-2"
                      >Luxury Shopping</span
                      >
                      <span class="tag bg-grey rounded-2 p-1 px-2 ms-2"
                      >Night Life</span
                      >
                      <span class="tag bg-grey rounded-2 p-1 px-2 ms-2"
                      >Casino</span
                      >
                      <span class="tag bg-grey rounded-2 p-1 px-2 ms-2"
                      >Museum</span
                      >
                    </p>                 
                    <p>
                      <span>
                        <i
                        class="bg-grey bi bi-star-fill rounded-circle p-2 text-dark-blue"
                        ></i>
                      </span>
                      <span class="mx-2">
                        4.3 #4 of 339 in Shopping In Singapore
                      </span>
                    </p>
                    <p>
                      <span>
                        <i
                        class="bg-grey bi bi-pin-map-fill rounded-circle p-2 text-dark-blue"
                        ></i>
                      </span>
                      <span class="mx-2"> 10 Bayfront Ave, Singapore 018956 </span>
                    </p>
                    <p>
                      <span>
                        <i
                        class="bg-grey bi bi-clouds-fill rounded-circle p-2 text-dark-blue"
                        ></i>
                      </span>
                      <span class="mx-2"> Cloudy Day </span>
                    </p>
                    <p>
                      <span>
                        <i
                        class="bg-grey bi bi-currency-dollar rounded-circle p-2 text-dark-blue"
                        ></i>
                      </span>
                      <span class="mx-2"> Luxury Shopping </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
  
  
  
        </div>
        
        <!-- Locations -->
        <div
        class="col col-md-6 col-lg-4 order-1 order-sm-1 order-md-2 order-lg-2 order-xl-2"
        >
        <div
        class="nav nav-pills me-3"
        id="v-pills-tab"
        role="tablist"
            aria-orientation="vertical"
          >
          
          <PillTab
          v-for="(activity, index) in currentDayData"
          :key="index"
          :index="index"
          :isSelected="false"
          :isLast="false"
          :place="activity.name"
          :type="activity.tags"
          :arrivalTime="activity.arriveTime"
          :departureTime="activity.endTime"
          :forecast="activity.status"
          :duration="activity.dur"
          :travelTimeToThis="activity.travelTimeTo"
          :name="`pill-tab-${index}`"
          />
        </div>
        <!-- Next buttons -->
        <div class="row">
          <div class="col-6">
            <button class="btn btn-secondary" @click="goPrevDay">Prev</button>
            {{currDay}}
            <button class="btn btn-primary" @click="goNextDay()">Next</button>
          </div>
        </div>
        <button class="btn btn-pink" @click="goToFoodPage">Go to Food Page</button>
      </div>
    </div>
  </div>
  </div>
  </template>
  
  
  <script>
  import { useAuthStore } from "@/stores/auth";
  import { useItineraryStore } from "@/stores/itinerary";
  import { GoogleMap, Marker, CustomMarker } from "vue3-google-map";
  
  import PillTab from "@/components/result/PillTab.vue";
  import GoogleMapWPinsVue from "@/components/common/GoogleMapWPins.vue";
  
  export default {
    name: "ResultView",
    components: {
      PillTab,
      GoogleMap,
      Marker,
      CustomMarker,
      GoogleMapWPinsVue
    },
    data() {
      return {
        currDay: 1,
        showSkeleton:true,
        apiKey: 'AIzaSyAWD7RGn64dPl6DvyAQ4GciUGSWmsiF2Ys',
      };
    },
    setup() {
      const authStore = useAuthStore();
      const itineraryStore = useItineraryStore();
      const center = { lat: 1.29027, lng: 103.851959 };
      return { authStore, itineraryStore, center};
    },
    computed: {
      currentDayData() {
        try {
          return this.itineraryStore.itineraryList[this.currDay-1]["itinerary"];
        } 
        catch(err){
          return false
        }
      },
      currentDayDetails(){
        try {
          return this.itineraryStore.details[this.currDay-1];
        }
        catch(err){
          return false;
        }
      },
      currentDayMarkers(){
        return this.itineraryStore.itineraryList[this.currDay-1]["pinInfoList"];
      },


  
    },
    methods: {
      goPrevDay(){
        if (this.currDay != 1) {
          this.currDay -= 1;
        }
      },
      goNextDay(){
        if (this.currDay != this.itineraryStore.itineraryList.length) {
          this.currDay += 1;
        }
      },
      goToFoodPage(){
        this.$router.push({
          path: "/viewfood",
        });
      }
  
    },
  };
  </script>
  
  <style lang="scss">
  .column {
    font-size: smaller;
  }
  
  .bg-grey {
    background-color: #e9ecef;
  }
  
  .tag {
    font-size: small;
  }
  
  .skeleton{
    animation: skeleton-loading 1s linear infinite alternate;
    height: 165px;
    width:50px;
    opacity: 0.7;
  }
  
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200,20%, 70%);
    }
    100% {
      background-color: hsl(200,20%, 95%);
    }
  }
  
  .skeleton-text{
    width:100%;
    height:.5em;
    margin-bottom: 1rem;
    border-radius: .125rem;
  }
  
  .skeleton-text:last-child{
    margin-bottom: 0px;
    width:80%
  }
  </style>
  