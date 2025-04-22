<script setup lang="ts">
import { ref, watch } from 'vue'

let person = ref({
  name: '张三',
  age: 18,
})
function changeName() {
  person.value.name += '~'
}
function changeAge() {
  person.value.age += 1
}
function changePerson() {
  person.value = {
    name: '李四',
    age: 24
  }
}
// 监视，情况一：监视【ref】定义的【对象类型】数据，监视的是对象的地址值
// 若想监视对象内部属性的变化，需要手动开启深度监视
// 此时需要第三个参数，进行配置
// 当使用deep watch时，只是更改属性时，newValue和oldValue是一样的
// 这是因为按引用传参导致的
watch(person, (newValue, oldValue) => {
  console.log('person变化了', newValue, oldValue)
}, {deep:true})
</script>

<template>
  <div class="person">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">更改姓名</button>
    <button @click="changeAge">更改年龄</button>
    <button @click="changePerson">更改整个人</button>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
}
</style>
