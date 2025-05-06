<script setup lang="ts">
import { ref } from 'vue'

let toy = ref('奥特曼')
let props = defineProps(['car', 'sendToy'])
</script>

<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>父亲给的车：{{ car }}</h4>
    <button @click="sendToy(toy)">把玩具给父亲</button>
  </div>
</template>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px;
  border-radius: 10px;
}
</style>
