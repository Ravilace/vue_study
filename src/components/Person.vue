<script setup lang="ts">
import { ref } from 'vue'

const name = ref('123')
const age = ref(18)
const tel = ref('1388888888')

function showTel() {
  alert(tel.value)
}

function changeName() {
  name.value = '张三'
}

function changeAge() {
  age.value += 1
}
</script>

<template>
  <div class="person">
    <h2>姓名: {{ name }}</h2>
    <h2>年龄: {{ age }}</h2>
    <button @click="showTel">查看联系方式</button>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>
