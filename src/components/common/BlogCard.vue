<template>
  <div
    class="blog card col-10 col-sm-5 col-lg-3 mx-0 mx-sm-3 mx-md-4 my-3 bg-light border-0 rounded-4 p-0"
  >
    <div class="card-img-wrap">
      <img :src="img" class="card-img-top" />
    </div>
    <div class="card-body d-flex flex-column p-4">
      <h5 class="card-title">
        {{ title }}
      </h5>
      <p class="card-subtitle text-muted mb-5">- {{ subtitle }}</p>
      <a :href="link" target="__blank" class="btn btn-pink py-2 mt-auto"
        >Read More</a
      >
    </div>
  </div>
</template>

<script>
import { stringifyStyle } from "@vue/shared";

export default {
  name: "BlogCard",
  props: {
    img: String,
    title: String,
    subtitle: String,
    link: String,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.blog {
  overflow: hidden;
}

.card-img-wrap {
  overflow: hidden;
  position: relative;
}

.card-img-wrap:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
}

.card-img-wrap img {
  transition: transform 0.4s;
  width: 100%;
}

.card-img-wrap:hover img {
  transform: scale(1.1);
}

.card-img-wrap:hover:after {
  opacity: 1;
}
</style>
