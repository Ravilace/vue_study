<script setup lang="ts">
import { ref, reactive } from 'vue'

let car = reactive({ brand: '五菱宏光', price: 100 })

function changePrice() {
  car.price += 10
}

function changeBrand() {
  car.brand = '奔驰'
}

function changeCar() {
  // 错误的写法，一旦car被直接赋值，它就不再是响应式的
  // car = reactive({'brand': '奥拓', price:200})

  // 这种写法页面可以正常更新
  Object.assign(car, { brand: '奥拓', price: 200 })
}

let games = ref([
  { id: '01', name: 'Arcaea' },
  { id: '02', name: 'SDVX' },
  { id: '03', name: 'Cytus' },
])

function changeFirstGame() {
  games.value[0].name = '流星蝴蝶剑'
}
</script>

<template>
  <div class="person">
    <h2>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changeBrand">修改汽车的品牌</button>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改汽车</button>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeFirstGame">更改第一个游戏的名字</button>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
}
</style>
