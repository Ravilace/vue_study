<script setup lang="ts">
</script>

<template>
  <div class="head"><h2>Vue3组件通信练习</h2></div>
  <hr />
  <div class="content">
    <div class="navigation">
      <router-link active-class="active" class="list-group-item" to="/props">1.props</router-link>
      <router-link active-class="active" class="list-group-item" to="/event">2.event</router-link>
      <router-link active-class="active" class="list-group-item" to="/mitt">3.mitt</router-link>
      <router-link active-class="active" class="list-group-item" to="/v_model">4.v-model</router-link>
      <router-link active-class="active" class="list-group-item" to="/attrs">5.attrs</router-link>
      <router-link active-class="active" class="list-group-item" to="/refs_and_parent">6.$refs and $parent</router-link>
      <router-link active-class="active" class="list-group-item" to="/provide_and_inject">7.provide and inject</router-link>
      <router-link active-class="active" class="list-group-item" to="/slots">8.slots</router-link>
    </div>
    <div class="panel-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  gap: 16px; /* 控制左右之间的距离 */
}

.navigation {
  flex: 0 0 200px; /* 固定宽度，避免过宽 */
  display: flex;
  flex-direction: column;
  gap: 8px; /* 导航项之间的间距 */
}

.panel-body {
  flex: 1; /* 自动扩展占据剩余空间 */
  padding: 16px;
  background-color: #f8f9fa; /* 可选：背景颜色区分主体内容 */
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
