<template>
  <div class="home">
    <h1 class="title is-1">ACCT</h1>
    <br>
    <div class="columns is-centered is-mobile">
        <div class="column is-10">
        <carousel 
            class="car"
            :per-page="1" 
            :navigationEnabled="true" 
            :loop="true"
            >
            <slide >
                <img src="./../assets/ACCT.png">
            </slide>
            <slide >
                <img src="./../assets/niñaACCT.png">
            </slide>
            <slide >
                <img src="./../assets/fora3.png">
            </slide>
            <slide >
                <img src="./../assets/fora4.png">
            </slide>
        </carousel>
        </div>
    </div>
    <h1 class="subtitle is-2">FECHAS IMPORTANTES</h1>
    <div class="columns is-mobile is-centered" id="itam70">
      <DIV class="column is-four-fifths">
          • <b class="word"> Inicio Convocatoria Becas:</b>
            17 de enero al 26 de enero.<br><br>

            • <b class="word"> Integración Extranjero:</b> 25 ó
            26 de enero.<br><br>

            • <b class="word"> Toma de Protesta:</b> 19 de
            enero 2:30 pm.<br><br>

            • <b class="word"> Trajineras:</b> 27 de enero.<br><br>

            • <b class="word"> Inicio de Gestión:</b> 22 de enero.<br><br>
        <div class="column is-four-fifths">
            <div class="column caja "><a href="https://aef-itam.firebaseapp.com/Lineamientos.pdf" class="button is-outlined  " target="_blank">Calendario</a></div>
        </div >
      </DIV>
    </div>
    <div class="parallax">

    </div>
    <br>
    <div class="columns is-mobile is-centered is-multiline">
      <div class="column is-four-fifths">
        <h1 class="subtitle is-2 no-left">OBJETIVOS</h1>
          <strong>ACCT, </strong> 
          fundada en 2015, es una incubadora de proyectos sociales con el interés de un grupo de estudiantes del Instituto Tecnológico Autónomo de México por mejorar la educación en nuestro país


      </div>
      <br>
      <div class="column is-four-fifths">
        <h1 class="subtitle is-2 no-left">INSCRIPCIÓN</h1>
        • <b class="word">Inicio del programa:</b> 3 de febrero.<br><br>
            • <b class="word">INSCRIPCIÓN EN LÍNEA:</b> Fb Acción
            Comunitaria por la Colonia Tizapán.<br><br>
            • <b class="word">Programa de educación:</b>
            Habilidades matemáticas y verbales.<br><br>
            • Programa de Becarios.<br><br>
            • Curso de Inducción al Bachillerato.

        <div class="column is-four-fifths">
            <div class="column caja "><a href="https://aef-itam.firebaseapp.com/Lineamientos.pdf" class="button is-outlined  " target="_blank">Llenar formulario</a></div>
        </div >
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
.car{
    //  max-width: 500px !important;
    text-align: center;
}
.parallax { 
    background-image: url("./../assets/acctFb.jpg");
    height: 800px; 
    /* parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: .7;
}
</style>
