<template>
  <div class="full-screen-loading">
    <div class="loading-spinner">
      <div class="spinner"></div>
      <p class="loading-text">页面加载中...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { useMainStore } from '@/stores/main'
import router from '@/router'

const mainStore = useMainStore()
onMounted(() => {
  const finishLoading = () => {
    mainStore.setIsRenderPage(true)
    router.push('/home')
    window.removeEventListener('load', finishLoading)
  }

  window.addEventListener('load', finishLoading)
})
</script>

<style scoped>
.full-screen-loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-spinner {
  text-align: center;
}

.spinner {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #007bff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

.loading-text {
  font-size: 24px;
  color: #000;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
