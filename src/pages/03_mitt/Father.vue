<script setup lang="ts">
import Child1 from './Child1.vue'
import Child2 from '@/pages/03_mitt/Child2.vue'
</script>

<template>
  <div class="father">
    <h3>父组件</h3>
    <Child1 />
    <Child2 />
  </div>
</template>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
