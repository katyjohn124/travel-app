<template>
  <div id="app">
    <!-- <HomePage></HomePage> -->
    <!-- 用keepalive来保持页面性能优化 -->
    <keep-alive exclude="DetailPage">
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
// import HomePage from './pages/Home/HomePage.vue'


export default {
  name: 'App',
  components: {
    // HomePage,


  }
}
</script>

<style></style>
