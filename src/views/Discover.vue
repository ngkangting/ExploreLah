<template>
  <div class="m-5 px-5">
    <h1 class="fw-bold text-center mt-5 py-5">
      Iconic Landmarks in Singapore
    </h1>
    <div class="row justify-content-center">
      <div class="landmark p-2 col-12 col-md-12 col-lg-8">
        <img class="w-100" src="../assets/img/Landmark1.jpg" alt="Landmark1" />
        <div class="description p-3 text-white fw-bolder">
          <h2>GARDENS BY THE BAY</h2>
        </div>
      </div>
      <div class="landmark p-2 col-12 col-md-6 col-lg-4">
        <img class="w-100" src="../assets/img/Landmark2.jpg" alt="Landmark2" />
        <div class="description p-3 text-white fw-bolder">
          <h2>S.E.A AQUARIUM</h2>
        </div>
      </div>
      <div class="landmark p-2 col-12 col-md-6 col-lg-4">
        <img class="w-100" src="../assets/img/Landmark3.jpg" alt="Landmark3" />
        <div class="description p-3 text-white fw-bolder">
          <h2>HAJI LANE</h2>
        </div>
      </div>
      <div class="p-2 col-12 col-md-12 col-lg-4">
        <div
          class="d-flex justify-content-center align-items-center bg-light-blue h-100 w-100 text-center p-5 rounded-5">
          <h1 class=" fw-bold w-90">258</h1>&nbsp;&nbsp;&nbsp;
          <div>
            trips planned in
            <br>
            the last hour
          </div>
        </div>
      </div>
      <div class="landmark p-2 col-12 col-md-6 col-lg-4">
        <img class="w-100" src="../assets/img/Landmark4.jpg" alt="Landmark4" />
        <div class="description p-3 text-white fw-bolder">
          <h2>JEWEL CHANGI AIRPORT</h2>
        </div>
      </div>
      <div class="landmark p-2 col-12 col-md-6 col-lg-4">
        <img class="w-100" src="../assets/img/Landmark5.jpg" alt="Landmark5" />
        <div class="description p-3 text-white fw-bolder">
          <h2>MASJID SULTAN</h2>
        </div>
      </div>
      <div class="landmark p-2 col-12 col-md-12 col-lg-8">
        <img class="w-100" src="../assets/img/Landmark6.jpg" alt="Landmark6" />
        <div class="description p-3 text-white fw-bolder">
          <h2>MARINA BAY SANDS</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Discover",
  components: {
  },
  data() { },

  methods: {},
};
</script>

<style>
.landmark {
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 1;
  border-radius: 30px;
}

.landmark img {
  transition: 0.5s all ease-in-out;
  border-radius: 30px;
}

.landmark:hover img {
  transform: scale(1.2);
}

.description {
  position: absolute;
  background: rgba(255, 255, 255, 0) !important;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  text-align: center !important;
}
</style>
