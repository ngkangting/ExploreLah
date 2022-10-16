<template>
  <div class="card border-0 w-100">
    <img src="../../assets/img/mbs.jpg" class="card-img-top rounded" alt="...">
    <div class="card-body">
      <p class="lead mb-1">Trip Name</p>
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
};
</script>

<style>

</style>
