<script setup lang="ts">
  import useSum from "@/hooks/useSum.ts";
  import useDog from "@/hooks/useDog.ts";

  const {sum, changeSum, bigSum} = useSum()
  const {dogList, getDog} = useDog()
</script>

<template>
  <div class="person">
    <h2>当前求和为 {{ sum }}，放大10倍后为{{ bigSum}}</h2>
    <button @click="changeSum">点我Sum+1</button>
    <hr />
    <img v-for="(dog, index) in dogList" :src="dog" :key="index" alt=""/>
    <hr />
    <button @click="getDog">再来一只小狗</button>
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

img {
  height: 100px;
  margin-right: 10px;
}
</style>
