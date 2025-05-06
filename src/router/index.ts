import { createRouter, createWebHistory } from 'vue-router'
import Props from '@/pages/01_props/Father.vue'
import Event from '@/pages/02_event/Father.vue'
import Mitt from '@/pages/03_mitt/Father.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/props',
      component: Props,
    },
    {
      path: '/event',
      component: Event,
    },
    {
      path: '/mitt',
      component: Mitt,
    }
  ],
})
