<template>
  <div class="home">
    <img alt="ASSC logo" src="../assets/ACCT.png" class="logo">
     <div class="columns is-mobile">
       <div class="column is-10 is-offset-2">
        <div class="columns is-multiline">
          <div class="column is-half">
            • <b class="word">Inicio del programa:</b> 3 de febrero.<br><br>
            • <b class="word">INSCRIPCIÓN EN LÍNEA:</b> Fb Acción
            Comunitaria por la Colonia Tizapán.<br><br>
            • <b class="word">Programa de educación:</b>
            Habilidades matemáticas y verbales.<br><br>
            • Programa de Becarios.<br><br>
            • Curso de Inducción al Bachillerato.
          </div>
          <div class="column is-half">
            <img src="../assets/niñaACCT.png" alt="Integrante ACCT" class="foto">
          </div>
        </div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: "ACCT"
};
</script>

<!-- SCSS -->
<style scoped lang="scss">
.logo {
  width: 175px;
}
.word{
  color: #00805d;
}
.foto {
  width: 315px;
  height: auto;
}

</style>
