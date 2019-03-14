<!-- HTML -->
<template>
    <div>
        <h1 class="title is-1">30 AÑOS</h1>
        
        <div class="columns is-centered is-mobile">
            <div class="column is-10">
            <carousel 
                class="car"
                :per-page="1" 
                :navigationEnabled="true" 
                :loop="true"
                >
                <slide >
                    <img src="./../assets/fotos30/1.jpg">
                </slide>
                <slide >
                    <img src="./../assets/fotos30/2.jpg">
                </slide>
                <slide >
                    <img src="./../assets/fotos30/3.jpg">
                </slide>
                <slide >
                    <img src="./../assets/fotos30/4.jpg">
                </slide>
            </carousel>
            </div>
        </div>
        
        
        <br><br>
    <div class="parallax">
      <div class="columns is-mobile is-centered">
          <div class="column is-8 white black-text box">
            <h1 class="subtitle is-2 black-text">A TODA LA COMUNIDAD ITAM:</h1>
              Este año, la Asociación de Estudiantes Foráneos celebra su trigésimo aniversario. AEF
              surge de la necesidad de poder adaptarnos a la Ciudad de México, pero hoy se ha
              convertido en más que eso. Hoy, AEF trasciende los muros de Río Hondo no. 1 para
              mejorar y cambiar nuestra realidad inmediata. Crear un sentimiento de comunidad entre
              los estudiantes y miembros de la colonia.<br><br>
              Es un gran momento para celebrar, conmemorar y repensar los proyectos que perduran
              en la AEF. Que desde 1988, un grupo de estudiantes tuvieron la visión de crear una
              Asociación para los demás. Los foráneos somos una comunidad tan diversa como cada
              uno de nuestras estados. Desde la punta de Baja California hasta las costas de Quintana
              Roo, los foráneos llegamos al ITAM con la perspectiva de mejorar nuestra realidad para
              los demás. Ese es el espíritu que tanto caracteriza a nuestra comunidad.<br><br>
              Ser foráneo no es tarea fácil, todos extrañamos nuestro hogar. Pero somos los foráneos
              los más resilientes, los que se arriesgan al salir de nuestra ciudad de origen y aportamos
              la gran diversidad al ITAM.<br><br>
              Hoy, es tiempo de consolidar los logros y proyectos de la AEF, para poder construir un
              nuevo rumbo en los siguientes treinta años. Construir desde las aulas nuestra utopía
              hacia los retos que tenemos como foráneos. La AEF se proyecta como el motor de
              cambio dentro de nuestra comunidad y nuestra colonia.<br><br>
              Celebramos 30 años de ser un pilar para la comunidad foránea en el ITAM y queremos
              festejarlo contigo. Te invitamos a crear tejido social y se parte de la comunidad foránea e
              itamita. Todos venimos de distintas rutas, pero eso es aquello que nos conecta y nos une,
              eso nos hace ser foráneos.<br><br>
              Asociación de Estudiantes Foráneos.<br>
              Rutas 2018<br>
          </div>
      </div>
    </div>
    <br>
    <div class="columns is-centered is-mobile">
      <div class="column is-three-quarters centered">
        <div class="wide-separator-line"></div>
        <h1 class="subtitle is-3"> 1988 - 2018 </h1>
        <div class="wide-separator-line"></div>
      </div>
    </div>
  <div class="columns is-centered is-multiline " id="itam70">
      
      <div class="column is-3 cajas">
        <a href="">
          <h3 class="subtitle is-3">Discurso pronunciado por el Dr. Arturo Fernández</h3><br>
          Discurso pronunciado por el doctor Arturo Fernández, con motivo de la celebración del LXX Aniversario de la Fundación del ITAM.
        </a>
        
      </div>
      <div class="column is-3 cajas">
        <a href="">
          <h3 class="subtitle is-3">Discurso pronunciado por el Dr. Arturo Fernández</h3><br>
          Discurso pronunciado por el doctor Arturo Fernández, con motivo de la celebración del LXX Aniversario de la Fundación del ITAM.
        </a>
        
      </div>

      <div class="column is-3 cajas">
        <a href="">
          <h3 class="subtitle is-3">Discurso pronunciado por el Dr. Arturo Fernández</h3><br>
          Discurso pronunciado por el doctor Arturo Fernández, con motivo de la celebración del LXX Aniversario de la Fundación del ITAM.
        </a>
        
      </div>
      <div class="column is-3 cajas">
        <a href="">
          <h3 class="subtitle is-3">Discurso pronunciado por el Dr. Arturo Fernández</h3><br>
          Discurso pronunciado por el doctor Arturo Fernández, con motivo de la celebración del LXX Aniversario de la Fundación del ITAM.
        </a>
        
      </div>
      <div class="column is-3 cajas">
        <a href="">
          <h3 class="subtitle is-3">Discurso pronunciado por el Dr. Arturo Fernández</h3><br>
          Discurso pronunciado por el doctor Arturo Fernández, con motivo de la celebración del LXX Aniversario de la Fundación del ITAM.
        </a>
        
      </div>

      <div class="column is-3 cajas">
        <a href="">
          <h3 class="subtitle is-3">Discurso pronunciado por el Dr. Arturo Fernández</h3><br>
          Discurso pronunciado por el doctor Arturo Fernández, con motivo de la celebración del LXX Aniversario de la Fundación del ITAM.
        </a>
        
      </div>
    </div>
    </div>
</template>

<!-- JS -->
<script>
export default {
  name: 'anios',
}
</script>

<!-- SCSS -->
<style scoped lang="scss">
img{
    max-height: 600px;
    width: auto;
    max-width: 80%
}
.logo{
  max-width: 15%;
}
.parallax { 
    background-image: url("./../assets/para.jpeg");
    // height: 800px; 
    /* parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: .7;
}
.white{background-color:#d0d3d4;}
.black-text{color:black}
.box{
padding: 25px;
@media screen and (max-width: 500px){width:80% !important}
}
.wide-separator-line{
    height: 1px;
    background-color: #5c5b5b;
    margin: 5% 15px;
}
.centered{text-align: center}
.cajas:hover{
    background:rgba(19, 107, 19, 0.466) !important;
    transition-delay:.3s;
    h3 { font-weight:bold; }
}
.cajas{
    transition: .5s background-color;
    margin: 35px;
    h3{     
   text-align: center;
    }
    a{color: #2c3e50 !important;}
}
.car{
    //  max-width: 500px !important;
    text-align: center;
}
</style>
