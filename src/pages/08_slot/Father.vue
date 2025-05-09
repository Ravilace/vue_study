<script setup lang="ts">
import { ref } from 'vue'
import Category from "@/pages/08_slot/Category.vue";
</script>

<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category/>
      <Category/>
      <Category/>
    </div>
  </div>
</template>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
.content {
  display: flex;
  justify-content: space-evenly;
}
</style>
