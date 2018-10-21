<!-- HTML -->
<template>
    <div>
        <h1  class="title is-1">Contacto</h1>
        <div>
            <div class="columns is-centered">
                <div class="column is-one-quarter"> <a href="tel:+525532701276"><img src="../assets/iphone.png" alt="phone" class="icon"> <br>+52 (55) 5628 4000</a></div>
                <div class="column is-one-quarter"><a href="https://www.google.com.mx/maps/place/ITAM/@19.3447476,-99.2018448,17z/data=!3m1!4b1!4m5!3m4!1s0x85d200057116a1d1:0xeb89056e16e93b4f!8m2!3d19.3447476!4d-99.1996561"> <img src="../assets/location.png" alt="loc" class="icon"> <br>Ciudad de México, México</a></div>
                <div class="column is-one-quarter"> <a href="mailto:bernyag@hotmail.com"><img src="../assets/mail.png" alt="correo" class="icon"> <br>{{email}}</a> </div>
            </div>
            <!-- <div class="columns is-mobile is-centered">
                <div class="column is-full">
                    <h1 class="title is-3">Enviar correo </h1>
                    <div class="content">
                    <form name="contact" action="" method="post">
                        <label class="form-label" for="name">
                        Nombre:
                        </label>
                        <input class="form-field" name="name" id="name" /><br>
                        <label class="form-label" for="email">
                        Email:
                        </label>
                        <input class="form-field" name="email" id="email" />
                        <label class="form-label" for="message"><br>
                        Mensaje:
                        </label>
                        <textarea class="form-field" name="message" id="message"></textarea><br>
                        <input class="form-button" type="submit" value="Enviar" />
                    </form>
                    </div>
                </div>
            </div>
            <div class="columns is-mobile is-centered">
                <div class="column is-half">
                    
                </div>
            </div> -->

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

.columns{
    padding: 25px;
}
.column{    text-align: center !important;
}
.icon{
    height: 80px !important;
    width: auto !important;
}
a{color:#2c3e50;
:hover{color:#A7C473 !important }}
</style>
