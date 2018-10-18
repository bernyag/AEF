<template>
  <div class="about">
    <h1 class="title is-1">NOSOTROS</h1>
    <div class="columns is-centered is-multiline">
      <div class="column is-full">
        <h1 class="title">Misión</h1>
        <h2 class="subtitle">
          <strong>Rutas AEF</strong> busca crear un sentimiento de familia entre la comunidad foránea y
          construir tejido social en beneficio de la colonia en la que vivimos. Buscamos
          potenciar la pertenencia a la comunidad y brindar las herramientas necesarias para
          que los y las foráneas consigan desarrollarse de la mejor manera posible dentro y
          fuera de la institución. Todos venimos de distintos caminos, estados y países, son
          las rutas que nos conectan las que nos hacen foráneos.
        </h2>
      </div>
      <br>
      <div class="column is-full">
        <h1 class="title">Visión</h1>
        <h2 class="subtitle">
          Queremos ser la <strong> generación 30 de AEF </strong> para consolidar y reconocer los logros de
          esos proyectos que perduran y pensar en los próximos 30 años de AEF. Tenemos
          el propósito de servir a la comunidad foránea y fortalecer las rutas que nos unen.
        </h2>
      </div>
      <br>
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

<!-- JS -->
<script>
export default {
  name: 'nosotros',
}
</script>

<!-- SCSS -->
<style scoped lang="scss">
.logo{
  max-width: 45%;
  display: block;
  margin-left: auto;
  margin-right: auto;
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
    h3 { 
      font-weight:bold; 
    }
}
.cajas h3{     
   text-align: center;
}
.title{
  text-align: center;
}
</style>