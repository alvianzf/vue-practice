<template>
  <div id="app">
    <board-page />
  </div>
</template>

<script>
// import Login from './pages/Login.vue'
import Board from './pages/Board.vue'

export default {
  components: {
    // 'login-page': Login,
    'board-page': Board
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
