import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// 自动导入vue组件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import MotionResolver from 'motion-v/resolver'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vuetify(),
    tailwindcss(),
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/auto-imports.d.ts'
    }),
    Components({
      dts: true,
      resolvers: [MotionResolver()]
    })
    // visualizer({
    //   open: true, // 打包完成后自动在浏览器打开分析报告
    //   filename: 'stats.html', // 生成的分析文件名称
    //   gzipSize: true, // 展示 gzip 压缩后的大小
    //   brotliSize: true // 展示 brotli 压缩后的大小
    // })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/assets/main.scss";'
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-vue': ['vue', 'vue-router', 'pinia', 'vuetify'],
          'vendor-utils': ['highlight.js', 'gsap']
        }
      }
    }
  }
})
