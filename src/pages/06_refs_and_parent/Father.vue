<script setup lang="ts">
import Child1 from './Child1.vue'
import Child2 from './Child2.vue'
import { ref } from 'vue'

const c1 = ref()
const c2 = ref()

function changeChild1Toy() {
  c1.value.toy = '父亲更改后的玩具'
}

function AddAllChildrenBooks(refs: any) {
  // console.log('refs', refs)
  for (let key in refs) {
    // console.log('key', key)
    // console.log('value', refs[key])
    refs[key].book_num += 4
  }
}
</script>

<template>
  <div class="father">
    <h3>父组件</h3>
    <button @click="changeChild1Toy">修改子组件1的玩具</button>
    <button @click="AddAllChildrenBooks($refs)">添加每个孩子的书</button>
    <Child1 ref="c1" />
    <Child2 ref="c2" />
  </div>
</template>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}
</style>
