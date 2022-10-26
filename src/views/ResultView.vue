<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Result -->
      <div class="col col-lg-8">
        <div class="card w-100 border-0">
          <div class="card-body">
            <div class="row mb-3">
              <div class="col-8">
                <img
                  class="w-100 rounded"
                  src="../assets/img/mbs-4.jpg"
                  alt="..."
                  height="350"
                />
              </div>
              <div class="col-4 d-flex flex-column justify-content-between">
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
              <div>
                
              </div>
              <div class="column col-6 rounded-3 px-3 py-3">
              
                <h4 class="pb-2 fw-bold">The Shoppes at Marina Bay Sands</h4>

                <p class="mb-4">
                  <span class="tag bg-grey rounded-2 p-1 px-2 text-dark-blue">Luxury Shopping</span>
                  <span class="tag bg-grey rounded-2 p-1 px-2 text-dark-blue ms-2">Night Life</span>
                  <span class="tag bg-grey rounded-2 p-1 px-2 text-dark-blue ms-2">Casino</span>
                  <span class="tag bg-grey rounded-2 p-1 px-2 text-dark-blue ms-2">Museum</span>
                </p>
                
                <p>
                  <span>
                    <i class="bg-grey bi bi-star-fill rounded-circle p-2 text-dark-blue"></i>
                  </span>
                  <span class="mx-2">
                    4.3 #4 of 339 in Shopping In Singapore
                  </span>
                </p>
                <p>
                  <span>
                    <i class="bg-grey bi bi-pin-map-fill rounded-circle p-2 text-dark-blue"></i>
                  </span>
                  <span class="mx-2">
                    10 Bayfront Ave, Singapore 018956
                  </span>
                </p>
                <p>
                  <span>
                    <i class="bg-grey bi bi-clouds-fill rounded-circle p-2 text-dark-blue"></i>
                  </span>
                  <span class="mx-2">
                    Cloudy Day
                  </span>
                </p>
                <p>
                  <span>
                    <i class="bg-grey bi bi-currency-dollar rounded-circle p-2 text-dark-blue"></i>
                  </span>
                  <span class="mx-2">
                    Luxury Shopping
                  </span>
                </p>
              </div>

              <div class="column col-6 rounded px-2 py-3">
                <h6>
                  Highlights
                </h6>
                <ul>
                  <li class="py-1">Shop at luxury brands such as Balenciga, Chanel, Dior</li>
                  <li class="py-1">Award winning restaurants such as db Bistro & Oyster Bar</li>
                  <li class="py-1">SkyPark Observation Deck</li>
                  <li class="py-1">Digital Light Canvas & Sampan Rides</li>
                  <li class="py-1">Arts & Science Museum</li>
                  <li class="py-1">Casino</li>
                  <li class="py-1">Marquee Nightclub</li>
                </ul>
              </div>


              <!--address, weather, ratings, price range, summary, highlights-->
              <!-- <div class="col-5">
                <div class="bg-light p-2 h-100 rounded">Test</div>
              </div>
              <div class="col-7">
                <h5 class="card-title">Marina Bay Sands</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quisque id diam vel quam elementum pulvinar etiam non quam.
                  Elementum eu facilisis sed odio. Nibh sit amet commodo nulla.
                  Dui nunc mattis enim ut tellus elementum sagittis vitae.
                </p>
              </div> -->
            </div>
          </div>
        </div>
      </div>

      <!-- Locations -->
      <div class="col col-lg-4">
        <div
          class="nav nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <PillTab
            v-for="index in 3"
            :key="index"
            :index="index"
            :isSelected="false"
            :isLast="false"
            :place="'Museum of Old'"
            :type="'Arts & Culture'"
            :arrivalTime="'12:00'"
            :departureTime="'15:00'"
            :name="`pill-tab-${index}`"
          />

          <PillTab
            :index="0"
            :isSelected="true"
            :isLast="true"
            :place="'Museum of Old'"
            :type="'Arts & Culture'"
            :arrivalTime="'12:00'"
            :departureTime="'15:00'"
          />
        </div>
      </div>
    </div>
  </div>
  <div>
    <button @click="redirectToFood()">Go to Food Reco</button>
  </div>
</template>

<script>
import PillTab from "@/components/result/PillTab.vue";

export default {
  name: "ResultView",
  components: {
    PillTab,
  },
  data() {
    return {};
  },
  methods: {
    getUser() {},
    redirectToFood(){
      this.$router.push({
        name:"Food Recommendation"
      })
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
</style>
