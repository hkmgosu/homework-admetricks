<template>
  <div class="graphic-histogram">
    <svg></svg>
  </div>
</template>

<script>
import * as d3 from "d3";
// const values = [-3.14, -0.01, 3.76];
// d3.min(values), d3.median(values), d3.max(values);
export default {
  name: "GraphicHistogram",
  props: ["metrics"],
  data() {
    return {};
  },
  computed: {
    filteredData() {
      return this.metrics.filter((el) => el.name);
    },
  },
  methods: {
    renderChart() {
      // set the dimensions and margins of the graph
      var margin = { top: 10, right: 30, bottom: 30, left: 40 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

      // set the ranges
      var x = d3
        .scaleBand()
        .domain(this.filteredData.map((dataPoint) => dataPoint.name))
        .rangeRound([0, width]);
      var y = d3.scaleLinear().range([height, 0]);

      // set the parameters for the histogram
      var histogram = d3
        .bin()
        .value(function (d) {
          return d.reach;
        })
        .domain(x.domain());

      // append the svg object to the body of the page
      // append a 'group' element to 'svg'
      // moves the 'group' element to the top left margin
      var svg = d3
        .select("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      // get the data
      // group the data for the bars
      var bins = histogram(this.metrics);

      // Scale the range of the data in the y domain
      y.domain([
        0,
        d3.max(bins, function (d) {
          return d.length;
        }),
      ]);

      // append the bar rectangles to the svg element
      svg
        .selectAll("rect")
        .data(bins)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", 1)
        .attr("transform", function (d) {
          return "translate(" + x(d.x0) + "," + y(d.length) + ")";
        })
        .attr("width", function (d) {
          return x(d.x1) - x(d.x0) - 1;
        })
        .attr("height", function (d) {
          return height - y(d.length);
        });

      // add the x Axis
      svg
        .append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

      // add the y Axis
      svg.append("g").call(d3.axisLeft(y));
    },
  },
  mounted() {
    this.renderChart();
  },
  updated() {
    this.renderChart();
  },
  beforeUpdate() {
    var svg = d3.select("svg");
    svg.selectAll("*").remove();
  },
};
</script>

<style>
.canvas-0 {
  height: 600px;
}
.main text {
  font: 10px sans-serif;
}
.axis line,
.axis path {
  shape-rendering: crispEdges;
  stroke: black;
  fill: none;
}
.line {
  fill: none;
  stroke: steelblue;
  stroke-width: 2px;
}
.specific-tooltip {
  position: absolute;
  z-index: 10;
  visibility: hidden;
}
.bar rect {
  fill: steelblue;
  shape-rendering: crispEdges;
}
.bar text {
  fill: #fff;
}
.axis path,
.axis line {
  fill: none;
  stroke: #000;
  shape-rendering: crispEdges;
}
</style>
