<template>
  <div class="container-fluid">
    <div class="row mt-4 mb-5">
      <h3 class="text-center mb-4 fw-bold">Relive your trips!</h3>

      <form class="d-flex mx-auto align-items-center rounded" style="width: 30%" role="search">
        <i class="bi bi-search mr-5"></i>
        <input class="form-control border-0 me-2" type="text" placeholder="Search" aria-label="Search" />
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

  <Footer></Footer>
</template>

<script>
import TripCard from "@/components/common/TripCard.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "MyTrips",
  data() { },
  components: {
    TripCard,
    Footer
  },
  methods: {},
};
</script>

<style>

</style>
