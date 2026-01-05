<template>
  <div class="footer">
    <div class="container">
      <div class="nav-list">
        <div class="nav-title">
          <p>导航</p>
        </div>
        <div class="nav-item">
          <router-link to="/home">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/blog">博客</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/snippet">片段</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/about">关于</router-link>
        </div>
        <div class="nav-item">
          <router-link to="/home">站点地图</router-link>
        </div>
      </div>
      <div class="nav-list">
        <div class="nav-title">
          <p>统计</p>
        </div>
        <div class="nav-item">
          <p>今日222次浏览</p>
        </div>
        <div class="nav-item">
          <p>今日4人访问</p>
        </div>
        <div class="nav-item">
          <p>总24,802次浏览(PV)</p>
        </div>
        <div class="nav-item">
          <p>总6663人访问(UV)</p>
        </div>
      </div>
    </div>
    <div class="copy-right">
      <div class="tag">
        <v-img :width="20" src="https://fuxiaochen.com/images/gongan.png"></v-img>
      </div>
      <p>湘ICP备2024058706号-1</p>
      <p>© 2024 张瑞 · 努力做一个更好的程序员</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.footer {
  padding-top: 100px;
  padding-bottom: 20px;
  .container {
    @include flex-primary;
    justify-content: flex-start;
    align-items: flex-start;
    .nav-list {
      margin-right: 300px;
      .nav-title {
        font-size: 22px;
        color: var(--color);
      }
      .nav-item {
        margin-top: 10px;
        font-size: 16px;
        color: var(--sub-color);
      }
    }
  }
  .copy-right {
    margin-top: 150px;
    font-size: 14px;
    color: var(--sub-color);
    @include flex-center;
    > p {
      margin: 0 10px;
    }
  }
}
</style>
