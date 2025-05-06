<script setup lang="ts">
import { ref } from 'vue'
import emitter from '@/utils/emitter.ts'
let toy = ref('哥哥的玩具')
</script>

<template>
  <div class="child">
    <h3>子组件1</h3>
    <button @click="emitter.emit('send-toy-to-brother', toy)">把玩具给弟弟</button>
  </div>
</template>

<style scoped>
.child {
  margin-top: 10px;
  background-color: darkorange;
  padding: 10px;
  box-shadow: 0 0 10px;
  border-radius: 10px;
}
</style>
