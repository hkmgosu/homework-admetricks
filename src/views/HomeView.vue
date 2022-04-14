<template>
  <div class="home">
    <HomeJumbo />
    <HomeFeatureWrapper />
    <HomeRandomWrapper />
  </div>
</template>

<script>
import HomeJumbo from "@/components/HomeJumbo.vue";
import HomeFeatureWrapper from "@/components/HomeFeatureWrapper.vue";
import HomeRandomWrapper from "@/components/HomeRandomWrapper.vue";

export default {
  name: "HomeView",
  components: {
    HomeJumbo,
    HomeFeatureWrapper,
    HomeRandomWrapper,
  },
};
</script>

<style scoped lang="scss">
@mixin cover-background(
  $img-uri,
  $background-top: "top",
  $background-left: "center"
) {
  background: url($img-uri) no-repeat unquote($background-top)
    unquote($background-left);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.home {
  @include cover-background("@/assets/icons/Trazado-21.png");
  padding-top: 25%;
  padding-left: 200px;
  padding-right: 200px;
}

.row {
  align-items: baseline;
}
</style>
