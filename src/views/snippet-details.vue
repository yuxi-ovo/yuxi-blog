<template>
  <div class="snippet-details">
    <div class="container">
      <div class="inner" v-html="v"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MarkDownIt from '@/utils/markdownIt'

const v = ref('')
const route = useRoute()
onMounted(async () => {
  const { id } = route.query
  let { default: markdownV } = await import(`@/assets/markdown/${id}.md?raw`)
  v.value = MarkDownIt.render(markdownV)
})
</script>

<style lang="scss" scoped>
:deep(.vuepress-markdown-body) {
  background: transparent;
}
:deep(p, h1, h2, h3, h4, h5, h6) {
  margin: 10px 0;
}
.snippet-details {
  .container {
    width: 60vw;
    margin-top: 50px;
  }
}
</style>
