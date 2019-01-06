<template>
  <div id="app">
    <div class="header">
      <img src="./assets/logo.png">
      <div class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/flex">Flex布局</router-link>
        <router-link to="/cy">Cytoscape</router-link>
        <router-link to="/debounce">Debounce</router-link>
        <router-link to="/custom">自定义指令、组件</router-link>
        <router-link to="/transition">过渡</router-link>
        <router-link to="/canvas">画布</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import '@/assets/jquery.qtip.min.css'

export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .header{
    text-align: center;
  }
  .nav{
    margin-bottom: 20px;
  }
}
</style>
