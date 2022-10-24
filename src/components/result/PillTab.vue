<template>
  <div class="d-flex align-items-center my-3">
    <button
      class="nav-link p-0 me-4 position-relative tab-icon"
      :class="[isSelected ? 'line-active active' : '', !isLast ? 'line' : '']"
      :id="`v-pills-${index}-tab`"
      data-bs-toggle="pill"
      :data-bs-target="`#v-pills-${index}`"
      role="tab"
      :aria-controls="`v-pills-${index}`"
      aria-selected="true"
      tabindex="0"
      :ref="name"
    >
      <i class="bi bi-circle-fill" style="font-size: 1.2rem"></i>
    </button>
    <div
      class="card border-0 py-4 px-4 w-100"
      style="transform-origin: left center"
      :style="[
        isSelected
          ? { transform: 'scale(0.85)' }
          : { transform: 'scale(0.75)' },
      ]"
    >
      <h4>{{ place }}</h4>
      <p>{{ type }}</p>
      <div class="d-flex justify-content-between">
        <span>Arrival Time: {{ arrivalTime }}</span>
        <span>Depature Time: {{ departureTime }}</span>
      </div>
    </div>
    {{ test }}
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
      type: String,
      default: null,
    },
    arrivalTime: {
      type: String,
      default: null,
    },
    departureTime: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isMounted: false,
    };
  },
  computed: {
    test() {
      if (!this.isMounted) {
        return;
      }

      return this.$refs[`pill-tab-${this.index}`].getAttribute("role");
    },
  },
  mounted() {
    this.isMounted = true;
  },
};
</script>

<style lang="scss">
.tab-icon {
  z-index: 1;
}

.line {
  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 1rem;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    height: calc(var(--pillTabHeight) + 1.5rem);
    width: 5px;
    border-radius: 10px;
    background-color: #e9ecef;
  }

  &-active::after {
    background-color: #adb5bd;
  }
}
</style>
