// 引入createApp用于创建应用
import {createApp} from 'vue'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import router from '@/router'

const pinia = createPinia()

const app = createApp(App)
// 安装插件
app.use(pinia)
// 安装路由器
app.use(router)
// 挂载应用
app.mount('#app')
