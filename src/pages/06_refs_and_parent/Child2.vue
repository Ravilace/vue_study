<script setup lang="ts">
import { ref } from 'vue'

const book_num = ref(6)
defineExpose({ book_num })
</script>

<template>
  <div class="child">
    <h3>子组件2</h3>
    <h4>书籍数量: {{ book_num }}</h4>
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
