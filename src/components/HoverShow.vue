<template>
  <div @mousemove="show" class="hover-show">
    <div class="hover-show-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['position', 'isShow'])

watch(
  () => props.isShow,
  (nv) => {
    v.value = nv ? 'block' : 'none'
  }
)

const v = ref('none')
function show() {
  v.value = 'block'
}
</script>

<style lang="scss" scoped>
.hover-show {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -120%);
  width: 200px;
  height: 200px;
  background: #fff;
  display: v-bind(v);
  .hover-show-content {
    width: 100%;
    height: 100%;
    padding: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--border-color);
    &::after {
      content: '';
      width: 20px;
      height: 20px;
      background: #fff;
      position: absolute;
      left: 50%;
      bottom: -7%;
      z-index: -1;
      transform: rotate(45deg) translateX(-50%);
      z-index: 99999;
    }
  }
}
</style>
