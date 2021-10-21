<template>
  <div class="box">
    <div class="container">
      <h1 class="title center">Actividad</h1>
    </div>
  </div>
  <div id="nav">
    <Menu />
  </div>
  <router-view/>
</template>
<script>
import Menu from './components/Menu.vue'
export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>
<style scoped>
  .center {
    text-align: center;
  }
</style>
