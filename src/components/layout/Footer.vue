<template>
  <div class="container-fluid text-white bg-dark-blue">
    <div class="row p-5 justify-content-center">
      <div class="col-12 col-sm-6 col-md-3">
        <h5 class="fw-bold">ExploreLah!</h5>
        <span class="line text-pink pb-2">━━━</span>
        <ul class="list-unstyled mb-3">
          <li>
            <a href="#!" style="text-decoration: none; color: white"
              >About Us</a
            >
          </li>
          <li>
            <a href="#!" style="text-decoration: none; color: white">Team</a>
          </li>
        </ul>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <h5 class="fw-bold">Browse</h5>
        <span class="line text-pink pb-2">━━━</span>
        <ul class="list-unstyled mb-3">
          <li>
            <a href="#!" style="text-decoration: none; color: white"
              >Discover</a
            >
          </li>
          <li>
            <a href="#!" style="text-decoration: none; color: white"
              >Plan Now</a
            >
          </li>
          <li>
            <a href="#!" style="text-decoration: none; color: white"
              >My Trips</a
            >
          </li>
        </ul>
      </div>
      <div class="col-12 col-sm-6 col-md-3">
        <h5 class="fw-bold">Help</h5>
        <span class="line text-pink pb-2">━━━</span>
        <ul class="list-unstyled mb-3">
          <li>
            <a href="#!" style="text-decoration: none; color: white">FAQ</a>
          </li>
        </ul>
      </div>
      <div class="col-12 col-sm-6 col-md-2">
        <h5 class="fw-bold">Contact Us</h5>
        <span class="line text-pink pb-2">━━━</span>
        <section class="mb-4">
          <!-- Facebook -->
          <a
            class="btn btn-outline-light btn-floating m-1 rounded-circle"
            href="#!"
            role="button"
            ><i class="bi bi-facebook"></i>
          </a>

          <!-- Twitter -->
          <a
            class="btn btn-outline-light btn-floating m-1 rounded-circle"
            href="#!"
            role="button"
            ><i class="bi bi-twitter"></i>
          </a>

          <!-- Instagram -->
          <a
            class="btn btn-outline-light btn-floating m-1 rounded-circle"
            href="#!"
            role="button"
            ><i class="bi bi-instagram"></i>
          </a>
        </section>
      </div>

      <div class="text-center border-top p-3 mt-5">
        © 2022 ExploreLah ® - All Rights Reserved |
        <a href="#" style="text-decoration: none; color: white"
          >Privacy Policy</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
a:hover {
  color: pink !important;
}
</style>
