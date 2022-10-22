<template>
  <div v-motion :initial="{opacity: 0,y: 100,}" :enter="{opacity: 1, y: 0,}">
    <div class="row d-flex align-items-center justify-content-center">
      <div class="col-lg-6">
        <h1 class="display-6 text-center ps-5">
          We help you make exploring Singapore easier than ever.
        </h1>
      </div>
      <div class="col-lg-6 d-flex justify-content-center pe-5">
        <lottie-player src="https://assets3.lottiefiles.com/private_files/lf30_5i5tlydx.json" background="transparent"
          speed="1" style="width: 400px; height: 400px" hover loop autoplay></lottie-player>
      </div>
    </div>
  </div>

</template>

<script>

// export default {
//   name: "MyTrips",
//   data() { },
//   components: {
//     TripCard
//   },
//   methods: {
//   },
// };

</script>

<style>

</style>
