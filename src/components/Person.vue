<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
// 数据
let sum = ref(0)

// 方法
function add() {
  sum.value += 1
}

// setup就是创建
console.log('子组件创建')

// 挂载前
onBeforeMount(() => {
  console.log('子组件挂载前')
})

// 挂载完毕
onMounted(() => {
  console.log('子组件挂载完毕')
})

onBeforeUpdate(() => {
  console.log('子组件更新前')
})

onUpdated(() => {
  console.log('子组件更新完毕')
})
onBeforeUnmount(() => {
  console.log('子组件卸载前')
})
onUnmounted(() => {
  console.log('子组件卸载完毕')
})
</script>

<template>
  <div class="person">
    <h2>当前求和为{{ sum }}</h2>
    <button @click="add">点我+1</button>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
}

div {
  background-color: lightblue;
  border-radius: 10px;
  padding: 20px;
}
</style>
