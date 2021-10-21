<template>
  <div class="column">
    <div class="field">
      <label class="label">Cantidad</label>
      <div class="control">
        <input
          type="number"
          class="input"
          placeholder="Cantidad de Cupos"
          v-model="cantidad_cupos"
        />
      </div>
      <div class="control">
        <button
          class="button is-small is-primary is-fullwidth"
          @click="set_cantidad_cupos({ cantidad: cantidad_cupos })"
        >
          Iniciar Actividad
        </button>
      </div>
    </div>
    <div class="notification is-danger is-small" v-show="show_cupo_creado">
      <button class="delete is-small"></button>
      Ya creaste los cupos
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "FormCupos",
  data() {
    return {
      cantidad_cupos: 0,
    };
  },
  computed: {
    ...mapState(["show_cupo_creado"]),
  },
  methods: {
    ...mapMutations(["set_cantidad_cupos"]),
  },
};
</script>
