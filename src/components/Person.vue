<script setup lang="ts">
import { ref } from 'vue'

// 不需要赋值
let title2 = ref()
let a = ref(0)
let b = ref(1)
let c = ref(2)

function showLog() {
  console.log(title2.value)
}
defineExpose({a, b, c})
</script>

<template>
  <div class="person">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>尚硅谷</h3>
    <button @click="showLog">点我输出h2这个元素</button>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
}
</style>
