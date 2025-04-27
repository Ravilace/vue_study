<script setup lang="ts">

</script>

<template>
  <div class="head"><h2>Vue3组件通信练习</h2></div>
  <hr>
  <div class="row">
    <div>
      <!--导航区-->
    <router-link acive-class="active" to="/props">props</router-link>
    </div>
  </div>
  <div class="panel-body">
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>