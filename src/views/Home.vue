<template>
  <div class="box container">
    <div class="columns">
      <FormCupos v-show="show_form_cantidad_cupos" />
      <FormCliente
        v-show="show_form_cliente"
        :id="id_tarjeta_cliente"
        :nombre_cliente_form="nombre_cliente"
      />
      <div class="column">
        <div class="cupos" v-show="show_grid_cupos_home">
          <div
            :class="{ 'is-primary': cupo.cliente_asignado }"
            :key="index"
            class="cupo button"
            v-for="(cupo, index) of cupos"
            @click="set_tarjeta_cliente(cupo.id)"
          >
            {{ cupo.id }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormCupos from "../components/FormCupos.vue";
import FormCliente from "../components/FormCliente.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    FormCupos,
    FormCliente,
  },
  data() {
    return {
      id_tarjeta_cliente: Number,
      nombre_Cliente: String,
    };
  },
  computed: {
    ...mapState([
      "show_cupo_creado",
      "cupos",
      "show_grid_cupos_home",
      "row_cupos_grid",
      "show_form_cantidad_cupos",
      "show_form_cliente",
    ]),
  },
  methods: {
    set_tarjeta_cliente(id) {
      console.log("ID seleccionado: ", id, "Nombre pasadO: ", this.cupos[id - 1].nombre_cliente);
      this.id_tarjeta_cliente = id;
      this.nombre_cliente = this.cupos[id - 1].nombre_cliente || '';
      
      this.set_cliente_cupo(id);
    },
    ...mapMutations(["set_cliente_cupo"]),
  },
};
</script>
<style scoped>
.cupos {
  display: grid;
  grid-template-columns: repeat(15, 1fr);
}
</style>
