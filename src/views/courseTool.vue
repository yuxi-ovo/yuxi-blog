<template>
  <div class="course-tool">
    <div class="banner">
      <FallingStarsBg style="background: var(--background)" :count="50" />
      <div class="container">
        <div class="inner gsap-courseTool-5"></div>
        <div class="logo">
          <img src="../assets/logo.jpg" alt="" />
        </div>
        <div class="title gsap-courseTool-1">
          <p>CourseTool</p>
        </div>
        <div class="sub-title gsap-courseTool-2">
          <p>一个查课微信小程序</p>
        </div>
        <div class="introduce gsap-courseTool-3">
          <p>方便快捷的查询你的课表</p>
        </div>
        <div class="bth-list gsap-courseTool-4">
          <div class="experience" @mousemove="showERcode = true" @mouseleave="showERcode = false">
            <p>即刻体验</p>
            <hover-show :isShow="showERcode">
              <template #default>
                <img src="../assets/ercode.jpg" alt="" />
              </template>
            </hover-show>
          </div>
          <div class="introduce">
            <p>介绍</p>
          </div>
        </div>
      </div>
    </div>
    <div class="trait">
      <div class="container">
        <div class="trait-item">
          <div class="icon">
            <my-icon width="40px" icon="uniApp"></my-icon>
            <p>基于uni-app</p>
          </div>
          <div class="text">
            <p>享受uni-app带来的极致多端开发体验</p>
          </div>
        </div>
        <div class="trait-item">
          <div class="icon">
            <span>⚡</span>
            <p>极速启动</p>
          </div>
          <div class="text">
            <p>微信小程序无需下载即可方便快捷的启动</p>
          </div>
        </div>
        <div class="trait-item">
          <div class="icon">
            <span>🗂</span>
            <p>功能齐全</p>
          </div>
          <div class="text">
            <p>有多种查课方式以及持续更新的扩展功能</p>
          </div>
        </div>
        <div class="trait-item">
          <div class="icon">
            <span>✅</span>
            <p>完全免费</p>
          </div>
          <div class="text">
            <p>免费使用、免费使用、免费使用 !</p>
          </div>
        </div>
        <div class="trait-item">
          <div class="icon">
            <span>🧑‍🎓</span>
            <p>校内学生开发</p>
          </div>
          <div class="text">
            <p>能够更好的优化使用体验,开发新功能</p>
          </div>
        </div>
        <div class="trait-item">
          <div class="icon">
            <span>🎨</span>
            <p>易于扩展</p>
          </div>
          <div class="text">
            <p>前后端分离开发,uni-app+nest规范开发</p>
          </div>
        </div>
      </div>
    </div>
    <div class="develop">
      <div class="title">
        <p>发展历程</p>
      </div>
      <div class="subtitle">
        <p>经历4个多月,开发总耗时2个多月(除去寒暑假)</p>
      </div>
      <v-timeline align="center" fill-dot>
        <v-timeline-item v-for="(item, i) in items" :key="i" :dot-color="item.color">
          <template v-slot:opposite>
            <div class="pt-1 headline font-weight-bold" v-text="`${item.time}`"></div>
          </template>
          <v-card>
            <v-card-title :class="['text-h6', `bg-${item.color}`]"> {{ item.title }} </v-card-title>
            <v-card-text class="bg-white">
              <p>{{ item.introduce }}</p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
    <div class="developer">
      <div class="title">
        <p>CourseTool 作者</p>
      </div>
      <div class="container">
        <CardContainer>
          <CardBody
            class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 sm:w-[30rem] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] cursor-pointer"
          >
            <CardItem :translate-z="50" class="text-2xl font-bold text-black"> 张瑞 </CardItem>
            <CardItem as="p" translate-z="60" class="mt-2 max-w-sm text-m text-black">
              Hover over this card to unleash the power of CSS perspective
            </CardItem>
            <CardItem :translate-z="100" class="h-20h mt-4 w-full flex justify-center">
              <img
                src="../assets/logo.jpg"
                class="rounded-full object-cover group-hover/card:shadow-xl"
                style="width: 220px; height: 220px"
                alt="thumbnail"
              />
            </CardItem>
            <div class="mt-10 flex items-center justify-end">
              <CardItem
                :translate-z="20"
                as="button"
                class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
              >
                Get Started
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import batchAddAnimation from '@/hooks/useBatchAddAnimation'
import { useCurrentTheme } from '@/hooks/useSwitchTheme'
import t from 'gsap'

