<script setup lang="ts">
import { ref, reactive, provide } from 'vue'
  import Father from './Father.vue'

  let money = ref(100)
  let car = reactive({
    'name': '奔驰',
    'price': 200,
  })
  function spendMoney(value:number) {
    money.value -= value
  }

  provide('moneyContext', {'money': money, 'spendMoney': spendMoney})
  provide('car', car)
</script>

<template>
  <div class="grandfather" >
    <h3>爷组件</h3>
    <h4>爷爷有{{money}}万元</h4>
    <h4>爷爷的车是{{car.name}}，价值{{car.price}}万元</h4>
    <Father />
  </div>
</template>

<style scoped>
.grandfather {
  background-color: mediumpurple;
  padding: 20px;
  border-radius: 10px;
}
</style>