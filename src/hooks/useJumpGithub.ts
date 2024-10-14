export default function useJumpGithub() {
  const a = document.createElement('a')
  a.href = 'https://github.com/yuxi-ovo'
  a.target = '_blank'
  a.click()
  a.remove()
}
