<template>
  <div class="graphic">
    <GraphicNavBar title="Alcance y Frecuencia por Top Marcas" />
    <GraphicChart
      :axisData="axisData"
      :metrics="metrics"
      :companies="companies"
    />
  </div>
</template>

<script>
import GraphicChart from "@/components/GraphicChart.vue";
import GraphicNavBar from "@/components/GraphicNavBar.vue";
import metrics from "@/assets/json/metrics.json";
export default {
  name: "App",
  components: {
    GraphicChart,
    GraphicNavBar,
  },
  data() {
    return {
      metrics,
      axisData: metrics.map((el) => ({
        x: el.name,
        yLeft: el.reach * 100,
        yRight: el.frequency,
        company: el.name,
      })),
    };
  },
  computed: {
    companies() {
      return [...new Set(this.metrics.map((el) => el.name))];
    },
  },
};
</script>

<style>
body {
  background-color: white;
}
#graphic {
  text-align: center;
  margin-top: 60px;
}
</style>
