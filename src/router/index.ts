import { createRouter, createWebHistory } from 'vue-router'
import Props from '@/pages/01_props/Father.vue'
import Event from '@/pages/02_event/Father.vue'
import Mitt from '@/pages/03_mitt/Father.vue'
import VModel from '@/pages/04_v-model/Father.vue'
import Attrs from '@/pages/05_attrs/GrandFather.vue'
import RefsAndParent from '@/pages/06_refs_and_parent/Father.vue'
import ProvideAndInject from '@/pages/07_provide_and_inject/GrandFather.vue'
import Slots from '@/pages/08_slot/Father.vue'

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
    },
    {
      path: '/v_model',
      component: VModel,
    },
    {
      path: '/attrs',
      component: Attrs,
    },
    {
      path: '/refs_and_parent',
      component: RefsAndParent,
    },
    {
      path: '/provide_and_inject',
      component: ProvideAndInject,
    },
    {
      path: '/slots',
      component: Slots,
    },
  ],
})
