interface ThemeMap {
  [key: string]: string
  light: string
  dark: string
  system: string
}

let currentTheme = ref('dark')

export default function useSwitchTheme() {
  const html = document.querySelector('html') as HTMLElement

  if (currentTheme.value === 'dark') {
    html.setAttribute('data-theme', currentTheme.toString())
    currentTheme.value = 'light'
    document.documentElement.style.setProperty('--background', '#fff')
    document.documentElement.style.setProperty('--color', '#000')
    document.documentElement.style.setProperty('--sub-color', '#737373')
    document.documentElement.style.setProperty('--border-color', '#e5e5e5')
    document.documentElement.style.setProperty('--snippet-hover-color', '#f5f5f5')
    document.documentElement.style.setProperty('--courseTool-card-bg', '#f5f5f5')
  } else {
    currentTheme.value = 'dark'
    html.setAttribute('data-theme', currentTheme.toString())
    document.documentElement.style.setProperty('--background', '#000')
    document.documentElement.style.setProperty('--color', '#fff')
    document.documentElement.style.setProperty('--sub-color', '#a3a3a3')
    document.documentElement.style.setProperty('--border-color', 'rgba(255, 255, 255, 0.2)')
    document.documentElement.style.setProperty('--snippet-hover-color', '#171717')
    document.documentElement.style.setProperty('--courseTool-card-bg', '#2a2e36')
  }
  return currentTheme
}

export const useCurrentTheme = () => toRef(currentTheme)
