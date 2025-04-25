import { defineStore } from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'
import {reactive} from "vue";

// 选项式
// export const useTalkStore = defineStore('talk', {
//   actions: {
//     async getTalk() {
//       // 发请求，下面这行的写法是：连续解构赋值+重命名
//       let {data: {content: title}} = await axios.get('/api/qinghua')
//       // 把请求回来的字符串，包装成一个对象
//       let obj = {
//         id: nanoid(),
//         title
//       }
//       console.log(obj)
//       this.talkList.unshift(obj)
//     }
//   },
//   // 真正存储数据的地方
//   state() {
//     return {
//       talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
//     }
//   },
// })

export const useTalkStore = defineStore('talk', () => {

    const talkList = reactive(
        JSON.parse(localStorage.getItem('talkList') as string) || []
    )

    async function getTalk() {
      // 发请求，下面这行的写法是：连续解构赋值+重命名
      let {data: {content: title}} = await axios.get('/api/qinghua')
      // 把请求回来的字符串，包装成一个对象
      let obj = {
        id: nanoid(),
        title
      }
      console.log(obj)
      talkList.unshift(obj)
    }
    return {talkList, getTalk}
})
