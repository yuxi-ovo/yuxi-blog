<template>
  <div class="banner">
    <div class="container">
      <div class="text">
        <p class="gsap-1">你好,我是</p>
        <p class="gsap-2">张瑞</p>
        <span class="gsap-3 typed"> </span>
        <p class="gsap-4">
          喜欢<span class="vue">Vue</span>、<span class="javascript">JavaScript</span>、<span
            class="ts"
            >TypeScript</span
          >
        </p>
        <p class="subtitle gsap-5">我在这个网站记录我的成长,努力💪成为一个更好的程序员</p>
      </div>
      <div class="bth-list gsap-6">
        <div class="my-blog">
          <router-link to="/blog">我的博客</router-link>
        </div>
        <div class="about-my">
          <router-link to="/about">关于我</router-link>
        </div>
      </div>
      <div class="contact gsap-7">
        <div class="contact-item">
          <span class="github"></span>
        </div>
        <div class="contact-item">
          <img src="../../public/icon/csdn.svg" />
        </div>
        <div class="contact-item">
          <img src="../../public/icon/Bilibili.png" />
        </div>
        <div class="contact-item">
          <img src="../../public/icon/微信.png" />
        </div>
        <div class="contact-item">
          <img src="../../public/icon/QQ.svg" />
        </div>
        <div class="contact-item">
          <img src="../../public/icon/juejin.png" />
        </div>
      </div>
    </div>
  </div>
  <div class="mouse gsap-8">
    <div class="inner"></div>
    <div class="arrow"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import batchAddAnimation from '@/hooks/batchAddAnimation'
import t from 'gsap'
import typed from 'typed.js'

onMounted(() => {
  const gsapList = [
    '.gsap-1',
    '.gsap-2',
    '.gsap-3',
    '.gsap-4',
    '.gsap-5',
    '.gsap-6',
    '.gsap-7',
    '.gsap-8'
  ]
  batchAddAnimation(gsapList, (el, index) => {
    t.from(el, {
      opacity: 0,
      y: 100,
      delay: index * 0.5,
      duration: 0.3
    })
  })
  var options = {
    strings: ['A Web &lt;Developer /&gt.', '一名前端开发工程师。'],
    backSpeed: 70,
    typeSpeed: 100,
    startDelay: 1200,
    loop: true
  }
  new typed('.typed', options)
  setTimeout(() => {
    const cursor = document.querySelector('.typed-cursor') as HTMLElement
    cursor.style.display = 'inline-block'
  }, 1500)
})
onBeforeUnmount(() => {
  const cursor = document.querySelector('.typed-cursor') as HTMLElement
  cursor.remove()
})
</script>

<style lang="scss" scoped>
.banner {
  width: 100vw;
  margin-top: 70px;
  @include flex-center;
  .container {
    width: 50vw;
    @include flex-center;
    flex-direction: column;
    align-items: flex-start;
    .text {
      line-height: 1.1;
      letter-spacing: 3px;
      font-size: 4vw;
      p:nth-child(2) {
        background-image: linear-gradient(160deg, #42d392 2%, #647eff 45%);
        background-clip: text;
        color: transparent;
        font-size: 6vw;
      }
      .typed {
        font-size: 2.6vw;
        height: 70px;
        white-space: nowrap;
      }
      :deep(.typed-cursor) {
        font-size: 60px;
        color: #647eff;
        display: none;
      }
      .gsap-4 {
        margin-left: -10px;
      }

      .vue {
        background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
        background-clip: text;
        color: transparent;
        font-size: 46px;
      }
      .javascript {
        background-color: #fbab7e;
        background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);

        background-clip: text;
        color: transparent;

        font-size: 46px;
      }
      .ts {
        background-image: linear-gradient(270deg, #0093e9 50%, #80d0c7 100%);
        background-clip: text;
        color: transparent;
        font-size: 46px;
      }
      p:last-child {
        font-size: 22px;
        color: #a3a3a3;
        margin-top: 5px;
      }
    }
    .bth-list {
      width: 100%;
      @include flex-primary;
      justify-content: flex-start;
      margin: 10px 0;
      margin-top: 20px;
      > div {
        font-size: 15px;
        padding: 5px 10px;
        border: 1px solid var(--border-color);
        color: var(--color);
        border-radius: 10px;
        @include Hover-Primary(border-color, var(--color));
        &:last-child {
          margin-left: 20px;
        }
      }
    }
    .contact {
      width: 100%;
      @include flex-primary;
      justify-content: flex-start;
      margin: 10px 0;
      > div {
        width: 40px;
        height: 40px;
        border: 1px solid var(--border-color);
        border-radius: 10px;
        margin-right: 20px;
        font-size: 14px;
        cursor: pointer;
        @include flex-center;
        @include Hover-Primary(border-color, var(--color));
        img {
          width: 23px;
          height: 23px;
        }
      }
      .github {
        width: 40px;
        height: 40px;
        mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512' width='496' height='512'%3E%3Cpath fill='black' d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8M97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2'/%3E%3C/svg%3E");
        mask-size: 23px 23px;
        mask-repeat: no-repeat;
        background: var(--color);
        mask-position: 50% 50%;
      }
    }
  }
}
.mouse {
  @include flex-center;
  width: 100%;
  padding: 60px 0;
  position: relative;
  .inner {
    width: 26px;
    height: 38px;
    border: 2px solid var(--color);
    border-radius: 9999px;
    opacity: 0.4;
  }
  .arrow {
    width: 2px;
    height: 10px;
    border-radius: 5px;
    background: var(--color);
    position: absolute;
    left: 50%;
    top: 43%;
    transform: translate(-50%, -50%);
    animation: mousedown 3s infinite ease;
    @keyframes mousedown {
      0% {
        top: 45%;
        opacity: 0.5;
      }
      50% {
        top: 47%;
        opacity: 0.9;
      }
      100% {
        top: 45%;
        opacity: 0.5;
      }
    }
  }
}
</style>
