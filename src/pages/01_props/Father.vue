<script setup lang="ts">
import Child from './Child.vue'
import { ref } from 'vue'
// 数据
let car = ref('奔驰')
let toy = ref('')

function getToy(value: string) {
  toy.value = value
}
</script>

<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>汽车：{{ car }}</h4>
    <h4 v-show="toy">子给的玩具：{{ toy }}</h4>
    <Child :car="car" :sendToy="getToy" />
  </div>
</template>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
