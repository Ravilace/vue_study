<script setup lang="ts">
import Child from './Child.vue'
import { ref } from 'vue'

const fatherModel = ref('测试')
</script>

<template>
  <div class="father">
    <h3>父组件</h3>
    <Child v-model="fatherModel" />
    <h4>父组件的同步值 {{ fatherModel }}</h4>
  </div>
</template>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
