<template>
  <div class="p-4 bg-dark-blue">
    <div class="container-fluid p-5 text-white">
        
        <div class="row">
          <div class="col-12 col-md-8 p-2">
            <h1 class="fw-bold pb-2">Singapore is yours to explore!</h1>
            <h5>Planning your itinerary has never been easier with ExploreLah!</h5>
            <button class="btn btn-pink btn-md m-3" type="button">Start Planning</button>
          </div>
        
          <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_a3emlnqk.json"  background="transparent"  speed="0.6"  style="width: 350px; height: 350px;"  loop  autoplay></lottie-player>
        </div>  
    </div>
  </div>

<h1 class="text-center mt-5 fw-bold py-5">What do our travelers think</h1>


<div class="row mx-auto my-auto justify-content-center">
  <div id="carouselExample" class="carousel slide carousel-dark m-3" data-interval="false">
    <div class="carousel-inner" role="listbox">

      <div v-for="(review,index) in reviewArray" :key="review" :index="index">

        <div :class="{'carousel-item': isItem, 'active': checkActiveStatus(index)}"></div> 
          <div class="card mx-auto col-4 p-3 bg-light border-0" style="width: 300px; height: 200px">
            <div class="card-body">
                <p class="card-title fw-bold text-dark-blue">{{ review.name }}</p>
                <p class="card-text text-dark-blue">{{ review.reviewText }}</p>
                <p class="align-bottom text-pink">{{ review.stars }}</p>
            </div>
          </div>
        </div>
        <!-- {'carousel-item': isItem,'active': isActive} -->
          <!-- <carouselCard></carouselCard> -->
  
        <!-- <carouselCard v-for="(review,index) in reviewArray" review="review[]"/> -->
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

<div class="mx-5">
  <h1 class="fw-bold text-center mt-5 py-5">Features to replace all your other tools</h1>
  <div class="row text-center">
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

    <div class="col-0 col-lg-2"></div>

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

    <div class="col-lg-2"></div>
  </div>
</div>

<div class="aboutUs">
  <h1 class="fw-bold text-center mt-5 py-5">About us</h1>
  <h5 class="px-5">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet risus ut neque egestas gravida. Proin ornare, lacus consequat semper finibus, diam ex tristique felis, iaculis porta dolor sem vitae ligula. In efficitur purus enim, sit amet feugiat nibh fringilla ultrices.
  </h5>
  <img class="w-75 mx-auto d-block" src="../assets/img/skyline.png" alt="Skyline Image" />
</div>

<Footer></Footer>


  

</template>
<!-- <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script> -->
<script>
import lottieWeb from "https://cdn.skypack.dev/lottie-web"
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
          isItem: true,
          activeMin: 0,
          activeMax: 2,
          reviewArray: [ 
                      {name:"John", reviewText:"ExploreLah makes planning activities really easy! Highly recommend.", stars: 5},
                      {name:"Derrick", reviewText:"Easy to use and convenient! Wish I had something like this for overseas too.", stars: 4.5},
                      {name:"Prof Mok", reviewText:"Amazing app! A+", stars: 5},
                      {name: "Nicole", reviewText:"Great app that saved me a lot of time while I was travelling", stars:4.5},
                      {name: "Instructor Jason", reviewText:"Aesthetically pleasing and really user friendly!", stars:5},
                      ]
                
        };
    },
    setup() {
        const authStore = useAuthStore();
        return { authStore };
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
        //updated arr when user clicked next
        updateNext() {
          console.log(this.activeMin)
          console.log(this.activeMax)
          if (this.activeMax == (this.reviewArray.length - 1) ){
            this.activeMin += 1
            this.activeMax = 0
          }
          else if (this.activeMin == (this.reviewArray.length - 1) ){
            this.activeMin = 0
            this.activeMax += 1
          }
          else {
            this.activeMin += 1
            this.activeMax += 1
          }
        },
        updatePrev(){
          console.log(this.activeMin)
          console.log(this.activeMax)
          if (this.activeMax == 0){
            this.activeMin -= 1
            this.activeMax = (this.reviewArray.length - 1)
          }
          else if (this.activeMin == 0){
            this.activeMin = (this.reviewArray.length - 1)
            this.activeMax -= 1
          }
          else {
            this.activeMin -= 1
            this.activeMax -= 1
          }
        },
        checkActiveStatus(index) {
          if (index > this.activeMin && index < this.activeMax) {
            return true
          }
          return false
        }
    }
};
</script>

<style>
@media (min-width: 768px) {
  .carousel-inner {
    display: flex;
  }
  .carousel-inner{
    padding: 1em;
  }
}
.carousel-inner{
    padding: 1em;
}
.card{
    margin: 0 .5em;
    border: none;
}
.aboutUs{
  background-color: #d6f4ff;
}
</style>
