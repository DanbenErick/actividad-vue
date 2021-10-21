<template>
  <div class="column">
    <div class="box">
      <h1>Tarjeta: <b>N°{{ id }}  {{ ' - ' + nombre_cliente_form }}</b></h1>
    </div>
    <div class="field">
      <div class="control">
      </div>
      <div class="control">
        <label class="label">Nombre</label>
        <input
          type="text"
          class="input"
          placeholder="Nombre del cliente"
          v-model="nombre_cliente"
        />
      </div>
      <div class="control">
        <button
          class="button is-small is-primary is-fullwidth"
          @click="set_cliente_tarjeta({ id, nombre_cliente })"
        >
          Guardar Cliente
        </button>
      </div>
    </div>
    <div
      class="notification is-danger is-small"
      v-show="show_rellena_datos_cliente"
    >
      <button class="delete is-small"></button>
      Rellena los datos
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "FormCliente",
  props: {
    id: Number,
    nombre_cliente_form: String,
  },
  data() {
    return {
      nombre_cliente: '',
    };
  },
  computed: {
    ...mapState(["show_rellena_datos_cliente"]),
  },
  methods: {
    set_cliente_tarjeta({ id, nombre_cliente }) {
      this.nombre_cliente = ''
      this.set_cliente_cupo({ id, nombre_cliente })
    },
    ...mapMutations(["set_cliente_cupo"]),
  },
};
</script>