const items = [
  {
    color: 'red-lighten-2',
    icon: 'mdi-star',
    title: '开始制作',
    time: '2024年4月2日',
    introduce: '通过python爬虫爬取数据，使用nodejs进行数据处理,最终做出一个CourseTool小程序最初版'
  },
  {
    color: 'purple-lighten-2',
    icon: 'mdi-book-variant',
    title: '正式上线第一个版本',
    time: '2024年4月12日',
    introduce: '课程表查询小程序，基于uni-app开发，后端node+express,数据库mysql'
  },
  {
    color: 'green-lighten-1',
    icon: 'mdi-airballoon',
    title: '4月份数据',
    time: '2024年4月30日',
    introduce: '总计用户4322人,日最高访问量2476,日最高访问页数22735'
  },
  {
    color: 'blue-lighten-1',
    icon: 'mdi-airballoon',
    title: '5月份数据',
    time: '2024年4月30日',
    introduce: '总计用户6530日最高访问页面数量34210最高日访问人数4329'
  },
  {
    color: 'pink-lighten-2',
    icon: 'mdi-layers-triple',
    title: '6月份数据',
    time: '2024年6月30日',
    introduce: '总计用户数 8675日最高访问页面数量39201最高日访问人数6271'
  },
  {
    color: 'indigo-lighten-2',
    icon: 'mdi-layers-triple',
    title: '9月份数据',
    time: '2024年9月13日',
    introduce: '总计用户数 10278日最高访问页面数量58060最高日访问人数3068'
  },
  {
    color: 'brown-lighten-1',
    icon: 'mdi-layers-triple',
    title: '10月份数据',
    time: '2024年10月12日',
    introduce: '总计用户数 1.4w日最高访问页面数量14.69w最高日访问人数9027'
  }
]
const showERcode = ref(false)
const bugConList = [
  {
    pic: 'https://zrovo.oss-cn-beijing.aliyuncs.com/my-web-blog/Snipaste_2024-10-11_11-08-50.png',
    name: '吴宇飞'
  },

  {
    pic: 'https://zrovo.oss-cn-beijing.aliyuncs.com/my-web-blog/Snipaste_2024-10-11_11-14-33.png',
    name: '冯文韬'
  },
  {
    pic: 'https://zrovo.oss-cn-beijing.aliyuncs.com/my-web-blog/WechatIMG106649.jpg',
    name: '周慧'
  },

  {
    pic: 'https://zrovo.oss-cn-beijing.aliyuncs.com/my-web-blog/Snipaste_2024-10-11_11-08-33.png',
    name: '阳成'
  },
  {
    name: '王樱'
  },
  {
    name: '李锡辉'
  }
]
const currentTheme = ref(useCurrentTheme())
const isShowBg = ref('block')

