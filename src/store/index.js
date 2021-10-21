import { createStore } from 'vuex'

export default createStore({
  state: {
    cupos: [],
    show_cupo_creado: false,
    show_grid_cupos_home: false,
    show_rellena_datos_cliente: false,
    show_form_cantidad_cupos: true,
    show_form_cliente: false,
  },
  mutations: {
    set_cantidad_cupos(state, payload) {
      if(state.cupos.length == 0) {
        for(let i = 1; i <= payload.cantidad; i++) {
          state.cupos.push({ id: i, nombre_cliente: '', cliente_asignado: false })
        }
        state.show_grid_cupos_home = true
        state.show_form_cantidad_cupos = false
      }else {
        state.show_cupo_creado = true
      }
    },
    set_cliente_cupo(state, payload) {
      state.show_form_cliente = true
      state.cupos.map(cupo => {
        if(cupo.id == payload.id) {
          cupo.nombre_cliente = payload.nombre_cliente
          cupo.cliente_asignado = true
          cupo.recogido = false
        }
      })
    },
    set_recogido_cupo(state, payload) {
      console.log("ID pasado: ", payload.id)
      state.cupos.map(cupo => {
        if(cupo.id == payload.id) {
          cupo.recogido = true
        }
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
