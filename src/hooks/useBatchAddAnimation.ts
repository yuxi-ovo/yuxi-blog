import gsap from 'gsap'

export const GSAP_DEFAULT_CONFIG = {
  from: {
    opacity: 0,
    y: 100,
    delay: 0.5,
    duration: 0.3
  }
}

export default function batchAddAnimation(
  elList: string[] | string,
  callback?: (el: string, index: number) => void | null
) {
  if (typeof callback === 'function') {
    if (Array.isArray(elList)) {
      elList.forEach((el, index) => {
        callback(el, index)
      })
    } else {
      callback(elList, 0)
    }
  } else {
    if (Array.isArray(elList)) {
      elList.forEach((el, index) => {
        gsap.from(el, {
          ...GSAP_DEFAULT_CONFIG.from,
          delay: index * 0.5
        })
      })
    } else {
      gsap.from(elList, {
        ...GSAP_DEFAULT_CONFIG,
        delay: 0.5
      })
    }
  }
}
