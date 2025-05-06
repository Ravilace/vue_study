<script setup lang="ts">
import { ref } from 'vue'

let toy = ref('奥特曼')
const emit = defineEmits(['send-toy'])
</script>

<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <button @click="emit('send-toy', toy)">把玩具给父组件</button>
  </div>
</template>

<style scoped>
.child {
  margin-top: 10px;
  background-color: lightgreen;
  padding: 10px;
  box-shadow: 0 0 10px;
  border-radius: 10px;
}
</style>
