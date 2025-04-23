<script setup lang="ts">
import { ref } from 'vue'
import { type PersonInter, type Persons } from '@/types/index.ts'
// let person: PersonInter = {id: "215345", name:'赵六', age: 42}

let personList: Persons = [
  {
    id: '01y713',
    name: '张三',
    age: 18,
  },
  {
    id: '02a927',
    name: '李四',
    age: 60,
  },
  {
    id: '03z248',
    name: '王五',
    age: 23,
  },
]
</script>

<template>
  <div class="person">
    <div v-for="person in personList">
      id: {{person.id}} || 姓名: {{ person.name }} || 年龄: {{person.age}}
    </div>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
}
</style>
