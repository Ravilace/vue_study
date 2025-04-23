<script setup lang="ts">
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
import Person from './components/Person.vue'

let isShow = ref(true)
// setup就是创建
console.log('父组件创建')

// 挂载前
onBeforeMount(() => {
  console.log('父组件挂载前')
})

// 挂载完毕
onMounted(() => {
  console.log('父组件挂载完毕')
})

onBeforeUpdate(() => {
  console.log('父组件更新前')
})

onUpdated(() => {
  console.log('父组件更新完毕')
})
onBeforeUnmount(() => {
  console.log('父组件卸载前')
})
onUnmounted(() => {
  console.log('父组件卸载完毕')
})
</script>

<template>
  <div class="app">
    <Person v-if="isShow" />
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
