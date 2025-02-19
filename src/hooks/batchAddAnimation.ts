export default function batchAddAnimation(
  elList: string[] | string,
  callback: (el: string, index: number) => void
) {
  if (Array.isArray(elList)) {
    elList.forEach((el, index) => {
      callback(el, index)
    })
  }
}
