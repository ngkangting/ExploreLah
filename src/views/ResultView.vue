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
                  src="../assets/img/mbs-1.jpeg"
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
                      src="../assets/img/mbs-3.jpeg"
                      alt="..."
                      height="165"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-5">
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
              </div>
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
            :place="'Mueseum of Old'"
            :type="'Arts & Culture'"
            :arrivalTime="'12:00'"
            :departureTime="'15:00'"
            :name="`pill-tab-${index}`"
          />

          <PillTab
            :index="0"
            :isSelected="true"
            :isLast="true"
            :place="'Mueseum of Old'"
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

<style lang="scss"></style>
