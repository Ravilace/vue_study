<script setup lang="ts">
  import { ref } from 'vue'
  import Father from '@/pages/05_attrs/Father.vue'

  const a = ref(0)
  const b = ref(1)
  const c = ref(2)

  function updateA(value: number) {
    a.value += value
  }
</script>

<template>
  <div class="grandfather" >
    <h3>爷组件</h3>
    <h4>a: {{a}}, b: {{b}}, c: {{c}}, </h4>
    <Father :a="a" :b="b" :c="c" v-bind="{x: 3, y: 4}" :updateFunc="updateA"/>
  </div>
</template>

<style scoped>
.grandfather {
  background-color: mediumpurple;
  padding: 20px;
  border-radius: 10px;
}
</style>