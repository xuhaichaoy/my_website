<template>
  <div id="app">
    <Header></Header>
    <Sider></Sider>
  </div>
</template>

<script>
import Header from './components/common/header'
import Sider from './components/common/sidebar'
export default {
  name: 'app',
  components: {
    Header,
    Sider,
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
  user-select: none;
}
html {
  overflow-y: scroll;
}
</style>
