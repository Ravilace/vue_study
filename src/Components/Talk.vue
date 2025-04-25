<script setup lang="ts">
  import {useTalkStore} from "@/store/talk.ts";
  import {storeToRefs} from "pinia";
  let {talkList} = storeToRefs(useTalkStore())
  function getTalk() {
    useTalkStore().getTalk()
  }
</script>

<template>
  <div class="talk">
    <button @click="getTalk">获取一句话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">
        {{ talk.title}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
