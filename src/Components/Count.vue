<script setup lang="ts">
import { ref } from 'vue'
import { useCountStore } from '@/store/count.ts'

const countStore = useCountStore()
// 以下两种方法都能拿到sum的数据
// console.log('@@@', countStore.sum)
// console.log('@@@', countStore.$state.sum)
let n = ref(1)
</script>

<template>
  <div class="count">
    <h2>当前求和为：{{countStore.sum}}</h2>
    <!--通过手动指定.number限制类型-->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="">加</button>
    <button @click="">减</button>
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
