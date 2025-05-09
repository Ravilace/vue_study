<script setup lang="ts">
import { inject } from 'vue'

let { money, spendMoney } = inject('moneyContext', {
  money: '默认金额',
  spendMoney: (x: number) => {},
})
let car = inject('car', { name: '未知车辆', price: 0 })
</script>

<template>
  <div class="child">
    <h3 class="child">子组件</h3>
    <h4>孙子有{{ money }}万元</h4>
    <h4>孙子继承的车是{{ car.name }}，价值{{ car.price }}万元</h4>
    <button @click="spendMoney(6)">花爷爷的钱</button>
  </div>
</template>

<style scoped>
.child {
  background-color: lightgreen;
  padding: 20px;
  border-radius: 10px;
}
</style>
