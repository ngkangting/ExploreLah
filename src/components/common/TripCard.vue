<template>
  <div class="trip-card p-4 col-12 col-md-6 col-lg-4 col-xl-3 ">
    <!-- <div class="effect-image-1 zoom-effect-1"> -->
      <img src="../../assets/img/tripcard.jpg" class="w-100"/>
      <div class="overlay text-white d-flex justify-content-center align-items-center m-4 text-center">
        <div>
          <h3>Trip Name</h3>
          <p>2 Oct 2022 - 22 Oct 2022</p>
          <a href="" class="link-light">See More</a>
        </div>
      </div>
      <div class="description text-dark-blue px-3 m-4">
        <p class="m-0 w-100">
          <b>Accommodation:</b> XXX Hotel
          <br>
          <b>Preference:</b> Shopping, Outdoor, Adventure
          <br>
          <b>Transportation Method:</b> By Car
        </p>
      </div>
    <!-- </div> -->
  </div>


  <!-- <div class="tripcard border-0 w-100">
    <div style="position:relative">
      <img src="../../assets/img/mbs.jpg" class="card-img-top rounded">
      <button @click=like() id="like-btn" class="btn border-0"
        style="position:absolute; top:0; right:0; color:#FF8397"><i class="bi bi-heart"></i></button>
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-6">
          <p class="lead mb-1">Trip Name</p>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <button type="button" class="btn"><i class="bi bi-three-dots-vertical"></i></button>
        </div>
      </div>

      <p class="card-text">Description</p>
    </div>
  </div> -->
</template>

<script>
export default {
  name: "TripCard",
  props: {
    name
  },
  data() {
    return {};
  },
  // methods: like() {
  // const heart = document.getElementById("like-btn");
  // heart.addEventListener("click", () => {
  //   console.log(heart.innerHTML);
  //   if (heart.innerHTML.contains("fill")) {
  //     heart.innerHTML = "<i class='bi bi-heart'></i>";
  //   } else {
  //     heart.innerHTML = "<i class='bi bi-heart-fill'></i>";
  //   }
  // });
};
</script>

<style>
.trip-card {
  position: relative;
}

.trip-card img{
  border-radius: 30px;
}

.overlay {
  position: absolute;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  top:0;
  bottom: 25%;
  right: 0;
  left: 0;
  background: rgba(66, 66, 66, 0.525);
}

.description{
  position: absolute;
  font-size: smaller;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  top: 60%;
  right: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.925);
}

/*zoom does not work when there is overlay*/
.zoom-effect-1{
	overflow: hidden;
}

.zoom-effect-1 img{
  border-radius: 30px;
	transform: scale(1);
	-webkit-transform: scale(1);
}

.zoom-effect-1:hover img{
	transform: scale(1.1);
	-webkit-transform: scale(1.1);
}

.effect-image-1{
  border-radius: 30px;
	position: relative;
	display: block;
}

.zoom-effect-1 img{
  transition: all .4s linear;
  -webkit-transition: all .4s linear;
  -moz-transition: all .4s linear;
  -o-transition: all .4s linear;
}

/* .tripcard {
  position: relative;
  min-width: 300px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  padding: 40px 20px;
  transition: .25s;
}

.tripcard:hover {
  transform: scale(1.1);
}

.tripcard:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: rgba(255, 255, 255, .1);
  z-index: 1;
  transform: skewY(-5deg) scale(1.5);
} */
</style>
