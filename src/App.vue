<script setup lang="ts">
  import Person from './components/Person.vue';
</script>

<template>
  <div class="app">
    <Person ref="ren"/>
  </div>
</template>

<style scoped>
  .app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>