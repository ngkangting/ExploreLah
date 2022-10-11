<template>
  <router-link
    :to="{
      path: path,
    }"
    class="bg-light rounded-circle d-flex justify-content-center align-items-center"
    :style="{ height: `${height}px`, width: `${width}px` }"
    ><slot></slot
  ></router-link>
</template>

<script>
export default {
  name: "RoundLink",
  props: {
    path: String,
    height: Number,
    width: Number,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss"></style>
