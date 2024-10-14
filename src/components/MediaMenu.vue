<template>
  <div class="media-menu">
    <div class="content">
      <div class="header">
        <div class="title">
          <div class="logo">
            <img src="../assets/logo.jpg" alt="" />
          </div>
          <div class="text">
            <p>张瑞</p>
          </div>
        </div>
        <div @click="close" class="close">
          <v-icon :size="20" icon="mdi-close"></v-icon>
        </div>
      </div>
      <div class="subtitle">
        <p>努力做一个更好的程序员</p>
      </div>
      <div @click="jump" class="menu-list">
        <div class="menu-item" :class="{ active: p === '/home' }">
          <router-link to="/home">首页</router-link>
        </div>
        <div class="menu-item" :class="{ active: p === '/blog' }">
          <router-link to="/blog">博客</router-link>
        </div>
        <div class="menu-item" :class="{ active: p === '/snippet' }">
          <router-link to="/snippet">片段</router-link>
        </div>
        <div class="menu-item" :class="{ active: p === '/about' }">
          <router-link to="/about">关于</router-link>
        </div>
        <div class="menu-item" :class="{ active: p === '/courseTool' }">
          <router-link to="/courseTool">CourseTool</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])
const close = () => emit('close')
const route = useRoute()
const p = ref('')
function jump() {
  emit('close')
}

watch(
  () => route.path,
  () => {
    console.log(route.path)
    p.value = route.path
  }
)
</script>

<style lang="scss" scoped>
.media-menu {
  width: 70vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99999;
  border-radius: 0 !important;
  border: 1px solid #2c2c2c;
  background: var(--background);
  transition: opacity 0.3s ease-in;
  .content {
    padding: 30px;
    position: relative;
    border-radius: 0;
    .header {
      @include flex-center;
      flex-direction: row;
      .title {
        @include flex-primary;
        .logo {
          width: 50px;
          height: 50px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
        }
        .text {
          font-size: 4vw;
          margin-left: 10px;
        }
      }
      .close {
        position: absolute;
        right: 10px;
        top: 10px;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        padding: 7px;
        cursor: pointer;
        @include Hover-Primary(opacity, 0.8);
        .icon {
          height: 20px;
          @include flex-center;
        }
      }
    }
    .subtitle {
      text-align: center;
      margin-top: 10px;
      font-size: 4vw;
      color: var(--sub-color);
    }
    .menu-list {
      margin-top: 20px;
      .menu-item {
        padding: 10px 20px;
        margin: 10px 0;
        border-radius: 15px;
        color: var(--color);
        font-size: 4vw;
        font-weight: bold;
        cursor: pointer;
        @include Hover-Primary(background, var(--courseTool-card-bg));
      }
      .active {
        background: var(--color) !important;
        color: var(--background) !important;
      }
    }
  }
}
</style>
