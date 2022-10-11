<template>
  <div
    class="fixed-top w-100 alert alert-dismissible fade show text-center rounded-0 test"
    :class="[variant]"
    role="alert"
  >
    {{ alertContent }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>

<script>
export default {
  name: "FixedAlert",
  props: {
    variant: String,
    alertContent: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
