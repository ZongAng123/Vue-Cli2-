<template>
  <div>
    <p>我是A页面</p>
    <router-link to="/">转向上一页面</router-link>
    <router-link to="/Manage">转向Manage页面</router-link>
    <!-- 挂载路由  父一级添加-->
    <router-view></router-view>

  </div>
</template>

<script>
</script>

<style>
</style>
