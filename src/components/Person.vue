<script setup lang="ts">
import { ref, computed } from 'vue'

let firstName = ref('张')
let lastName = ref('三')
let fullName = computed(() => {
  return (
    firstName.value.slice(0, 1).toUpperCase() +
    firstName.value.slice(1) +
    '-' +
    lastName.value
  )
})
</script>

<template>
  <div class="person">
    姓: <input type="text" v-model="firstName" /> <br />
    名: <input type="text" v-model="lastName" /> <br />
    全名: <span>{{ fullName }}</span>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
}
</style>