watch(currentTheme, () => {
  isShowBg.value = currentTheme.value === 'dark' ? 'block' : 'none'
})
onMounted(() => {
  const gsapList = [
    '.gsap-courseTool-1',
    '.gsap-courseTool-2',
    '.gsap-courseTool-3',
    '.gsap-courseTool-4',
    '.gsap-courseTool-5'
  ]
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
:deep(.v-timeline--vertical.v-timeline .v-timeline-item .v-timeline-item__body) {
  width: 40vw !important;
}
:deep(.v-card-title) {
  padding: 10px;
  text-align: center;
}
.course-tool {
  .banner {
    width: 100vw;
    min-height: 100vh;
    padding-top: 80px;
    position: relative;
    z-index: 1;
    &::after {
      display: v-bind(isShowBg);
      position: absolute;
      z-index: -1;
      inset: 0;
      width: 100vw;
      height: 100vh;
      background: url('https://zrovo.oss-cn-beijing.aliyuncs.com/my-web-blog/bg.png') no-repeat;
      background-size: cover;
      background-attachment: fixed;
      opacity: 0;
      animation: bgShow 1s ease-in-out 1.5s forwards;
    }
    @keyframes bgShow {
      to {
        opacity: 0.5;
      }
    }
    .container {
      @include flex-center;
      flex-direction: column;
      position: relative;
      .inner {
        position: absolute;
        top: 18%;
        left: 50%;
        border-radius: 50%;
        width: 192px;
        height: 192px;
        background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
        filter: blur(72px);
        transform: translate(-50%, -50%);
      }
      .logo {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        z-index: 1;
      }
      .title {
        font-size: 4vw;
        letter-spacing: 1px;
        background-color: #00dbde;
        background-image: linear-gradient(90deg, #00dbde 0%, #fc00ff 100%);
        background-clip: text;
        color: transparent;
      }
      .sub-title {
        font-size: 4vw;
        margin: 10px 0;
        word-break: keep-all;
      }
      .introduce {
        font-size: 2vw;
        color: var(--sub-color);
      }
      .bth-list {
        margin-top: 30px;
        @include flex-primary;
        > div {
          width: 7vw;
          height: 6vh;
          min-width: 120px;
          min-height: 50px;
          border-radius: 20px;
          @include flex-center;
          font-size: 16px;
          cursor: pointer;
        }
        .experience {
          background-image: linear-gradient(90deg, #00dbde 25%, #fc00ff 100%);
          background-clip: text;
          color: transparent;
          border: 1px solid var(--color);
          position: relative;
        }
        .introduce {
          border: 1px solid transparent;
          border-radius: 20px;
          background-clip: padding-box, border-box;
          background-origin: padding-box, border-box;
          background-image:
            linear-gradient(to right, var(--background), var(--background)),
            linear-gradient(90deg, #00dbde 25%, #fc00ff 100%);
          color: var(--color);
          margin-left: 40px;
          @include Hover-Primary(opacity, 0.8);
        }
      }
    }
  }
  .trait {
    padding: 70px 0;
    .container {
      @include flex-primary;
      flex-wrap: wrap;
      .trait-item {
        width: 32%;
        height: 180px;
        padding: 30px 20px;
        background: var(--courseTool-card-bg);
        border-radius: 20px;
        border: 2px solid transparent;
        @include Hover-Primary(border-color, var(--main-color));
        &:nth-child(n + 4) {
          margin-top: 20px;
        }
        .icon {
          width: 100%;
          @include flex-center;
          flex-direction: column;
          span {
            font-size: 26px;
          }
          p {
            font-size: 16px;
            color: var(--color);
            margin-top: 10px;
          }
        }
        .text {
          font-size: 15px;
          color: var(--sub-color);
          margin-top: 20px;
        }
      }
    }
  }
  .develop {
    width: 80vw;
    margin: 0 auto;
    @include flex-center;
    flex-direction: column;
    :deep(.v-timeline-divider__after) {
      background: var(--color);
    }
    :deep(.v-timeline-divider__before) {
      background: var(--color);
    }
    :deep(.v-card-text) {
      padding: 15px;
      font-size: 18px;
    }
    .title {
      text-align: center;
      font-size: 48px;
      color: var(--color);
    }
    .subtitle {
      margin-top: 10px;
      margin-bottom: 50px;
      text-align: center;
      color: var(--sub-color);
      font-size: 24px;
    }
  }
  .developer {
    margin: 100px 0;
    .title {
      text-align: center;
      font-size: 48px;
    }
    .container {
      margin-top: 20px;
      @include flex-center;
      .developer-item {
        flex-basis: 24%;
        @include flex-center;
        flex-direction: column;
        .pic {
          border-radius: 50%;
          overflow: hidden;
          cursor: pointer;
          @include Hover-Primary(scale, 1.1);
        }
        .name {
          font-size: 30px;
          color: var(--color);
          padding: 20px 0;
          text-align: center;
        }
      }
    }
    .develop-con,
    .bug-con {
      .title {
        font-size: 30px;
      }
      .container {
        margin-top: 20px;
        @include flex-center;
        .developer-item {
          flex-basis: 20%;
          @include flex-center;
          flex-direction: column;
          .pic {
            border-radius: 50%;
            overflow: hidden;
          }
          .text {
            width: 45px;
            height: 45px;
            background: #fff;
            border-radius: 50%;
            color: #000;
            text-align: center;
            line-height: 45px;
          }
          .name {
            font-size: 26px;
            color: var(--color);
            padding: 20px 0;
            text-align: center;
          }
        }
      }
    }
    .bug-con {
      .container {
        justify-content: flex-start;
        .developer-item {
          flex-direction: row;
          width: fit-content;
          flex-basis: inherit;
          padding: 0 20px;
          .pic {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--color);
            color: var(--background);
            @include flex-center;
          }
          .name {
            font-size: 20px;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>
