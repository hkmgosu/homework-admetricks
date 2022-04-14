<template>
  <div class="random"></div>
</template>

<script>
export default {
  name: "HomeRandom",
  props: {
    height: String,
    width: String,
  },
};
</script>

<style scoped lang="scss">
.random {
  width: v-bind(width);
  height: v-bind(height);
  padding: 1%;
  margin: 1%;
  background-color: #fff;
  border-radius: 24px;
  align-self: flex-start;
  z-index: 1;
}
</style>
