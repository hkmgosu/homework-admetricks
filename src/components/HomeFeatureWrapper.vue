<template>
  <div class="feature-wrapper">
    <div class="row">
      <HomeFeature
        title="Agencia"
        description="Crea mejores estrategias de marketing digital, planes de medios y reportes de resultados para tus clientes. Muéstrale qué está haciendo su competencia en publicidad online."
        imgUrl="@/assets/icons/63.png"
      />
      <HomeFeature
        title="Medios"
        description="Mejora tus argumentos de ventas conociendo en detalle la inversión de tus clientes en otros medios y el alcance que les aporta.us clientes en otros medios y el alcance que les aporta."
        imgUrl="@/assets/icons/134.png"
      />
      <HomeFeature
        title="Marcas"
        description="Descubre las ofertas y campañas que tu competencia está promocionando. Recibe alertas cuando tu competencia lanza una nueva campaña de publicidad online."
        imgUrl="@/assets/icons/132.png"
      />
      <HomeFeature
        title="Verificación"
        description="Como un agente tercero, transparente y sin conflictos de interés, Admetricks permite a los actores de la industria del marketing digital verificar que sus campañas exhiban en los sitios y formatos pautados."
        imgUrl="@/assets/icons/65.png"
      />
    </div>
  </div>
</template>

<script>
import HomeFeature from "@/components/HomeFeature.vue";
export default {
  name: "HomeFeatureWrapper",
  props: {
    msg: String,
  },
  components: {
    HomeFeature,
  },
};
</script>

<style scoped lang="scss">
.feature-wrapper {
  padding-top: 100px;
  height: 400px;
}
.row {
  justify-content: center;
}

@media screen and (max-width: 1200px) {
  .feature-wrapper {
    padding-bottom: 150px;
  }
  .yellow-arrow-wrapper {
    left: 50px;
  }
}
</style>
