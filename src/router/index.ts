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
          // 第一种写法: 将路由收到的所有params参数作为props传给路由组件
          props: true
          // 第二种写法: 函数写法，针对query传参，手动拿到route，取出属性返回
          // props(route) {
          //   return route.query
          // }
          // 第三种写法: 对象写法，固定写死的返回值
          // props: {
          //   id: 100,
          //   title: 200,
          //   content: 300,
          // }
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
