<script setup lang="ts">
// defineProps是宏函数，可以不用手动引入
import {withDefaults } from 'vue'
import type {Persons} from "@/types";
// 只接收
// defineProps(['a'])

// 同时将props保存起来
// let x = defineProps(['personList'])
// console.log(x)

// 接收props同时限制type: defineProps<{personList:Persons}>()
// 限制必要性：defineProps<{personList？:Persons}>()
// 使用withDefaults设置默认值，注意使用函数来返回对象或数组
// 因为使用工厂函数可以保证每次这种默认值都是新建的，防止共享内存地址导致污染
withDefaults(defineProps<{personList:Persons}>(), {
  personList: () => [{'id': "0", 'name': '测试', age: 0}]
})

</script>

<template>
  <div class="person">
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }} -- {{ person.age }}</li>
    </ul>
  </div>
</template>

<style scoped>
button {
  margin: 0 5px;
}

div {
  background-color: lightblue;
  border-radius: 10px;
  padding: 20px;
}
</style>
