<template>
<div class="container-fluid text-white bg-dark-blue">
  <div class="row p-5 justify-content-center">
    <div class="col-12 col-sm-6 col-md-3">
        <h5>TEXT LOGO</h5>
        <ul class="list-unstyled mb-3">
          <li>
            <a href="#!">About Us</a>
          </li>
          <li>
            <a href="#!">Team</a>
          </li>
        </ul>
    </div>
    <div class="col-12 col-sm-6 col-md-3">
        <h5>Browse</h5>
        <ul class="list-unstyled mb-3">
          <li>
            <a href="#!">Discover</a>
          </li>
          <li>
            <a href="#!">Plan Now</a>
          </li>
          <li>
            <a href="#!">My Trips</a>
          </li>
        </ul>
    </div>
    <div class="col-12 col-sm-6 col-md-3">
        <h5>Help</h5>
        <ul class="list-unstyled mb-3">
          <li>
            <a href="#!">FAQ</a>
          </li>
        </ul>
    </div>
    <div class="col-12 col-sm-6 col-md-2">
        <h5>Contact Us</h5>
        <section class="mb-4">

          <!-- Facebook -->
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-facebook-f"></i>
          </a>

          <!-- Twitter -->
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-twitter"></i>
          </a>

          <!-- Instagram -->
          <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
              ><i class="fab fa-instagram"></i>
          </a>

        </section>
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

<style>
a:link {
  color: white;
}
a:hover {
  color:pink;
}
</style>