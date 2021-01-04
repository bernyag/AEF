<!-- HTML -->
<template>
    <div>
        <h1 class="title is-1">SERVICIOS</h1>
        
        <div class="columns is-centered is-mobile">
            <div class="column is-four-fifths">
                <div class="columns is-multiline">
                    <div class="column is-three-quarters">
                        <h1 class="title is-4"> Becas y Subsidios Alimenticio</h1>
                        Entendiendo la necesidad de que tengas una buena alimentación y las limitantes de tiempo que se presentan día a día, AEF creó el programa de Becas y Subsidios Alimenticios y de Transportes.

                        <br><br>

                        Al ser foráneo, puedes disfrutar de descuentos y beneficios alrededor de la Colonia Tizapán. Adquiriendo el sello institucional que otorga el ITAM, puedes disfrutar de descuentos en cafés, lavanderías, restaurantes, estéticas y más.
                        </div>
                    <div class="column is-one-quarter">
                        <img src="../assets/RutasFinal.png" alt="beca">
                    </div>
                    <div class="column caja "><a href="https://aef-itam.firebaseapp.com/Lineamientos.pdf" class="button is-outlined  " target="_blank">Link a becas</a></div>
                </div>
            </div>
        </div>

        <div class="columns is-centered is-mobile">
        <div class="column centered ">
            <div class="wide-separator-line"></div>
        </div>
        </div>
        <div class="columns is-centered is-mobile">
            <div class="column is-four-fifths">
                <div class="columns is-multiline">
                    <div class="column is-three-quarters">
                        <h1 class="title is-4"> Apoyo estudiantil</h1>
                        Asociación de Estudiantes Foráneos (AEF) es una comisión de apoyo que tiene como finalidad ayudar a los estudiantes que vienen del interior o exterior de la república en su proceso de adaptación en la Ciudad de México. Desde actividades de integración hasta becas alimenticias y de transporte, AEF te acompañará por tu paso en el ITAM y será tu apoyo para resolver dudas y problemas.
                        </div>
                    <div class="column is-one-quarter">
                        <img src="../assets/beca.png" alt="beca">
                    </div>
                    <div class="column caja "><a href="https://aef-itam.firebaseapp.com/Lineamientos.pdf" class="button is-outlined  " target="_blank">Préstamos</a></div>
                    <div class="column caja"><a href="https://donar.itam.mx/es/69/paginas/antecedentes-javier-beristain" class="button is-outlined  " target="_blank">Servicios</a></div>
                    <div class="column caja"><a href="https://donar.itam.mx/es/69/paginas/donar-en-linea" class="button is-outlined  " target="_blank">Información</a></div>
                    <div class="column caja"><a href="https://donar.itam.mx/es/69/paginas/donar-en-linea" class="button is-outlined  " target="_blank">Cubículo AEF</a></div>
                
                </div>
            </div>
        </div>
        <div class="columns is-centered is-mobile">
            <div class="column centered ">
                <div class="wide-separator-line"></div>
            </div>
        </div>
    </div>
</template>

<!-- JS -->
<script>
export default {
  name: "servicios"
};
</script>

<!-- SCSS -->
<style scoped lang="scss">
.word {
  color: #00805d;
}
.foto {
  width: 215px;
}
.column {
  text-align: justify;
  padding-left: 5%;
    padding-right: 5%;
}
.wide-separator-line{
    height: 1px;
    background-color: #5c5b5b;
    margin: 5% 20px;
}
</style>
