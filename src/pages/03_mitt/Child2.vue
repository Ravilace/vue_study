<script setup lang="ts">
import { ref } from 'vue'
import emitter from '@/utils/emitter.ts'

let toy = ref('')
emitter.on('send-toy-to-brother', (value: string) => {
  toy.value = value
})
</script>

<template>
  <div class="child">
    <h3>子组件2</h3>
    <h4 v-show="toy">哥哥给的玩具：{{ toy }}</h4>
  </div>
</template>

<style scoped>
.child {
  margin-top: 10px;
  background-color: mediumpurple;
  padding: 10px;
  box-shadow: 0 0 10px;
  border-radius: 10px;
}
</style>
