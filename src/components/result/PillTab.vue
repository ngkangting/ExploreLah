<template>
  <div class="d-flex align-items-center">
    <div class="h-100 d-flex align-items-start position-relative tab me-4">
      <button class="nav-link p-0" :class="[!isLast ? 'line' : '']" :id="`v-pills-${index}-tab`" data-bs-toggle="pill"
        :data-bs-target="`#v-pills-${index}`" role="tab" :aria-controls="`v-pills-${index}`" @click="onClick($event)"
        ref="tab">
        <i class="bi bi-circle-fill text-dark-blue" style="font-size: 1.2rem"></i>
      </button>
    </div>
    <div class="card border-0 p-4" style="transform-origin: left top; width: 350px" :style="[
      isSelected
        ? { transform: 'scale(0.85)' }
        : { transform: 'scale(0.75)' },
    ]">
      <h4 class="ps-3">{{ place }}</h4>
      <p class="pt-2">
        <span class="tag bg-grey rounded-2 p-1 px-2 ms-3 mb-0">{{ type }}</span>
      </p>
      <div class="d-flex justify-content-between">
        <span class="p-3">
          <b>Arrival Time:</b>
          {{ arrivalTime }}
        </span>
        <span class="p-3">
          <b>Departure Time:</b>
          {{ departureTime }}
        </span>
        <span class="m-0 p-3">
          <b>Forecast:</b>
          {{ forecast }}
        </span>
      </div>
      {{ travelTimeToThis }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PillTab",
  props: {
    index: {
      type: Number,
      default: null,
    },
    isSelected: {
      type: Boolean,
      default: null,
    },
    isLast: {
      type: Boolean,
      default: null,
    },
    place: {
      type: String,
      default: null,
    },
    type: {
      type: Object,
      default: null,
    },
    arrivalTime: {
      type: Number,
      default: null,
    },
    departureTime: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    forecast: {
      type: String,
      default: "Currently Unavailable",
    },
    duration: {
      type: Number,
      default: null,
    },
    travelTimeToThis: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.$watch(
      () => {
        // console.log(this.$refs.tab.getAttribute("aria-selected"));
        // console.log(this.$refs.tab.getAttribute("aria-selected"));
      },
      (val) => {
        alert("HELLO");
      }
    );
  },
  methods: {
    onClick(event) {
      // console.log(this.$refs.tab.getAttribute("aria-selected"));
      // event.delegateTarget.classList.add("line-active");
      // console.log(event.delegateTarget.classList);
      // console.log(target.$el);
      // target.$el.classList.add("line-active");
      // console.log(target.$el.classList);
    },
  },
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
</style>
