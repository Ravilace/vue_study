// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from "@/pages/Detail.vue";

// 第二步：创建路由器
const router = createRouter({
  history: createWebHistory(), // 路由器的工作模式（稍后讲解）
  routes: [
    {
      name: '主页',
      path: '/home',
      component: Home,
    },
    {
      name: '新闻',
      path: '/news',
      component: News,
      children: [
        {
          name: '详细',
          path: 'detail/:id/:title/:content',
          component: Detail,
        }
      ]
    },
    {
      name: '关于',
      path: '/about',
      component: About,
    },
  ],
})

// 暴露出去router
export default router
