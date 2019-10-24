<template>
  <div id="app">
    <!-- msg is a attribute sent to Todos.vue -->
    <todos/>
  </div>
</template>

<script>
// Logic for this view

// Import Todos from our ./components/ directory.
import Todos from './components/Todos.vue'

export default {
  name: 'app',
  components: { // let our app know we're using a component/view called Todos imported from Todos.vue
    Todos
  }
}
</script>

<style lang="scss">
/* Using scss for CSS */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
