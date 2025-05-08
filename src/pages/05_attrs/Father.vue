<script setup lang="ts">
import Child from '@/pages/05_attrs/Child.vue'
</script>

<template>
  <div class="father">
    <h3>父组件</h3>
    <Child v-bind="$attrs"/>
  </div>
</template>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>