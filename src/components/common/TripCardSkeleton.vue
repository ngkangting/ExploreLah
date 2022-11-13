<template>
  <div class="trip-card p-4 col-md-6 col-lg-4 col-xl-3">
    <div class="effect-image-skeleton zoom-effect-skeleton">
      <div
        class="card-img-top w-100 rounded skeleton"
        style="height: 350px"
      ></div>
      <div
        class="overlay text-white d-flex justify-content-center align-items-center text-center"
      >
        <div>
          <h3>Loading...</h3>
          <div>Today - Yesterday</div>
        </div>
      </div>
      <div class="d-flex description bg-white text-dark-blue px-3">
        <p class="m-0 w-100">
          Accommodation:
          <span class="skeleton skeleton-text">
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
          </span>
          <br />
          <b>Preference:</b>
          <br />
          <b>Transportation Method:</b> Bus 11
        </p>
      </div>
    </div>
    <!-- <div>
        <input  type="button" value="View Trip" />
      </div> -->
  </div>
</template>

<script>
export default {
  name: "TripCardSkeleton",

  data() {
    return {
      numToMonth: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    };
  },
  computed: {},
  created() {},
};
</script>

<style>
.trip-card {
  position: relative;
}
.trip-card img {
  border-radius: 10px !important;
}
.overlay {
  position: absolute;
  border-top-left-radius: 10px !important;
  border-top-right-radius: 10px !important;
  top: 0;
  bottom: 25% !important;
  right: 0;
  left: 0;
  background: rgba(66, 66, 66, 0.525);
}
.description {
  position: absolute;
  font-size: smaller;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  top: 60% !important;
  bottom: 0;
  right: 0;
  left: 0;
  opacity: 90%;
}

.zoom-effect-skeleton {
  overflow: hidden;
}

.zoom-effect-skeleton img {
  border-radius: 10px !important;
  transform: scale(1);
  -webkit-transform: scale(1);
}

.zoom-effect-skeleton:hover img {
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
}

.effect-image-skeleton {
  border-radius: 10px !important;
  position: relative;
  display: block;
}

.zoom-effect-skeleton img {
  transition: all 0.4s linear;
  -webkit-transition: all 0.4s linear;
  -moz-transition: all 0.4s linear;
  -o-transition: all 0.4s linear;
}

.tripcard {
  position: relative;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  padding: 40px 20px;
  transition: 0.25s;
}

.tripcard:hover {
  transform: scale(1.1);
}

.tripcard:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1;
  transform: skewY(-5deg) scale(1.5);
}
.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
  height: 165px;
  width: 50px;
  opacity: 0.7;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

.skeleton-text {
  width: 100%;
  height: 0.5em;
  margin-bottom: 1rem;
  border-radius: 0.125rem;
}

.skeleton-text:last-child {
  margin-bottom: 0px;
  width: 80%;
}
</style>
