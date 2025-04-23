<script setup lang="ts">
  import Person from './components/Person.vue';
  import {ref} from 'vue'
  let title2 = ref()
  let ren = ref()
  function showLog() {
    console.log(ren.value)
  }
</script>

<template>
  <div class="app">
    <h2 ref="title2">你好</h2>
    <button @click="showLog">点我输出title2</button>
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