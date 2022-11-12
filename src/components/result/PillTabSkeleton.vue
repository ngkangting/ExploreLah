<template>
  <div class="d-flex align-items-center w-100">
    <div class="h-100 d-flex align-items-start position-relative tab me-4">
      <button class="nav-link p-0" :class="[!isLast ? 'line' : '']">
        <i class="bi bi-circle-fill" style="font-size: 1.2rem"></i>
      </button>
    </div>
    <div
      class="card border-0 p-4 w-100 mb-5"
      style="transform-origin: left top"
    >
      <!-- Header -->
      <div class="pb-3">
        <div
          class="skeleton skeleton-text rounded"
          style="height: 30px; width: 150px"
        ></div>
      </div>

      <!-- Tags -->
      <div class="d-flex">
        <div
          class="skeleton skeleton-text rounded me-2"
          style="height: 18px; width: 75px"
        ></div>
        <div
          class="skeleton skeleton-text rounded mx-2"
          style="height: 18px; width: 75px"
        ></div>
        <div
          class="skeleton skeleton-text rounded mx-2"
          style="height: 18px; width: 75px"
        ></div>
        <div
          class="skeleton skeleton-text rounded mx-2"
          style="height: 18px; width: 75px"
        ></div>
      </div>

      <!-- Description -->
      <div class="d-flex flex-column">
        <div
          class="skeleton skeleton-text rounded"
          style="height: 22px; width: 200px"
        ></div>
        <div
          class="skeleton skeleton-text rounded"
          style="height: 22px; width: 200px"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PillTabSkeleton",
  props: {
    index: {
      type: Number,
      default: null,
    },
    isLast: {
      type: Boolean,
      default: null,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.tab {
  z-index: 1;
}

.line {
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 4%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    height: 100%;
    width: 4px;
    border-radius: 10px;
    background-color: #dfdfdf;
  }

  &-active::after {
    background-color: #ff8397;
  }
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
