<template>
  <span class="line-text">{{ content }}</span>
</template>

<script>
export default {
  name: "LineText",
  props: {
    content: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.line-text {
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  font-weight: 600;
  color: #b7bdbf;
}
.line-text:before,
.line-text:after {
  content: "";
  flex: 1 1;
  border-bottom: 1px solid;
  margin: auto;
  background-color: #b7bdbf;
}
.line-text:before {
  margin-right: 15px;
}
.line-text:after {
  margin-left: 15px;
}
</style>
