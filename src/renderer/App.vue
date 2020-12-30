<template>
  <div id="app">
    <div class="menu">
      <router-link class="menu-item" to="/test">Go to testPage</router-link>
      <router-link class="menu-item" to="/detail">Go to detailPage</router-link>
    </div>
    <div class="content"><router-view></router-view></div>
  </div>
</template>

<script>
  export default {
    name: 'electron-vue-test'
  }
</script>

<style>
  /* CSS */
  .menu {
    position: fixed;
    left: 0;
    width: 120px;
    top: 0;
    bottom: 0;
    background: cornflowerblue;
  }
  .menu-item {
    display: block;
    text-decoration: none;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .menu-item-active {
    background: #fefefe56;
    color: #ffffff;
  }
  .content {
    position: relative;
    left: 120px;
  }
</style>
