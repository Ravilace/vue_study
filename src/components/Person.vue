<script setup lang="ts">
import { reactive, ref } from 'vue'

let car = reactive({ brand: '奔驰', price: 100 })

function changePrice() {
  car.price += 10
}

let games = reactive([
  { id: '01', name: 'Arcaea' },
  { id: '02', name: 'SDVX' },
  { id: '03', name: 'Cytus' },
])

function changeFirstGame() {
  games[0].name = '流星蝴蝶剑'
}

let obj = reactive({
  a: {
    b: {
      c: 666,
    },
  },
})

function changeObj() {
  obj.a.b.c = 999
}
</script>

<template>
  <div class="person">
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">增加10万</button>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeFirstGame">更改第一个游戏的名字</button>
  </div>
  <hr />
  <h2>测试{{ obj.a.b.c }}</h2>
  <button @click="changeObj">改变obj</button>
</template>

<style scoped>
button {
  margin: 0 5px;
}
</style>
