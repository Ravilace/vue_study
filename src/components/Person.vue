<script setup lang="ts">
import { ref, watch, watchEffect} from 'vue'
let temp = ref(10)
let height = ref(0)
function changeTemp() {
  temp.value += 10
}
function changeHeight() {
  height.value += 10
}
// 监视 -- watch实现
// watch(
//     [temp, height],
//     (val) => {
//       let [newTemp, newHeight] = val
//       if(newTemp >= 60 || newHeight >= 80) {
//         console.log("发送服务器请求！", val)
//       }
//     }
// )
// 监视 -- watchEffect实现
// 立即运行，相当于watch加了immediate的option
watchEffect(() => {
  if(temp.value >= 60 || height.value >= 80) {
    console.log('给服务器发请求')
  }
})
</script>

<template>
  <div class="person">
    <h2>需求，当水温达到60度，或者水位达到80cm，给服务器发送请求</h2>
    <h2>水温为：{{ temp }} ℃</h2>
    <h2>水位为：{{ height}} cm</h2>
    <button @click="changeTemp">点我水温+10</button>
    <button @click="changeHeight">点我水位+10</button>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
}
</style>
