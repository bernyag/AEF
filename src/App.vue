<template>
  <div id="app">
    <div id="nav">
      <navBar></navBar>
    </div>
    <div id="cont">
      <router-view/>
    </div>
    
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-size: 20px;
    font-family: 'Courier New';
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      text-decoration: underline;
      color: #00805d;
    }

  }
}
#cont{
  padding-top: 85px;
}

</style>
<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: { 
  'NavBar': NavBar, 
  }
}
</script>

