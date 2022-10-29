<template>
  <div class="container-fluid d-flex pb-5">
    <div class="px-5">
      <h1 class="fw-bold text-center mt-4 py-5">
        Iconic Landmarks in Singapore
      </h1>
      <div class="row justify-content-center">
        <div class="landmark p-2 col-12 col-md-12 col-lg-8">
          <a href="https://www.gardensbythebay.com.sg/" target="__blank">
            <img class="w-100" src="../assets/img/Landmark1.jpg" alt="Landmark1" />
            <div class="description p-3 text-white fw-bolder">
              <h2>Gardens By The Bay</h2>
            </div>
          </a>
        </div>
        <div class="landmark p-2 col-12 col-md-6 col-lg-4">
          <a href="https://www.rwsentosa.com/en/attractions/sea-aquarium" target="__blank">
            <img class="w-100" src="../assets/img/Landmark2.jpg" alt="Landmark2" />
            <div class="description p-3 text-white fw-bolder">
              <h2>S.E.A Aquarium</h2>
            </div>
          </a>
        </div>
        <div class="landmark p-2 col-12 col-md-6 col-lg-4">
          <a href="https://visitkamponggelam.com.sg/street/haji-lane/" target="__blank">
            <img class="w-100" src="../assets/img/Landmark3.jpg" alt="Landmark3" />
            <div class="description p-3 text-white fw-bolder">
              <h2>Haji Lane</h2>
            </div>
          </a>
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
          <a href="https://www.jewelchangiairport.com/en.html" target="__blank">
            <img class="w-100" src="../assets/img/Landmark4.jpg" alt="Landmark4" />
            <div class="description p-3 text-white fw-bolder">
              <h2>Jewel Changi Airport</h2>
            </div>
          </a>
        </div>
        <div class="landmark p-2 col-12 col-md-6 col-lg-4">
          <a href="https://sultanmosque.sg/" target="__blank">
            <img class="w-100" src="../assets/img/Landmark5.jpg" alt="Landmark5" />
            <div class="description p-3 text-white fw-bolder">
              <h2>Masjid Sultan</h2>
            </div>
          </a>
        </div>
        <div class="landmark p-2 col-12 col-md-12 col-lg-8">
          <a href="https://www.marinabaysands.com/" target="__blank">
            <img class="w-100" src="../assets/img/Landmark6.jpg" alt="Landmark6" />
            <div class="description p-3 text-white fw-bolder">
              <h2>Marina Bay Sands</h2>
            </div>
          </a>
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
  border-radius: 10px;
}

.landmark img {
  transition: 0.5s all ease-in-out;
  border-radius: 10px;
}

.landmark:hover img {
  transform: scale(1.2);
}

.description {
  position: absolute;
  background: rgba(98, 96, 96, 0) !important;
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
