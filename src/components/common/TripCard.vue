<template>
  <div class="tripcard border-0 w-100">
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
  </div>
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
.tripcard {
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
}
</style>
