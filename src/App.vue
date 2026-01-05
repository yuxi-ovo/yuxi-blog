<template>
  <Header v-if="!isShow"></Header>
  <router-view></router-view>
  <Footer v-if="!isShow"></Footer>
</template>
<script setup lang="ts">
import { useMainStore } from './stores/main'
const mainStore = useMainStore()

const isShow = ref(mainStore.isRenderPage)

watch(
  () => mainStore.isRenderPage,
  () => {
    console.log(mainStore.isRenderPage)
  }
)
</script>
<style scoped></style>
