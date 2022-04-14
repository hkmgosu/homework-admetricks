<template>
  <div class="graphic-chart">
    <h3>{{ title }}</h3>
    <svg></svg>
  </div>
</template>

<script>
import * as d3 from "d3";
export default {
  name: "GraphicChart",
  props: ["axisData", "companies", "title"],
  data() {
    return {};
  },
  computed: {
    filteredData() {
      return this.axisData.filter((el) => el.company);
    },
    maxValueLeft() {
      return Math.max(...this.filteredData.map((el) => el.yLeft));
    },
    maxValueRight() {
      return Math.max(...this.filteredData.map((el) => el.yRight));
    },
  },
  methods: {
    titleCase(title) {
      return title.charAt(0).toUpperCase() + title.slice(1);
    },
    renderChart() {
      // creating container
      const height = 300;
      const roundedHeight = Math.ceil((height + 1) / 10) * 10;
      const width = 800;
      const color = d3.scaleOrdinal(["#5ec0bc", "#f4bd6a"]);
      // set the ranges
      const xScale = d3
        .scaleBand()
        .domain(this.filteredData.map((dataPoint) => dataPoint.x))
        .range([0, width])
        .padding(0.2);
      const yScaleLeft = d3
        .scaleLinear()
        .domain([0, this.maxValueLeft])
        .range([roundedHeight, 10]);
      const yScaleRight = d3
        .scaleLinear()
        .domain([0, this.maxValueRight])
        .range([roundedHeight, 10]);
      const container = d3
        .select("svg")
        .classed("chart-container", true)
        .style("height", `${roundedHeight}px`)
        .style("width", `${width}px`);
      // eslint-disable-next-line no-unused-vars
      container
        .selectAll(".bar")
        .data(this.filteredData)
        .enter()
        .append("rect")
        .classed("bar", true)
        .attr("width", xScale.bandwidth())
        .attr("height", (data) => roundedHeight - yScaleLeft(data.yLeft))
        .attr("x", (data) => xScale(data.x))
        .attr("y", (data) => yScaleLeft(data.yLeft))
        .style("fill", (d, i) => {
          console.log(i);
          return color(i);
        });
      // add the x Axis
      container
        .append("g")
        .attr("transform", "translate(0," + roundedHeight + ")")
        .call(d3.axisBottom(xScale))
        .selectAll("text")
        .attr("transform", "translate(-15, 15) rotate(-45)");
      // add the yLeft Axis
      container.append("g").call(d3.axisLeft(yScaleLeft));
      // add the yRight Axis
      container
        .append("g")
        .attr("transform", "translate(" + width + ",0)")
        .call(d3.axisRight(yScaleRight));
    },
  },
  mounted() {
    this.renderChart();
  },
  updated() {
    this.renderChart();
  },
  beforeUpdate() {
    let svg = d3.select("svg");
    svg.selectAll("*").remove();
  },
};
</script>

<style>
.chart-container {
  border: 0px;
  margin-left: auto;
  margin-right: auto;
  overflow: visible;
}
text {
  font-size: medium;
  color: #c4c4c4;
}
line {
  display: none;
}
path.domain {
  stroke: transparent;
}
</style>
