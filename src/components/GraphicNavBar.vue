<template>
  <nav class="topnav">
    <span>{{ title }}</span>
    <a href="javascript:void(0);" class="icon">
      <i class="fa fa-bars"></i>
    </a>
    <a href="javascript:void(0);" class="icon">
      <i class="fa fa-download"></i>
    </a>
  </nav>
</template>
<script>
export default {
  name: "GraphicNavBar",
  props: ["title"],
};
</script>

<style lang="scss" scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #f8f9fa;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: right;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 27px;
}

span {
  float: left;
  padding: 15px;
  font-size: 27px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add an active class to highlight the current page */
.topnav a.active {
  background-color: grey;
  color: white;
}

/* When the screen is less than 600 pixels wide, hide the span (description of) element */
@media screen and (max-width: 600px) {
  .topnav span {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}
</style>
