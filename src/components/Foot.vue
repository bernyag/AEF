<template>
    <div>
        <footer class="footer">
            <div class="white-gray">
                <div class="columns is-mobile">
                    <div class="column is-half is-offset-one-quarter text-center">
                        <div class="columns is-multiline">
                            <div class="column is-one-third text-center">
                                <a href="http://www.facebook.com/Rutas-AEF-183334135579214/" target="_blank"> <img src="../assets/fb.png" alt="FB" class="icon"></a>
                            </div>
                            <div class="column is-one-third text-center">
                                <a href="https://www.instagram.com/rutasaef/?hl=en" target="_blank"> <img src="../assets/ig.png" alt="FB" class="icon"></a>
                            </div>
                            <div class="column is-one-third text-center">
                                <router-link to="/contacto" target="_blank"><img src="../assets/mail.png" alt="FB" class="icon"></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="dark-gray">
                <div class="columns">
                    <div class="column is-full text-right padding-right">
                        Derechos Reservados © ITAM, 2018. Tel. +52 (55) 5628 4000. <br>
                        Este sitio fue creado y es mantenido por Laboratorio de Desarrollo Web del ITAM, WIL.<br>
                        <a href="http://donar.itam.mx/sites/default/files/aviso/privacidad.pdf" title="Aviso de Privacidad" target="_blank">
                        <span style="color:#A7C473">Aviso de Privacidad</span></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>



<script>
export default {
  name: "NavBar",
  data() {
    return {
      opened: false
    };
  }
};
</script>

<style lang="scss" scoped>
.footer{
  width: 100% !important;
  bottom:0;
  height: 10% !important;
  color: #CCC;
  padding: 0;
  margin-top: 115px;
//   position: absolute;
}
.column{
  padding: 10px;
}
.columns{
  padding: 10px;
}
.white-gray{
    background-color: #f4f4f4 !important;
}
.dark-gray{
    background-color: #333333 !important;
}
.text-right{text-align: right;}
.text-center{text-align: center;}
.icon{
    height: 50px;
    width: auto;
}
.padding-right{padding-right: 25px !important;}
</style>
