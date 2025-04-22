<script setup lang="ts">
import { ref, watch } from 'vue'
let sum =  ref(0)
function changeSum() {
  sum.value += 1
}
const stopWatch = watch(sum, (newValue, oldValue) => {
  console.log('sum变化了', newValue, oldValue)
  if(newValue >= 10) {
    stopWatch()
  }
})
</script>

<template>
  <div class="person">
    <h2>{{sum}}</h2>
    <button @click="changeSum">点我让sum+1</button>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
}
</style>
