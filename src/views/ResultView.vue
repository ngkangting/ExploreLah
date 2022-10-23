<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Result -->
      <div class="col col-lg-8">
        <div class="card w-100 border-0">
          <div class="card-body">
            <div class="row mb-3">
              <div class="col-8">
                <img
                  class="w-100 rounded"
                  src="../assets/img/mbs-1.jpeg"
                  alt="..."
                  height="350"
                />
              </div>
              <div class="col-4 d-flex flex-column justify-content-between">
                <div class="row">
                  <div class="col-12">
                    <img
                      class="w-100 rounded"
                      src="../assets/img/mbs-2.jpg"
                      alt="..."
                      height="165"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <img
                      class="w-100 rounded"
                      src="../assets/img/mbs-3.jpeg"
                      alt="..."
                      height="165"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-5">
                <div class="bg-light p-2 h-100 rounded">Test</div>
              </div>
              <div class="col-7">
                <h5 class="card-title">Marina Bay Sands</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quisque id diam vel quam elementum pulvinar etiam non quam.
                  Elementum eu facilisis sed odio. Nibh sit amet commodo nulla.
                  Dui nunc mattis enim ut tellus elementum sagittis vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Locations -->
      <div class="col col-lg-4">
        <div
          class="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <div class="d-flex align-items-center my-3">
            <button
              class="nav-link nav-link-color active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <i class="bi bi-circle-fill"></i>
            </button>
            <div
              class="card border-0 py-4 px-4 w-100"
              style="transform: scale(0.85); transform-origin: left center"
            >
              <h4>Mueseum of Old</h4>
              <p>Arts & Culture</p>
              <div class="d-flex justify-content-between">
                <span>Arrival Time: 12:00</span>
                <span>Depature Time: 15:00</span>
              </div>
            </div>
          </div>

          <div class="d-flex align-items-center my-3">
            <button
              class="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              <i class="bi bi-circle-fill"></i>
            </button>
            <div
              class="card border-0 py-4 px-4 w-100"
              style="transform: scale(0.75); transform-origin: left center"
            >
              <h5>Mueseum of Old</h5>
              <p>Arts & Culture</p>
              <div class="d-flex justify-content-between">
                <span>Arrival Time: 12:00</span>
                <span>Depature Time: 15:00</span>
              </div>
            </div>
          </div>

          <div class="d-flex align-items-center my-3">
            <button
              class="nav-link"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              <i class="bi bi-circle-fill"></i>
            </button>
            <div
              class="card border-0 py-4 px-4 w-100"
              style="transform: scale(0.75); transform-origin: left center"
            >
              <h5>Mueseum of Old</h5>
              <p>Arts & Culture</p>
              <div class="d-flex justify-content-between">
                <span>Arrival Time: 12:00</span>
                <span>Depature Time: 15:00</span>
              </div>
            </div>
          </div>

          <div class="d-flex align-items-center my-3">
            <button
              class="nav-link"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              <i class="bi bi-circle-fill"></i>
            </button>
            <div
              class="card border-0 py-4 px-4 w-100"
              style="transform: scale(0.75); transform-origin: left center"
            >
              <h5>Mueseum of Old</h5>
              <p>Arts & Culture</p>
              <div class="d-flex justify-content-between">
                <span>Arrival Time: 12:00</span>
                <span>Depature Time: 15:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResultView",
  data() {
    return {};
  },
  methods: {
    getUser() {},
  },
};
</script>

<style></style>
