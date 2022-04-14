<template>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: "Poppins";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 25px;
}

body {
  margin: 0;
  padding: 0;
}

// all row class in the app including components
.row {
  display: flex;
  flex-direction: row;
}
</style>
