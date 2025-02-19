<template>
  <v-overlay location-strategy="connected" scroll-strategy="block" v-model="isOverlay"></v-overlay>
  <div class="header">
    <transition>
      <media-menu @close="closeMediaMenu" v-show="isShowMediaMenu"></media-menu>
    </transition>
    <div class="container">
      <div @click="showMediaMenu" class="media-menu-icon">
        <div class="icon">
          <v-icon :size="20" icon="mdi-menu" />
        </div>
      </div>
      <div class="left">
        <div class="logo">
          <img src="../assets/logo.jpg" alt="" />
        </div>
        <div class="title gsap-header-title">
          <p>张瑞</p>
        </div>
      </div>
      <div class="right">
        <div class="nav-list">
          <div class="nav-item gsap-header-1" :class="{ selected: path === '/home' }">
            <router-link to="/home">首页</router-link>
          </div>
          <div class="nav-item gsap-header-2" :class="{ selected: path === '/blog' }">
            <router-link to="/blog">博客</router-link>
          </div>
          <div class="nav-item gsap-header-3" :class="{ selected: path === '/snippet' }">
            <router-link to="/snippet">片段</router-link>
          </div>
          <div class="nav-item gsap-header-4" :class="{ selected: path === '/about' }">
            <router-link to="/about">关于</router-link>
          </div>
          <div class="nav-item gsap-header-4" :class="{ selected: path === '/courseTool' }">
            <router-link to="/courseTool">courseTool</router-link>
          </div>
        </div>
        <div class="fn">
          <div class="theme">
            <v-icon icon="mdi-send" />
          </div>
          <div @click="useJumpGithub" class="github">
            <v-icon icon="mdi-github" />
          </div>
          <div @click="switchTheme" class="setting">
            <v-icon v-if="currentTheme === 'dark'" icon="mdi-brightness-2" />
            <v-icon v-else icon="mdi-brightness-7" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import batchAddAnimation from '@/hooks/batchAddAnimation'
import useSwitchTheme from '@/hooks/switchTheme'
import useRouteData from '@/hooks/useRouteData'
import t from 'gsap'
import { onMounted, ref } from 'vue'
import useJumpGithub from '@/hooks/useJumpGithub'

const currentTheme = ref()
const isOverlay = ref(false)
const isShowMediaMenu = ref(false)
const { path } = useRouteData()

function switchTheme() {
  currentTheme.value = useSwitchTheme()
}

function showMediaMenu() {
  isOverlay.value = true
  isShowMediaMenu.value = true
}
function closeMediaMenu() {
  isShowMediaMenu.value = false
  isOverlay.value = false
}

onMounted(() => {
  batchAddAnimation(
    [
      '.logo',
      '.gsap-header-title',
      '.gsap-header-1',
      '.gsap-header-2',
      '.gsap-header-3',
      '.gsap-header-4',
      '.theme',
      '.github',
      '.setting'
    ],
    (el, index) => {
      t.fromTo(
        el,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          delay: index * 0.3,
          ease: 'power1.inOut'
        }
      )
    }
  )
})
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: transform 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-70vw);
}
.header {
  background: transparent;
  .container {
    @include flex-primary;
    justify-content: space-between;
    padding: 10px 0;
    .media-menu-icon {
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 5px;
      cursor: pointer;
      @include Hover-Primary(opacity, 0.8);
      .icon {
        height: 20px;
        @include flex-center;
      }
    }
    .left {
      display: flex;
      align-items: center;
      .logo {
        width: 50px;
        height: 50px;
        border-radius: 20px;
        overflow: hidden;
        cursor: pointer;
      }
      .title {
        font-size: 18px;
        color: var(--color);
        margin-left: 10px;
        cursor: pointer;
        @include Hover-Primary(text-decoration, underline);
      }
    }
    .right {
      @include flex-primary;
      .nav-list {
        @include flex-primary;
        .nav-item {
          margin: 0 15px;
          font-size: $main-font-size;
          color: var(--sub-color);
          @include Hover-Primary(color, var(--color));
          @include Hover-Primary(text-decoration, underline);
        }
        .selected {
          color: var(--color);
        }
      }
      .fn {
        @include flex-primary;
        > div {
          width: 33px;
          height: 33px;
          border-radius: 10px;
          border: 1px solid var(--border-color);
          cursor: pointer;
          @include flex-center;
          margin-left: 20px;
          color: var(--color);
          font-size: 12px;
          @include Hover-Primary(border-color, var(--color));
        }
      }
    }
  }
}
</style>
