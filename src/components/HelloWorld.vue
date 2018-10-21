<template>
  <div class="hello">
    <h1 class="title is-1">{{ msg }}</h1>
    <br>
    <div id="carr">
      <agile :options="options">
          <div class="slide slide--1"></div>
          <div class="slide slide--2"></div>
          <div class="slide slide--3"></div>
          <div class="slide slide--4"></div>
      </agile>
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
      </DIV>
    </div>
    <div class="parallax">

    </div>
    <br>
    <h3 class="subtitle is-2">AVISOS PARROQUIALES</h3>
    <DIV class="columns is-mobile is-centered">
        <div class="column is-four-fifths">
            • Juntas semanales de coordinadores por área. Lunes 4:00 pm
            (Hora por confirmar) en Cubo AEF. Progreso y objetivos por área.<br><br>

            • Juntas quincenales obligatorias para todo el equipo. Miércoles
            2:30 pm (por confirmar) Cubo AEF.<br><br>

            • Juntas ACCT martes 2:30 pm.<br><br>

            • Reuniones con SALITAM, los días 5 de cada mes.<br><br>

            ¡Las juntas son para todos!
        </div >
    </DIV>
    <div id="nosotros"> </div>
    <h1 class="title is-1">NOSOTROS</h1>
    <div class="columns is-mobile is-centered is-multiline">
      <div class="column is-four-fifths">
        <h1 class="title">Misión</h1>
          <strong>Rutas AEF</strong> busca crear un sentimiento de familia entre la comunidad foránea y
          construir tejido social en beneficio de la colonia en la que vivimos. Buscamos
          potenciar la pertenencia a la comunidad y brindar las herramientas necesarias para
          que los y las foráneas consigan desarrollarse de la mejor manera posible dentro y
          fuera de la institución. Todos venimos de distintos caminos, estados y países, son
          las rutas que nos conectan las que nos hacen foráneos.
        </div>
      <br>
      <div class="column is-four-fifths">
        <h1 class="title">Visión</h1>
          Queremos ser la <strong> generación 30 de AEF </strong> para consolidar y reconocer los logros de
          esos proyectos que perduran y pensar en los próximos 30 años de AEF. Tenemos
          el propósito de servir a la comunidad foránea y fortalecer las rutas que nos unen.
      </div>
      <br><br>
      <div class="column is-full">
        <h1 class="title">Estructura</h1>
        <img alt="Estructura" src="../assets/estructura.png" class="logo">
      </div>
    </div>
    <div class="columns is-centered is-multiline " id="itam70">
    <div class="column is-3 cajas">
      <h3 class="subtitle is-3">Becas y ACCT</h3>
      Responsable: Afri. <br><br>
      Coordinar el programa de
      Becas y Subsidios, realizar
      entrevistas, asignar los
      subsidios hacer los pagos
      semanales, ser el contacto
      con los locales y
      beneficiados.<br><br>

      Impartir clases de mate o
      español, coordinar un área
      de ACCT.
    </div>
    
    <br>
    <div class="column is-3 cajas">
      <h3 class="subtitle is-3">Relaciones públicas</h3>
        Responsable: Karla. <br><br>
        Ser encargado de la
        comunicación interna y
        externa de la asociación.<br><br>

        Ser el vínculo entre AEF y
        SALITAM.<br><br>
        Coordinar la agenda de
        AEF y el calendario.
        Coordinar al equipo de
        redes.
    </div>
    <div class="column is-3 cajas">
      <h3 class="subtitle is-3">Tesorería</h3>
        Responsable: Jujus. <br><br>
        Realizar los presupuestos
        de eventos, propuestas y
        planes.<br><br>
        Supervisar los fondos de
        AEF y control de
        presupuestos.<br><br>
        Hacer análisis de costos y
        reportes contables para
        fiscalización externa.  
    </div>
    <div class="column is-3 cajas">
      <h3 class="subtitle is-3">Logística y ejecución</h3>
        Responsable: Fervi. <br><br>
        Coordinar equipos de
        trabajo para la realización
        de propuestas.<br><br>
        Gestionar y planear
        eventos y actividades de
        AEF. <br><br>
        Planear nuevos
        proyectos y programas.
    </div>
    <div class="column is-3 cajas">
      <h3 class="subtitle is-3">Sistemas y lab de datos</h3>
        Responsable: Fer.<br><br>
        Manejar todos los servicios
        informáticos AEF. (Apps,
        pág. web, bases de datos).<br><br>
        Realizar análisis
        estadísticos poblacionales,
        asistencia y demanda.
    </div>
    <div class="column is-3 cajas">
      <h3 class="subtitle is-3">Apoyo estudiantil</h3>
        Responsable: Luis G. <br><br>
        Coordinar y dar
        seguimiento a todos los
        servicios de AEF.<br><br>
        Responsables de los
        préstamos, la
        administración del cubo.<br><br>
        Dar seguimiento a
        programas de seguridad,
        vivienda e integración.
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
       return {
        options:  
        {
          // arrows: true,
          // dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          speed: 800,
          fade: true,
          pauseOnHover: false,
          prevArrow: '<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M16.2,21c0.3,0,0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L9.6,12L17,4.7c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L6.8,12l8.8,8.7C15.7,20.9,16,21,16.2,21z"/></svg>',
          nextArrow: '<svg x="0px" y="0px" viewBox="0 0 24 24"><path d="M7.8,21c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l7.4-7.3L7,4.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l8.8,8.7l-8.8,8.7C8.3,20.9,8,21,7.8,21z"/></svg>'        }
      }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nosotros{width: 100%; height: 100px}
.word {
  color: #00805d;
}
h3 {
  margin: 10px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.carr{
  z-index: 0;
}
.agile {
    &__dots {
        bottom: 0;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
    }

    &__dot {
        button {
            background-color: transparent;
            border: 1px solid #fff;

            &:hover {
                background-color: #fff;
            }
        }

        &--current {
            button {
                background-color: #fff;
            }
        }
    }

    &__arrow {
        height: 100%;
        top: 0;
        width: 80px;

        &:hover {
            background-color: rgba(#000, .5);

            #arrow-svg {
                fill: #fff;
            }
        }

        &[disabled] {
            display: none;
        }

        #arrow-svg {
            fill: rgba(#fff, .4);
            height: 25px;
        }
    }
}

.slide {
    background: {
        position: center;
        size: cover;
    }
    height: 500px;

    &:before {
        background-color: rgba(#000, .2);
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    &--1 {
        background-image: url(./../assets/fora1.png);
    }
    &--2 {
        background-image: url(./../assets/fora2.png);
    }
    &--3 {
        background-image: url(./../assets/fora3.png);
    }
    &--4 {
        background-image: url(./../assets/fora4.png);
    }
}
.column{
  padding: 10px;
  margin: 5px;
}
.columns{
  padding: 35px;
  border-radius: 200px;
  text-align: justify;
}
.cajas:hover{
    background:rgba(19, 107, 19, 0.466) !important;
    transition-delay:.3s;
    h3 { font-weight:bold; }
}
.parallax { 
    background-image: url("./../assets/para.jpeg");
    height: 800px; 
    /* parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: .7;
}
.logo{
  max-width: 45%;
  display: block;
  margin-left: auto;
  margin-right: auto;
    }
.cajas{
    transition: .5s background-color;
    margin: 35px;
    h3{     
   text-align: center;
    }
}
.title{
  text-align: center;
}
.text-center{text-align: center;}
.subtitle{
    padding: 20px;
}
</style>
