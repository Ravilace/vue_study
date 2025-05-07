<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <input type="text" v-model="model" />
  <h4>子组件的同步值 {{ model }}</h4>
</template>

<style scoped>
input {
  background: linear-gradient(palevioletred, greenyellow);
}
</style>
