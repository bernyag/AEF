import Vue from 'vue'
import Router from 'vue-router'
import Años from './views/Años.vue'
import ACCT from './views/ACCT.vue'
import Apoyo from './views/Apoyo.vue'
import Donar from './views/Donar.vue'
import Nosotros from './views/Nosotros.vue'
import Proyectos from './views/Proyectos.vue'
import Transparencia from './views/Transparencia.vue'
import Contacto from './views/Contacto.vue'
import Inicio from './views/Inicio.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio
    },
    {
      path: '/30años',
      name: '30años',
      component: Años
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: Contacto
    },
    {
      path: '/ACCT',
      name: 'ACCT',
      component: ACCT
    },
    {
      path: '/apoyo',
      name: 'apoyo',
      component: Apoyo
    },
    {
      path: '/donar',
      name: 'donar',
      component: Donar
    },
    {
      path: '/nosotros',
      name: 'nosotros',
      component: Nosotros
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: Proyectos
    },
    {
      path: '/transparencia',
      name: 'transparencia',
      component: Transparencia
    },
    {
      path: '/inicio',
      name: 'inicio',
      component: Inicio
    }
  ],
  //regresar hasta arriba
  scrollBehavior: function(to, from, savedPosition) {
    if (to.hash) {
        return {selector: to.hash}
    } else {
        return { x: 0, y: 0 }
    }
}
})