<template>
  <div class="container-fluid ">
    <div class="row mt-4 mb-5">
      <h3 class="text-center mb-4 fw-bold">Relive your trips</h3>

      <form class="d-flex w-50 mx-auto" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <i class="bi bi-search"></i>
      </form>
    </div>

    <div class="row mx-4 mb-3">
      <div class="col-lg-3 col-md-6">
        <TripCard />
      </div>
      <div class="col-lg-3 col-md-6">
        <TripCard />
      </div>
      <div class="col-lg-3 col-md-6">
        <TripCard />
      </div>
      <div class="col-lg-3 col-md-6">
        <TripCard />
      </div>
    </div>
    <div class="row mx-4 mb-3">
      <div class="col-lg-3 col-md-6">
        <TripCard />
      </div>
      <div class="col-lg-3 col-md-6">
        <TripCard />
      </div>
      <div class="col-lg-3 col-md-6">
        <TripCard />
      </div>
      <div class="col-lg-3 col-md-6">
        <TripCard />
      </div>
    </div>
  </div>
</template>

<script>
import TripCard from "@/components/common/TripCard.vue";


export default {
  name: "MyTrips",
  data() { },
  components: {
    TripCard
  },
  methods: {
  },
};
</script>

<style>

</style>
