<script setup lang="ts">
import { reactive, ref } from 'vue'
import Category from '@/pages/08_slot/Category.vue'

let games = reactive([
  { id: 1, name: 'Arcaea' },
  { id: 2, name: 'SDVX' },
  { id: 3, name: 'MaiMai' },
  { id: 4, name: 'Chunithm' },
])
let img_url = ref('https://z1.ax1x.com/2023/11/19/piNxLo4.jpg')
let video_url = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')
</script>

<template>
  <div class="father">
    <h3>父组件</h3>
    <div class="content">
      <Category title="热门游戏列表">
        <li v-for="game in games" :key="game.id">
          {{game.name}}
        </li>
      </Category>
      <Category title="今日美食城市">
        <img :src="img_url" alt="今日美食">
      </Category>
      <Category title="今日影视推荐">
        <video :src="video_url" controls></video>
      </Category>
    </div>
  </div>
</template>

<style scoped>
.father {
  background-color: rgb(165, 164, 164);
  padding: 20px;
  border-radius: 10px;
}

.content {
  display: flex;
  justify-content: space-evenly;
}
img, video {
  width: 100%;
}
</style>
