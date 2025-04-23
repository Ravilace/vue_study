<script setup lang="ts">
import { reactive } from 'vue'
import { type Persons } from '@/types'
import Person from './components/Person.vue'

// reactive直接传泛型
let personList = reactive<Persons>([
  {
    id: '01y713',
    name: '张三',
    age: 18,
  },
  {
    id: '02a927',
    name: '李四',
    age: 60,
  },
  {
    id: '03z248',
    name: '王五',
    age: 23,
    x: 1,
  },
])
</script>

<template>
  <div class="app">
    <!--    不加冒号会传字符串过去-->
    <!--    <Person a="哈哈" list=personList />-->
    <!--    加冒号相当于对字符串进行了eval实际拿变量求值-->
    <!--    ref是特例，不需要加冒号-->
    <Person :personList="personList" />
  </div>
</template>

<style scoped>
.app {
  background-color: #ddd;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
</style>
