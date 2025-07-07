import { defineStore } from "pinia"
import { ref, watch } from "vue"

export const useThemeStore = defineStore("theme", () => {
  const isDarkMode = ref(false)

  // 初始化主题
  const initTheme = () => {
    const savedTheme = localStorage.getItem("darkMode")
    if (savedTheme) {
      isDarkMode.value = savedTheme === "true"
    } else {
      isDarkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches
    }
    updateDocumentClass()
  }

  // 切换主题
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
  }

  // 更新文档类名
  const updateDocumentClass = () => {
    if (isDarkMode.value) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  // 监听主题变化并保存到localStorage
  watch(isDarkMode, (newValue) => {
    localStorage.setItem("darkMode", newValue.toString())
    updateDocumentClass()
  })

  return {
    isDarkMode,
    toggleTheme,
    initTheme,
  }
})
