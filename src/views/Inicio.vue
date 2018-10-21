<!-- HTML -->
<template>
  <div class="inicio">
    <HelloWorld msg="Asociación Estudiantil de Foráneos"/>
  </div>
</template>

<!-- JS -->
<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'inicio',
  components: {
    HelloWorld
  }
}
</script>


<!-- SCSS -->
<style scoped lang="scss">
    

</style>
