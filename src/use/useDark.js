import { ref } from 'vue'

const LOCAL_STORAGE_KEY = 'appearance'
const theme = {
  dark: 'dark',
  light: 'light',
  auto: 'auto',
}

function savedTheme() {
  const savedValue = localStorage.getItem(LOCAL_STORAGE_KEY)

  switch (savedValue) {
    case theme.dark:
      return theme.dark
    case theme.light:
      return theme.light
    default:
      return theme.auto
  }
}

function isThemeSaved() {
  const savedValue = savedTheme()

  return savedValue === theme.light || savedValue === theme.dark
}

function setStorageDarkMode(isDarkMode) {
  const value = isDarkMode ? theme.dark : theme.light

  return localStorage.setItem(LOCAL_STORAGE_KEY, value)
}

function toggleDarkClass(isDark) {
  document.documentElement.setAttribute('data-appearance', isDark ? 'dark' : 'light')
}

const setToDark = isThemeSaved()
  ? savedTheme() === theme.dark
  : !!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
const isDarkMode = ref(setToDark)

toggleDarkClass(setToDark)

export default function useDark() {
  function setDarkMode(value) {
    const isDark = !!value

    setStorageDarkMode(isDark)
    isDarkMode.value = isDark
    toggleDarkClass(isDark)
  }

  return { isDarkMode, setDarkMode }
}
