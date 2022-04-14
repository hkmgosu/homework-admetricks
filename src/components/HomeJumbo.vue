<template>
  <div class="jumbo">
    <div class="green-arrow-wrapper">
      <img src="@/assets/icons/TRIANGULO5.png" />
    </div>
    <div class="background-spiral-wrapper">
      <img src="@/assets/icons/151.png" />
    </div>
    <div class="row">
      <div class="jumbo-content">
        <h3>"Estamos para ayudarte"</h3>
        <h1>
          ¿Tienes problemas para entender el mercado de la publicidad digital?
        </h1>
        <p class="jumbo-description">
          El Mercado de la publicidad online es incierto y complejo, Admetricks
          te
          <span
            >ayuda a visibilizar cómo desempeñan las campañas y contenidos</span
          >
          versus los de tu competencia en tiempo real con reportes y alertas
          automáticas
        </p>
        <button name="demo" type="button">solicitar demo</button>
        <a href="http://www.google.com">ver funcionalidades</a>
      </div>
      <div class="device-wrapper">
        <img src="@/assets/icons/104.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeJumbo",
};
</script>

<style scoped lang="scss">
.jumbo-content {
  text-align: left;
  width: 50%;
  max-width: 540px;
  margin-right: 10%;
  margin-left: 20%;
}

button {
  font-size: 15px;
  color: #0a2540;
  background-color: #00d4ff;
  font-weight: 300;
  height: 40px;
  width: 150px;
  border: none;
  margin-right: 3%;
  border-radius: 18px;
}

a {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

a:-webkit-any-link {
  color: gainsboro;
  cursor: pointer;
  text-decoration: none;
}

h1 {
  font-size: 38px;
  color: #fff;
  font-weight: 300;
  width: 500px;
}

.jumbo-description {
  font-size: 18px;
  color: #adbdcc;
  font-weight: normal;
  width: 540px;
}

h3 {
  font-size: 18px;
  color: #00d4ff;
  font-weight: 300;
}

span {
  font-size: 18px;
  color: #00d4ff;
  font-weight: 300;
}

.row {
  justify-content: center;
}

.device-wrapper {
  z-index: 1;
  margin-right: 10%;
}

.green-arrow-wrapper {
  position: absolute;
  top: 120px;
  left: -80px;
}

.background-spiral-wrapper {
  position: fixed;
  right: -10%;
  top: 15%;
}

.background-spiral-wrapper img {
  width: 90%;
}

@media screen and (max-width: 1200px) {
  .device-wrapper {
    display: none;
  }
  .jumbo {
    padding-top: 180px;
  }
  .jumbo-content {
    width: 100%;
  }
  .background-spiral-wrapper {
    padding-top: 180px;
  }
}

@media screen and (max-width: 1400px) {
  .jumbo {
    padding-top: 180px;
  }
  .jumbo-content {
    width: 100%;
    margin: 5%;
  }
  .device-wrapper > img {
    width: 400px;
    margin: 5%;
  }
  .background-spiral-wrapper {
    padding-top: 180px;
  }
}
</style>
