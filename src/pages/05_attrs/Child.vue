<script setup lang="ts">
defineProps(['a', 'b', 'c', 'x', 'y', 'updateFunc'])
</script>

<template>
  <div class="child">
    <h3 class="child">子组件</h3>
    <h4>a: {{ a }}, b: {{ b }}, c: {{ c }}, x: {{ x }}, y:{{ y }}</h4>
    <button @click="updateFunc(6)">给a加6</button>
  </div>
</template>

<style scoped>
.child {
  background-color: lightgreen;
  padding: 20px;
  border-radius: 10px;
}
</style>
