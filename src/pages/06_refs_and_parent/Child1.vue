<script setup lang="ts">
import { ref } from 'vue'

const toy = ref('奥特曼')
const book_num = ref(3)

function changeFatherHouse(parent: any) {
  parent.house = '豪宅'
}

defineExpose({ toy, book_num })
</script>

<template>
  <div class="child">
    <h3>子组件1</h3>
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
