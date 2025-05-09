<script setup lang="ts">
</script>

<template>
  <div class="head"><h2>Vue3组件通信练习</h2></div>
  <hr />
  <div class="row">
    <div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
      <!--导航区-->
      <router-link acive-class="active" class="list-group-item" to="/props">1.props</router-link>
      <router-link acive-class="active" class="list-group-item" to="/event">2.event</router-link>
      <router-link acive-class="active" class="list-group-item" to="/mitt">3.mitt</router-link>
      <router-link acive-class="active" class="list-group-item" to="/v_model">4.v-model</router-link>
      <router-link acive-class="active" class="list-group-item" to="/attrs">5.attrs</router-link>
      <router-link acive-class="active" class="list-group-item" to="/refs_and_parent">6.$refs and $parent</router-link>
      <router-link acive-class="active" class="list-group-item" to="/provide_and_inject">7.provide and inject</router-link>
    </div>
  </div>
  <div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
    <div class="panel-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
