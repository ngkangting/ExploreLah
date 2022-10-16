<template>
  <div class="p-4 bg-dark-blue">
    <div class="container-fluid p-5 text-white">
        
        <div class="row">
          <div class="col-12 col-md-8 p-2">
            <h1 class="fw-bold">Singapore is yours to explore!</h1>
            <div>Planning your itinerary has never been easier with ExploreLah!</div>
            <button class="btn btn-pink btn-lg m-1" type="button">Plan now</button>
          </div>
          <div class="bg-white col-md-4 p-5">picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture picture</div>
        </div>  
    </div>
  </div>

  <h2 class="text-center m-3">Reviews</h2>

  <div id="carouselExample" class="carousel slide carousel-dark m-3" data-bs-ride="carousel">
    <div class="carousel-inner ">
      <div v-for="(review,index) in reviewArray" :key="review" :index="index">
        <div class='carousel-item active'> 
          <div class="card mx-auto col-2" style="width: 300px; height: 200px">
            <div class="card-body">
                <p class="card-title fw-bold text-dark-blue">{{ review.name }}</p>
                <p class="card-text text-dark-blue">{{ review.reviewText }}</p>
                <p class="position-absolute bottom-0 start-0">{{ review.stars }}</p>
            </div>
          </div>
        <!-- {'carousel-item': isItem,'active': isActive} -->
          <!-- <carouselCard></carouselCard> -->
        </div>
      </div>
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


<div class="bg-info">
<h2 class="fw-bold">About us</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet risus ut neque egestas gravida. Proin ornare, lacus consequat semper finibus, diam ex tristique felis, iaculis porta dolor sem vitae ligula. In efficitur purus enim, sit amet feugiat nibh fringilla ultrices.</p>
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
    }
};
</script>

<style></style>
