<!-- HTML -->
<template>
    <div>
        <h1  class="title is-1">Contacto</h1>
        <div>
            <div class="columns">
                <div class="column"> Email: {{email}} </div>
                <div class="column"> Página: {{web}} </div>
            </div>
        </div>
    </div>
</template>

<!-- JS -->
<script>
export default {
  name: 'contacto',
  data(){
    return {
      email: 'aef@itam.mx',
      web: 'aef.itam.mx'
    }
  }
}
</script>

<!-- SCSS -->
<style scoped lang="scss">


</style>
