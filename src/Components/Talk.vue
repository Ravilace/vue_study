<script setup lang="ts">
  import {reactive} from 'vue'
  import axios from 'axios'
  import {nanoid} from "nanoid";
  import {useTalkStore} from "@/store/talk.ts";
  const talkList = useTalkStore().talkList
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
</script>

<template>
  <div class="talk">
    <button @click="getTalk">获取一句话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">
        {{ talk.title}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
