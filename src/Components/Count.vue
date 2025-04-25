<script setup lang="ts">
import { ref } from 'vue'
import { useCountStore } from '@/store/count.ts'

const countStore = useCountStore()
let n = ref(1)

function add() {
  // // 第一种修改方式
  // countStore.sum += 1
  // countStore.school = '尚硅谷'
  // countStore.address = '北京'

  // // 第二种方式
  // countStore.$patch({
  //   sum: 888,
  //   school: '尚硅谷',
  //   address: '北京',
  // })

  // 第三种方式，使用pinia那边定义的action
  countStore.increment(n.value)
}

function sub() {
  countStore.sum -= 1
}
</script>

<template>
  <div class="count">
    <h2>当前求和为：{{ countStore.sum }}</h2>
    <h3>欢迎来到: {{ countStore.school }}, 坐落于: {{ countStore.address }}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="sub">减</button>
  </div>
</template>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>
