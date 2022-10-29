<template>
  <div class="col">
    <div class="card w-100" style="border:none">
      <div class="card-body">
        <i :class="icon" class="rounded-circle" style="font-size:30px; background-color:#d6f4ff; padding:10px"></i>
        <h5 class="card-title mt-3">{{ title }}</h5>
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
