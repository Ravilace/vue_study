<script setup lang="ts">
  import { ref } from 'vue'
  import Father from './Father.vue'
</script>

<template>
  <div class="grandfather" >
    <h3>爷组件</h3>
    <Father />
  </div>
</template>

<style scoped>
.grandfather {
  background-color: mediumpurple;
  padding: 20px;
  border-radius: 10px;
}
</style>