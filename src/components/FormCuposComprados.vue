<template>
  <div class="column">
    <div class="field">
      <div class="control"></div>
      <div class="control">
        <label class="label">N° Tarjeta</label>
        <input
          disabled="true"
          type="text"
          class="input"
          placeholder="Nombre del cliente"
          :value="id_tarjeta_cliente"
        />
      </div>
      <div class="control">
        <label class="label">Cliente</label>
        <input
          disabled="true"
          type="text"
          class="input"
          placeholder="Nombre del cliente"
          :value="nombre_tarjeta_cliente"
        />
      </div>
      <div class="control">
        <button @click="set_recogido_cupo({ id: id_tarjeta_cliente })" class="button is-info is-small is-fullwidth">Recogido</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: "FormCuposComprados",
  props: {
    id_tarjeta_cliente: Number,
    nombre_tarjeta_cliente: String,
  },
  methods: {
    ...mapMutations(['set_recogido_cupo'])
  }
};
</script>
