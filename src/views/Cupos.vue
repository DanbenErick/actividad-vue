<template>
  <div class="box container">
    <h1>Cupos</h1>
    <div class="columns">
      <FormCuposComprados
        :id_tarjeta_cliente="id_cliente_tarjeta"
        :nombre_tarjeta_cliente="nombre_cliente_tarjeta"
      />
      <div class="column">
        <div class="cupos" v-show="show_grid_cupos_home">
          <div
            v-for="(cupo, index) of cupos"
            :class="{ 'is-outlined': cupo.recogido, 'is-link': cupo.cliente_asignado}"
            :key="index"
            class="cupo button"
            @click="set_tarjeta_cliente(cupo.id, cupo.nombre_cliente)"
          >
            {{ cupo.id }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormCuposComprados from "../components/FormCuposComprados.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Cupos",
  components: {
    FormCuposComprados,
  },
  data() {
    return {
      id_cliente_tarjeta: '',
      nombre_cliente_tarjeta: '',
    }
  },
  computed: {
    ...mapState(["cupos", "show_grid_cupos_home"]),
  },
  methods: {
    set_tarjeta_cliente(id, nombre_cliente) {
      this.id_cliente_tarjeta = id
      this.nombre_cliente_tarjeta = nombre_cliente
    },
    ...mapMutations([]),
  },
};
</script>
<style scoped>
.cupos {
  display: grid;
  grid-template-columns: repeat(15, 1fr);
}
</style>
