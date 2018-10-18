<template>
  <div>
    <nav id="navbar">
      <div class="nav">
        <div class="nav-content">
          <div class="nav-icon">
            <router-link to="/">
              <img class="b-logo" src="./../assets/logo-itam.png" alt="Logo" > 
            </router-link>              
          </div>
          <div class="nav-menu">
            <div class="nav-menu-horiz">
              <div class="nav-item"><router-link to="/">INICIO</router-link>   </div>
              <div class="nav-item"><router-link to="/nosotros">NOSOTROS</router-link>   </div>
              <div class="nav-item"><router-link to="/apoyo"> APOYO</router-link>   </div>
              <div class="nav-item"><router-link to="/proyectos">PROYECTOS</router-link>   </div>
              <div class="nav-item"><router-link to="/ACCT">ACCT</router-link></div>
              <div class="nav-item"><router-link to="/30años">30 AÑOS</router-link></div>
              <div class="nav-item"><router-link to="/transparencia">TRANSPARENCIA</router-link></div>
              <div class="nav-item"><router-link to="/donar">DONAR</router-link></div>
              <div class="nav-item"><router-link to="/contacto">CONTACTO</router-link></div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">... 
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <div class="nav-item"><router-link to="/">INICIO</router-link>   </div>
                <div class="nav-item"><router-link to="/nosotros">NOSOTROS</router-link>   </div>
                <div class="nav-item"><router-link to="/apoyo"> APOYO</router-link>   </div>
                <div class="nav-item"><router-link to="/proyectos">PROYECTOS</router-link>   </div>
                <div class="nav-item"><router-link to="/ACCT">ACCT</router-link></div>
                <div class="nav-item"><router-link to="/30años">30 AÑOS</router-link></div>
                <div class="nav-item"><router-link to="/transparencia">TRANSPARENCIA</router-link></div>
                <div class="nav-item"><router-link to="/donar">DONAR</router-link></div>
                <div class="nav-item"><router-link to="/contacto">CONTACTO</router-link></div>
            </div>
            </div> 
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">

.nav-content{
    display: inline-block;

}
.nav-icon{
     float: left;
}
.nav-menu {
  display: inline-block;
  text-align: right;
  margin: 10;
}
.nav-item{
    float: left;
    padding: 10px 9px 10px 9px;
    
      a{
        &:hover{
        color: yellowgreen !important;
      }
    }

}

.b-logo{
	max-width: 50%; height: auto; left: 15px;
}
.dropdown .dropbtn {
    font-size: 16px;    
    border: none;
    outline: none;
    padding: 14px 16px;
}
.dropdown{
  float: right;
  display: none}
.dropdown:hover .dropbtn {
    background-color: yellowgreen !important;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    .nav-item{float: none;}
    max-width: 200px;
}

.dropdown-content a {
    float: none;
    padding: 12px 16px;
    display: block;
    text-align: left;
}

.dropdown-content a:hover {
    background-color: #ddd;
}

.dropdown:hover .dropdown-content {
    display: block;
}
.nav{
  z-index: 100;
  position: fixed;
  float: right;
  width: 100%;
  text-align: center;
  padding: 10px;
  background-color: white;
  @media screen and (max-width: 1160px){
      div.nav-menu-horiz {display: none;}
      div.dropdown {display: block !important}
  }
  @media screen and (max-width: 550px){
      div.nav{max-width: 285px !important;}
      div.nav-icon{width: 175px;}
      div.dropdown-content{position:relative}
  }
}
</style>
