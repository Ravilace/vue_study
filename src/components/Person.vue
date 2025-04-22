<script setup lang="ts">
import { ref, computed } from 'vue'

let firstName = ref('张')
let lastName = ref('三')
// 这么定义的fullName是一个计算属性，且是只读的
// let fullName = computed(() => {
//   return (
//     firstName.value.slice(0, 1).toUpperCase() +
//     firstName.value.slice(1) +
//     '-' +
//     lastName.value
//   )
// })
let fullName = computed({
  get() {
    return (
      firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    )
  },
  set(val) {
    const [str1, str2] = val.split('-')
    firstName.value = str1
    lastName.value = str2
  },
})

function changeFullName() {
  fullName.value = 'li-si'
}
</script>

<template>
  <div class="person">
    姓: <input type="text" v-model="firstName" />
    <br />
    名: <input type="text" v-model="lastName" />
    <br />
    <button @click="changeFullName">将全名更改为li-si</button>
    <br />
    全名: <span>{{ fullName }}</span>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
}
</style>
