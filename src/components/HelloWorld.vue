<template>
  <div class="hello">
    <h1 class="title is-1">{{ msg }}</h1>
    <br>
    <h1 class="subtitle is-2">Imágenes</h1>
    <div id="carr">
      <agile :options="options">
          <div class="slide slide--1"></div>
          <div class="slide slide--2"></div>
          <div class="slide slide--3"></div>
          <div class="slide slide--4"></div>
          <div class="slide slide--5"></div>
      </agile>
    </div>
    <h1 class="subtitle is-2">ITAM 70 años</h1>
    <div class="columns is-centered is-multiline " id="itam70">
      <div class="column is-3 cajas">
        <h3 class="subtitle is-3">Discurso 1</h3>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
      </div>
      <div class="column is-3 cajas">
        <h3 class="subtitle is-3">Discurso 2</h3>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
      </div>
      <div class="column is-3 cajas">
        <h3 class="subtitle is-3">Discurso 3</h3>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
      </div>
      <div class="column is-3 cajas">
        <h3 class="subtitle is-3">Discurso 4</h3>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
      </div>
      <div class="column is-3 cajas">
        <h3 class="subtitle is-3">Discurso 5</h3>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
      </div>
      <div class="column is-3 cajas">
        <h3 class="subtitle is-3">Discurso 6</h3>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
      </div>
    </div>
    <div class="parallax">

    </div>
    <br>
    <h3 class="subtitle is-2">Próximos eventos</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <br>
    <h1 class="subtitle is-2">Extras</h1>
    <div class="columns is-centered is-multiline " id="itam70">
      <div class="column is-3 cajas">
        <h3 class="subtitle is-3">Discurso 1</h3>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
      </div>
      <div class="column is-3 cajas">
        <h3 class="subtitle is-3">Discurso 2</h3>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
      </div>
      <div class="column is-3 cajas">
        <h3 class="subtitle is-3">Discurso 3</h3>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
      </div>
      <div class="column is-3 cajas">
        <h3 class="subtitle is-3">Discurso 4</h3>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
      </div>
      <div class="column is-3 cajas">
        <h3 class="subtitle is-3">Discurso 5</h3>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
      </div>
      <div class="column is-3 cajas">
        <h3 class="subtitle is-3">Discurso 6</h3>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a aut illo, officiis temporibus dolorem? Vitae eaque dolores temporibus explicabo fugiat, ab nam voluptatum illo cupiditate. Recusandae consectetur aliquid fugit. Lorem 
      </div>
    </div>
    <h3 class="subtitle is-2">Extra</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
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
        background-image: url(./../assets/p1.jpg);
    }
    &--2 {
        background-image: url(./../assets/p2.jpg);
    }
    &--3 {
        background-image: url(./../assets/p3.jpg);
    }
    &--4 {
        background-image: url(./../assets/p4.jpg);
    }
    &--5 {
        background-image: url(./../assets/p5.jpg);
    }
}
.column{
  padding: 10px;
  margin: 5px;
}
.columns{
  padding: 35px;
  border-radius: 200px;
}
.cajas:hover{
    background:rgba(19, 107, 19, 0.466) !important;
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
</style>
