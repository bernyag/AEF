<template>
  <div id="app">
    <div id="nav">
      <navBar></navBar>
    </div>
    <div id="cont">
      <router-view/>
    </div>
    <div id="footer">
      <foot></foot>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  //hacer que siempre esté hasta abajo el footer
    min-height: 70%;
    min-height: -webkit-calc(100% - 186px);
    min-height: -moz-calc(100% - 186px);
    min-height: calc(100% - 186px);
}
#nav {
  a {
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      text-decoration: underline;
      color: #00805d;
    }

  }
}
#cont{
  padding-top: 95px;
}
.column {
  text-align: justify;
}
h1{
   @media screen and (max-width: 500px) { font-size: 35px !important}
}
</style>

<script>
import NavBar from '@/components/NavBar.vue'
import Foot from '@/components/Foot.vue'

export default {
  components: { 
  'NavBar': NavBar, 
  'Foot': Foot, 
  }
};
</script>

