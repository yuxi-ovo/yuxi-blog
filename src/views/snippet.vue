<template>
  <div class="snippet">
    <div class="container">
      <div class="title">
        <p>最新片段</p>
      </div>
      <div class="snippet-list">
        <SnippetItem
          :class="genGSAPClass(i)"
          :data="d.data"
          v-for="(d, i) in snippetList"
        ></SnippetItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SnippetItem from '@/components/snippetItem/snippetItem'
import batchAddAnimation from '@/hooks/useBatchAddAnimation'
import t from 'gsap'

const snippetList = [
  {
    data: {
      tag: ['js', 'vue'],
      title: '节流的代码实现',
      subtitle: '在js中经常会用到的节流。',
      time: '08-01',
      year: '2024',
      id: '节流'
    }
  },
  {
    data: {
      tag: ['js', 'vue'],
      title: '防抖的代码实现',
      subtitle: '在js中经常会用到的防抖。',
      time: '08-01',
      year: '2024',
      id: '防抖'
    }
  }
]

const genGSAPClass = (i: number) => `gsap-snippet-item-${i}`

onMounted(() => {
  const gsapList = ['.gsap-snippet-item-0', '.gsap-snippet-item-1']
  batchAddAnimation(gsapList, (el, index) => {
    t.from(el, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      delay: index * 0.5
    })
  })
})
</script>

<style lang="scss" scoped>
.snippet {
  .title {
    margin-top: 50px;
    font-size: 40px;
  }
  .snippet-list {
    @include flex-primary;
    > div {
      flex-basis: 49%;
    }
  }
}
</style>
