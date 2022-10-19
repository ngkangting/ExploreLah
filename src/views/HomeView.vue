<template>
  <div class="p-4 bg-dark-blue">
    <div class="container-fluid p-5 text-white">
        
        <div class="row">
          <div class="col-12 col-md-6 p-2">
            <h1 class="fw-bold pb-2">Singapore is yours to explore!</h1>
            <h5>Planning your itinerary has never been easier with ExploreLah!</h5>
            <button class="btn btn-pink btn-md m-3" type="button">Start Planning</button>
          </div>
          <div class="col-12 col-md-6 p-2">
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_a3emlnqk.json"  background="transparent" speed="0.6" style="width: 350px; height: 350px;" loop autoplay></lottie-player>
          </div>
        </div>  
    </div>
  </div>

  <div>
    <h1 class="text-center mt-5 fw-bold py-5">What do users think?</h1>

    <div class="my-auto justify-content-center">
      <div id="carouselExample" class="carousel carousel-dark m-3" data-interval="false">
        <div class="carousel-inner row" role="listbox">

          <!-- <div v-for="(review,index) in reviewArray" :key="review" :index="index"> -->
          <!-- <div v-for="i in reviewIdx" :class="{'carousel-item': true, 'active': true}"> -->
            <div v-for="review in reviewArray" :key="review" :index="index" class="carousel-item">
              <div class="card mx-auto col-4 p-3 bg-light border-0">
                <div class="card-body">
                    <p class="card-title fw-bold text-dark-blue">{{ review[0].name }}</p>
                    <p class="card-text text-dark-blue">{{ review[0].reviewText }}</p>
                </div>
                <h3 class="d-flex flex-row mt-auto p-3 text-pink">{{ review[0].stars }}</h3>
              </div>
              <div class="card mx-auto col-4 p-3 bg-light border-0">
                <div class="card-body">
                    <p class="card-title fw-bold text-dark-blue">{{ review[1].name }}</p>
                    <p class="card-text text-dark-blue">{{ review[1].reviewText }}</p>
                </div>
                <h3 class="d-flex flex-row mt-auto p-3 text-pink">{{ review[1].stars }}</h3>
              </div>
              <div class="card mx-auto col-4 p-3 bg-light border-0">
                <div class="card-body">
                    <p class="card-title fw-bold text-dark-blue">{{ review[2].name }}</p>
                    <p class="card-text text-dark-blue">{{ review[2].reviewText }}</p>
                </div>
                <h3 class="p-3 text-pink">{{ review[2].stars }}</h3>
              </div>
            </div>

        </div>

        <button @click="updatePrev()" class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button @click="updateNext()" class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>


<div class="mx-5">
  <h1 class="fw-bold text-center mt-5 py-5">Features to replace all your other tools</h1>
  <div class="row text-center justify-content-center">
    <div class="col-12 col-sm-6 col-lg-4 p-3">
      <div class="h-50">
        <img class="w-50 pb-2 mx-auto" src="../assets/img/feature2.png" alt="feature2">
      </div>
      <div>
        <h4>Optimise your route</h4>
        <p class="text-secondary">Minimise travel time. Maximise fun.</p>
      </div>
      
    </div>
    <div class="col-12 col-sm-6 col-lg-4 p-3">
      <div class="h-50">
        <img class="w-25 pb-2 mx-auto" src="../assets/img/feature3.png" alt="feature3">
      </div>
      <h4>Check weather forecast</h4>
      <p class="text-secondary">Be fully prepared for your amazing day with equipment of your choice (e.g umbrella, sunblock).</p>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 p-3">
      <div class="h-50">
        <img class="w-25 pb-2 mx-auto" src="../assets/img/feature4.png" alt="feature4">
      </div>
      <h4>Check live traffic conditions</h4>
      <p class="text-secondary">Planning to travel by car? Traffic can be tough sometimes.</p>
    </div>

    <div class="col-12 col-sm-6 col-lg-4 p-3">
      <div class="h-50">
        <img class="w-50 pb-2 mx-auto" src="../assets/img/feature1.png" alt="feature1">
      </div>
      <h4>Personalise your itinerary with just a few clicks</h4>
      <p class="text-secondary">Plan your best trip based on your travel preferences in the easiest possible way.</p>
    </div>
    <div class="col-12 col-sm-6 col-lg-4 p-3">
      <div class="h-50">
        <img class="w-25 pb-2 mx-auto" src="../assets/img/feature5.png" alt="feature5">
      </div>
      <h4>Download your itinerary to your phone</h4>
      <p class="text-secondary">No wifi, no problem. Your trip plans can be downloaded for access anywhere.</p>
    </div>

  </div>
</div>

<div class="aboutUs bg-light-blue">
  <h1 class="fw-bold text-center mt-5 py-5">About us</h1>
  <h5 class="px-5">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet risus ut neque egestas gravida. Proin ornare, lacus consequat semper finibus, diam ex tristique felis, iaculis porta dolor sem vitae ligula. In efficitur purus enim, sit amet feugiat nibh fringilla ultrices.
  </h5>
  <img class="w-75 mx-auto d-block" src="../assets/img/skyline.png" alt="Skyline Image" />
</div>

<Footer></Footer>

</template>


<script>
import Footer from '@/components/layout/Footer.vue'
import carouselCard from '@/components/common/carouselCard.vue';
import { useAuthStore } from "@/stores/auth";

export default {
    name: "HomeView",
    components: { 
        carouselCard, 
        Footer},
    data() {
        return {
          initialActiveCards: 0,
          reviewArray: [ 
                      [{name:"John", reviewText:"ExploreLah makes planning activities really easy! Highly recommend.", stars: "★★★★★"},
                      {name:"Derrick", reviewText:"Easy to use and convenient! Wish I had something like this for overseas too.", stars: '★★★★☆'},
                      {name:"Prof Mok", reviewText:"Amazing app! A+!", stars: "★★★★★"}],
                      [{name: "Nicole", reviewText:"Great app that saved me a lot of time while I was travelling", stars: '★★★★☆'},
                      {name: "Instructor Jason", reviewText:"Aesthetically pleasing and really user friendly!", stars: "★★★★★"},
                      {name: "TA Chen", reviewText: "App is so useful! Will never stop using it", stars: "★★★★★"}]
                      ],   
        };
    },
    setup() {
        const authStore = useAuthStore();
        return { authStore };
    },
    mounted() {
      this.initialActiveCards = document.querySelector(".carousel-item").classList.add("active");
    },
    methods: {
        async logoutUser() {
            try {
                const response = await this.authStore.logoutUser();
            }
            catch (error) {
                console.log(error.message);
            }
        },
    }
};
</script>

<style lang = "scss">
@media (min-width: 768px) {
  .carousel-item {
    display: none !important;
  }

  .carousel-item.active {
    margin-right: 0 !important;
    display: flex !important;
  }

  .carousel-inner{
    display: flex;
  }
}
.carousel-inner{
    padding: 1em;
    margin: 0% 3%;
    max-width: 90%;
}

.card{
    margin: 0 .5em;
    min-height: 150px;
}

div.card-body {
    min-height: 100px;
}
</style>
