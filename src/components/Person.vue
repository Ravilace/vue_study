<script setup lang="ts">
import { reactive, watch } from 'vue'

let person = reactive({
  name: '张三',
  age: 18,
})
let obj = reactive({
  a: {
    b: {
      c: 666
    }
  }
})
function changeName() {
  person.name += '~'
}
function changeAge() {
  person.age += 1
}
function changePerson() {
  Object.assign(person, {name: '李四', age:80})
}
function changeObj() {
  Object.assign(obj, {
    a: {
      b: {
        c: 123
      }
    }
  })
}
// 监视，情况三：监视【reactive】定义的【对象类型】数据
// 默认是开启深度监视的
watch(person, (newValue, oldValue)=>{
  console.log('person变化了', newValue, oldValue)
})
watch(obj, (newValue, oldValue) => {
  console.log('obj变化了', newValue, oldValue)
})
</script>

<template>
  <div class="person">
    <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">更改姓名</button>
    <button @click="changeAge">更改年龄</button>
    <button @click="changePerson">更改整个人</button>
    <hr>
    <h2>测试：{{obj.a.b.c}}</h2>
    <button @click="changeObj">点我测试obj变化</button>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
}
</style>
