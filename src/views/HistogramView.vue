<template>
  <div class="histogram">
    <GraphicNavBar title="Alcance y Frecuencia por Top Marcas" />
    <GraphicHistogram :metrics="metrics" />
  </div>
</template>

<script>
import GraphicHistogram from "@/components/GraphicHistogram.vue";
import GraphicNavBar from "@/components/GraphicNavBar.vue";
import metrics from "@/assets/json/metrics.json";
export default {
  name: "App",
  components: {
    GraphicHistogram,
    GraphicNavBar,
  },
  data() {
    return {
      metrics,
    };
  },
};
</script>

<style>
body {
  background-color: white;
}
#histogram {
  text-align: center;
  margin-top: 60px;
}
</style>
