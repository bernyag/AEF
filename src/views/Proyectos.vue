<!-- HTML -->
<template>
    <div>
        <h1  class="title is-1">PROYECTOS</h1>
        <div class="columns is-centered is-mobile">
        <div class="column centered ">
            <div class="wide-separator-line"></div>
        </div>
        </div>
        <div class="columns is-centered is-mobile">
            <div class="column is-four-fifths">
                <div class="columns is-multiline">
                    <div class="column is-three-quarters">
                        <h1 class="title is-4"> Descripción</h1>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, rem. Alias dignissimos quidem aspernatur sint. Voluptates quisquam eligendi doloribus repellat, molestiae distinctio veritatis, accusamus quos, pariatur iste modi explicabo optio?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero alias natus, aspernatur harum debitis sequi, vel consequuntur repellat ipsum fugit facilis deleniti. Sunt quibusdam rem minima architecto provident facilis nihil.

                        <br><br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nostrum non consequatur inventore fugit, unde incidunt doloribus consequuntur natus, officia debitis. Quisquam quod, dolorum eius quae quam ipsam facilis voluptatem.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis velit quibusdam aut aliquid ducimus soluta harum beatae blanditiis modi autem, maxime facilis placeat nobis vel adipisci ex nulla magnam enim!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nostrum quae veniam neque optio nihil sapiente? Veritatis, voluptatibus! Odit cupiditate inventore minus laboriosam vitae magnam modi ad nobis exercitationem asperiores.

                        </div>
                    <div class="column is-one-quarter">
                        <img src="../assets/beca.png" alt="beca">
                    </div>
                    <div class="column caja "><button class="button is-outlined"><router-link to="/proyectos/proyecto1" target="_blank" class="green">PROYECTO 1</router-link></button></div>
                    <div class="column caja "><button class="button is-outlined"><router-link to="/proyectos/proyecto2" target="_blank" class="green">PROYECTO 2</router-link></button></div>
                    <div class="column caja "><button class="button is-outlined"><router-link to="/proyectos/proyecto3" target="_blank" class="green">PROYECTO 3</router-link></button></div>
                    <div class="column caja "><button class="button is-outlined"><router-link to="/proyectos/proyecto4" target="_blank" class="green">PROYECTO 4</router-link></button></div>
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
  name: 'proyectos',
}
</script>
<!-- SCSS -->
<style scoped lang="scss">
.green{
      color: #00805d;
}

</style>
