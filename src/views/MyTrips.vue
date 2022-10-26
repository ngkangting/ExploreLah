<template>
  <div class="container-fluid">
    <div class="row mb-5 mt-5">
      <h1 class="text-center mb-5 fw-bold">Relive your trips!</h1>

      <form class="search d-flex mx-auto align-items-center rounded-5" style="width: 35%" role="search">
        <i class="bi bi-search mr-5 text-dark-blue"></i>
        <input class="form-control border-0 me-2 bg-transparent my-1 text-dark-blue" type="text" placeholder="Search Trips" aria-label="Search" />
      </form>
    </div>

    <div class="mb-5 mx-5">
      <h3 class="fw-bold px-3">Upcoming Trips (1)</h3>
      <div class="row">
      <TripCard/>
      </div>
    </div>

    <div class="mx-5 mb-5">
      <h3 class="fw-bold px-3">Past Trips</h3>
      <div class="row">
      <TripCard/>
      <TripCard/>
      <TripCard/>
      <TripCard/>
      <TripCard/>
      <TripCard/>
      <TripCard/>
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
.search {
  background-color: #f2f2f2;
}

input:focus, input.form-control:focus {
outline:none !important;
outline-width: 0 !important;
box-shadow: none;
-moz-box-shadow: none;
-webkit-box-shadow: none;
}

</style>
