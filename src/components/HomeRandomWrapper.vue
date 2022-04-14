<template>
  <div class="feature-wrapper">
    <div class="yellow-arrow-wrapper">
      <img src="@/assets/icons/TRIANGULO2.png" />
    </div>
    <div class="row">
      <HomeRandom height="190px" width="333px" />
      <HomeRandom height="490px" width="490px" />
      <HomeRandom height="580px" width="333px" />
      <HomeRandom height="600px" width="333px" />
      <HomeRandom height="860px" width="480px" />
    </div>
    <div class="orange-arrow-wrapper">
      <img src="@/assets/icons/TRIANGULO8.png" />
    </div>
  </div>
</template>

<script>
import HomeRandom from "@/components/HomeRandom.vue";
export default {
  name: "HomeRandomWrapper",
  props: {
    msg: String,
  },
  components: {
    HomeRandom,
  },
};
</script>

<style scoped lang="scss">
.feature-wrapper {
  padding-top: 100px;
  padding-bottom: 100px;
}
.row {
  justify-content: center;
  flex-wrap: wrap;
}

.yellow-arrow-wrapper {
  position: absolute;
  top: 1550px;
  left: 280px;
  z-index: 2;
}

.orange-arrow-wrapper {
  position: absolute;
  bottom: -1500px;
  left: -100px;
  z-index: 2;
}
</style>
