<template>
  <div class="col">
    <div class="card w-100" style="border:none">
      <div class="card-body">
        <div class="d-flex justify-content-center align-items-center rounded-circle"
          style="height: 60px; width: 60px; background-color: #d6f4ff">
          <i :class="icon" style="font-size: 1.6rem"></i>
        </div>
        <h3 class="card-title mt-3">{{ title }}</h3>
        <h5 class="card-text mt-3 text-muted">{{ subtitle }}</h5>
        <p class="card-text">{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCard",
  props: {
    icon: String,
    title: String,
    subtitle: String,
    content: String
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>

</style>
