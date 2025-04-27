import {createRouter, createWebHistory} from "vue-router";
import Father from '@/pages/01_props/Father.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/props',
            component: Father
        }
    ]
})