<template>
  <div class="container-fluid">
    <h3 class="text-center fw-semibold mb-4">Result</h3>
    <div class="row">
      <div class="col col-lg-8">
        <div class="card w-100 border-0">
          <div class="card-body">
            <div class="mb-4">
              <div class="row mb-4">
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
            </div>
            <h5 class="card-title">Marina Bay Sands</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div class="col col-lg-4">Test</div>
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
