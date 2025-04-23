<script setup lang="ts">
import {ref} from 'vue'
import Person from './components/Person.vue'

let isShow = ref(true)
</script>

<template>
  <div class="app">
    <Person v-if="isShow" />
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
