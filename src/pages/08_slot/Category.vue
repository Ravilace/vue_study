<script setup lang="ts">
defineProps(['title'])
</script>

<template>
  <div class="category">
    <h3 class="title">{{ title }}</h3>
    <slot><h3>默认显示</h3></slot>
  </div>
</template>

<style scoped>
.category {
  background-color: skyblue;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
  width: 200px;
  height: 300px;
}
.title {
  background-color: orange;
  text-align: center;
}
</style>
