<template>
  <div class="container-fluid bg-image p-0">
  <div class="background parallax">
    <div class="d-flex justify-content-center my-5">
      <h1 class="type my-5 fw-bold text-white display-4">
        <span>
          Relive your trips
        </span>
      </h1>
    </div>
    <div >
      <form class="search d-flex mx-auto align-items-center rounded-5" role="search">
        <i class="bi bi-search mr-5 text-dark-blue ms-3"></i>
        <input class="form-control border-0 me-2 bg-transparent my-1 text-dark-blue" type="text" placeholder="Search Trips" aria-label="Search" />
      </form>
    
    </div>
  </div>


    <div class="mt-5 mb-5 mx-5">
      <h3 class="fw-bold px-3 mt-4 ">Upcoming Trips (1)</h3>
      <div class="row d-none d-sm-none d-md-block">
        <TripCard/>
      </div>
      <div class="row d-md-none d-lg-none d-xl-none">
        <PhoneTripCard/>
      </div>
    </div>

    <div class="mx-5 mb-5">
      <h3 class="fw-bold px-3">Past Trips</h3>
      <div class="row d-none d-sm-none d-md-block">
        <TripCard/>
        <TripCard/>
        <TripCard/>
        <TripCard/>
        <TripCard/>
        <TripCard/>
        <TripCard/>
      </div>
      <div class="row d-md-none d-lg-none d-xl-none">
        <PhoneTripCard/>
        <PhoneTripCard/>
        <PhoneTripCard/>
        <PhoneTripCard/>
        <PhoneTripCard/>
        <PhoneTripCard/>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>

<script>
import TripCard from "@/components/common/TripCard.vue";
import Footer from "@/components/layout/Footer.vue";
import PhoneTripCard from "@/components/common/PhoneTripCard.vue";

export default {
  name: "MyTrips",
  data() { },
  components: {
    TripCard,
    Footer,
    PhoneTripCard
},
  methods: {},
};
</script>

<style>
.search {
  background-color: #f2f2f2;
  width:35%;
}

input:focus, input.form-control:focus {
outline:none !important;
outline-width: 0 !important;
box-shadow: none;
-moz-box-shadow: none;
-webkit-box-shadow: none;
}

.parallax {
  /* The image used */
  background-image: url("../assets/img/mytripsbg.png");

  /* Set a specific height */
  min-height: 500px;
  width:100%;
  overflow: hidden;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.type {
  display:inline-flex;
}

.type span {
  word-break: break-all;
  height: 1.2em;
  width:0%;
  overflow: hidden;
  animation:t 2s linear infinite alternate;

}

.type span:before {
  content:" ";
  display:inline-block;
}

@keyframes t{
  90%,100% {width:100%}
}
</style>