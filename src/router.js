import Vue from 'vue'
import Router from 'vue-router'
import Anios from './views/Anios.vue'
import ACCT from './views/ACCT.vue'
import Servicios from './views/Servicios.vue'
import Donar from './views/Donar.vue'
import Nosotros from './views/Nosotros.vue'
import Proyectos from './views/Proyectos.vue'
import Proyecto1 from './views/Proyectos/Proyecto1.vue'
import Proyecto2 from './views/Proyectos/Proyecto2.vue'
import Proyecto3 from './views/Proyectos/Proyecto3.vue'
import Proyecto4 from './views/Proyectos/Proyecto4.vue'
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
      component: Anios
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
      path: '/servicios',
      name: 'servicios',
      component: Servicios
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
      path: '/proyectos/proyecto1',
      name: 'proyecto1',
      component: Proyecto1
    },
    {
      path: '/proyectos/proyecto2',
      name: 'proyecto2',
      component: Proyecto2
    },
    {
      path: '/proyectos/proyecto3',
      name: 'proyecto3',
      component: Proyecto3
    },
    {
      path: '/proyectos/proyecto4',
      name: 'proyecto4',
      component: Proyecto4
    },
    {
      path: '/transparencia',
      name: 'transparencia',
      component: Transparencia
    },
    {
      path: '*',
      redirect: '/'
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