<script setup lang="ts">
import { ref} from 'vue'

let car = ref({ brand: '奔驰', price: 100 })

function changePrice() {
  car.value.price += 10
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
    <h2>一辆{{ car.brand }}车，价值{{ car.price }}万</h2>
    <button @click="changePrice">增加10万</button>
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
