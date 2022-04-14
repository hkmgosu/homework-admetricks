<template>
  <div class="feature">
    <div class="feature-content">
      <img src="@/assets/icons/132.png" />
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeFeature",
  props: {
    title: String,
    description: String,
    imgUrl: String,
  },
};
</script>

<style scoped lang="scss">
.feature {
  margin-left: 2%;
  margin-right: 2%;
  width: 320px;
}
.feature-content {
  text-align: initial;
  z-index: 1;
}

.feature-content > * {
  padding-left: 15px;
}

h3 {
  color: #fff;
  border-left: 3px solid #00d4ff;
}

p {
  color: #adbdcc;
}

@media screen and (max-width: 1200px) {
  .yellow-arrow-wrapper {
    left: 50px;
  }
}
</style>
