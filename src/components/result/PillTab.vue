<template>
  <div class="d-flex align-items-center w-100 pill-tab">
    <div
      class="h-100 d-flex align-items-start position-relative tab me-4"
      :id="`v-pills-${index}-tab`"
      data-bs-toggle="pill"
      :data-bs-target="`#v-pills-${index}`"
      role="tab"
      ref="tab"
      :aria-controls="`v-pills-${index}`"
    >
      <button class="nav-link p-0" :class="[!isLast ? 'line' : '']">
        <i
          class="bi bi-circle-fill"
          :class="[isSelected ? 'text-dark-blue' : 'text-gray']"
          :style="{ transition: 'all .25s' }"
          style="font-size: 1.2rem"
        ></i>
      </button>
    </div>
    <div
      class="card border-0 p-4 w-100"
      :class="[isLast && isSelected ? 'mb-5' : isLast ? 'mb-3' : 'mb-5']"
      style="transform-origin: left top"
      :style="[
        isSelected
          ? { transform: 'scale(1.00)', transition: 'all .25s' }
          : { transform: 'scale(0.85)', transition: 'all .25s' },
      ]"
    >
      <h4 class="pb-1">{{ place }}</h4>
      <div class="d-flex flex-wrap pb-2">
        <span
          v-for="(tag, index) in type"
          :key="index"
          class="tag bg-grey rounded-2 py-1 px-2 me-2 my-1 text-nowrap"
          >{{ tag }}</span
        >
      </div>
      <div class="d-flex flex-column ps-1">
        <span class=""
          >Time: {{ arrivalTime }}hrs - {{ departureTime }}hrs</span
        >
        <span class="">Travel Time: {{ travelTimeToThis }} mins</span>
      </div>
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
      default: false,
    },
    isLast: {
      type: Boolean,
      default: false,
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
  methods: {},
};
</script>

<style lang="scss">
.pill-tab {
  cursor: pointer;
}

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
