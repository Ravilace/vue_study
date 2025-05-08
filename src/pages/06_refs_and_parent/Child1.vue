<script setup lang="ts">
import { ref } from 'vue'

const toy = ref('奥特曼')
const book_num = ref(3)

defineExpose({ toy, book_num })
</script>

<template>
  <div class="child">
    <h3>子组件1</h3>
    <h4>玩具为：{{ toy }}</h4>
    <h4>书籍数量: {{ book_num }}</h4>
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
