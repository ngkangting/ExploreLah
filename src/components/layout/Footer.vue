<template>
  <footer class="container-fluid text-white bg-dark-blue">
    <div class="row p-5 justify-content-center">
      <!-- ExploreLah Section -->
      <div class="col-12 col-sm-6 col-md-3 gx-0">
        <h4 class="fw-bold">ExploreLah!</h4>
        <p class="text-gray-100 opacity-75">
          Designed and built by the ExploreLah! team for people to plan, manage,
          and explore places around Singapore!
        </p>
        <div>
          <router-link to="#instagram" class="me-3">
            <i
              class="bi bi-instagram text-light footer-icon"
              style="font-size: 1.4rem"
            ></i>
          </router-link>
          <router-link to="#facebook" class="me-3">
            <i
              class="bi bi-facebook text-light footer-icon"
              style="font-size: 1.4rem"
            ></i>
          </router-link>
          <router-link to="#twitter">
            <i
              class="bi bi-twitter text-light footer-icon"
              style="font-size: 1.4rem"
            ></i>
          </router-link>
        </div>
      </div>

      <!-- Company Section -->
      <div
        class="col-12 col-sm-6 col-md-3 col-lg-2 offset-md-1 gy-5 gy-sm-0 gx-0 gx-sm-5 gx-md-0"
      >
        <h5 class="fw-bold">Company</h5>
        <hr
          class="opacity-100"
          style="width: 65px; border: 2px solid #ff8397; border-radius: 10px"
        />

        <ul class="list-unstyled mb-3">
          <li class="my-2">
            <router-link
              to="/aboutus"
              class="opacity-75 text-white text-decoration-none footer-link"
              >About Us</router-link
            >
          </li>
          <li class="my-2">
            <router-link
              to="#team"
              class="opacity-75 text-white text-decoration-none footer-link"
              >Our Team</router-link
            >
          </li>
          <li class="my-2">
            <router-link
              to="#partner"
              class="opacity-75 text-white text-decoration-none footer-link"
              >Partner Program</router-link
            >
          </li>
          <li class="my-2">
            <router-link
              to="#investors"
              class="opacity-75 text-white text-decoration-none footer-link"
              >Investors</router-link
            >
          </li>
          <li class="my-2">
            <router-link
              to="#careers"
              class="opacity-75 text-white text-decoration-none footer-link"
              >Careers</router-link
            >
          </li>
        </ul>
      </div>

      <!-- Links Section -->
      <div class="col-12 col-sm-6 col-md-3 col-lg-2 gy-4 gy-md-0 gx-0">
        <h5 class="fw-bold">Links</h5>
        <hr
          class="opacity-100"
          style="width: 65px; border: 2px solid #ff8397; border-radius: 10px"
        />
        <ul class="list-unstyled mb-3">
          <li class="my-2">
            <router-link
              to="#discover"
              class="opacity-75 text-white text-decoration-none footer-link"
              >Discover</router-link
            >
          </li>
          <li class="my-2">
            <router-link
              to="#plan"
              class="opacity-75 text-white text-decoration-none footer-link"
              >Plan Now</router-link
            >
          </li>
          <li class="my-2">
            <router-link
              to="#mytrips"
              class="opacity-75 text-white text-decoration-none footer-link"
              >My Trips</router-link
            >
          </li>
        </ul>
      </div>

      <!-- Support Section -->
      <div class="col-12 col-sm-6 col-md-2 gy-4 gy-md-0 gx-0 gx-sm-5 gx-md-0">
        <h5 class="fw-bold">Support</h5>
        <hr
          class="opacity-100"
          style="width: 65px; border: 2px solid #ff8397; border-radius: 10px"
        />

        <ul class="list-unstyled mb-3">
          <li class="my-2">
            <router-link
              to="#support"
              class="opacity-75 text-white text-decoration-none footer-link"
              >24/7 Support</router-link
            >
          </li>
          <li class="my-2">
            <router-link
              to="#community"
              class="opacity-75 text-white text-decoration-none footer-link"
              >Community</router-link
            >
          </li>
          <li class="my-2">
            <router-link
              to="#events"
              class="opacity-75 text-white text-decoration-none footer-link"
              >Events</router-link
            >
          </li>
          <li class="my-2">
            <router-link
              to="#blog"
              class="opacity-75 text-white text-decoration-none footer-link"
              >Blog</router-link
            >
          </li>
          <li class="my-2">
            <router-link
              to="#api"
              class="opacity-75 text-white text-decoration-none footer-link"
              >APIs</router-link
            >
          </li>
        </ul>
      </div>
      <div class="col-0 col-lg-2"></div>
    </div>

    <!-- Company Description -->
    <div class="row py-5 d-flex border-top border-light mx-4">
      <div
        class="col-12 col-md-6 order-2 order-md-1 p-0 d-flex justify-content-start align-items-center"
      >
        <span class="opacity-75">© 2022 ExploreLah!. All rights reserved.</span>
      </div>
      <div
        class="col-12 col-md-6 order-1 order-md-2 p-0 d-flex justify-content-start justify-content-md-end mb-2 mb-md-0"
      >
        <div class="d-flex justify-content-between">
          <router-link
            to="#terms"
            class="opacity-75 text-white footer-link text-decoration-none me-3"
            >Terms of Service</router-link
          >
          <router-link
            to="#privacy"
            class="opacity-75 text-white footer-link text-decoration-none"
            >Privacy Policy</router-link
          >
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.footer-link:hover {
  color: pink !important;
  opacity: 1 !important;
}

.footer-icon:hover {
  color: pink !important;
  transition: all 0.2s;
}
</style>
