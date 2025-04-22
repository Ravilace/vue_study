<script setup lang="ts">
import { reactive, watch } from 'vue'
// 数据
let person = reactive({
  name: '张三',
  age: 18,
  car: {
    c1: '奔驰',
    c2: '宝马',
  },
})

function changeName() {
  person.name += '~'
}

function changeAge() {
  person.age += 1
}

function changeC1() {
  person.car.c1 = '奥迪'
}

function changeC2() {
  person.car.c2 = '大众'
}

function changeC3() {
  person.car = {
    c1: '雅迪',
    c2: '爱玛',
  }
}

// 监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
// watch(
//   () => {
//     return person.name
//   },
//   (newValue, oldValue) => {
//     console.log('person变化了', newValue, oldValue)
//   },
// )
// 监视响应式对象中的某个对象类型的属性，可以直接写，也能写函数，更推荐函数
// 如果还需要关注对象内部属性，需要手动开启深度监视
watch(
  () => {
    return person.name
  },
  (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue)
  }, {deep:true},
)
</script>

<template>
  <div class="person">
    <h2>姓名: {{ person.name }}</h2>
    <h2>年龄: {{ person.age }}</h2>
    <h2>汽车: {{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一辆车</button>
    <button @click="changeC2">修改第二辆车</button>
    <button @click="changeC3">修改所有车</button>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
}
</style>
