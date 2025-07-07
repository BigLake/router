import { defineStore } from "pinia"
import { ref } from "vue"

export const useAppStore = defineStore("app", () => {
  const currentUser = ref({
    username: "github_10414",
    userId: "10414",
    userType: "普通用户",
    avatar: "G",
    balance: 549.97,
    consumed: 0.03,
    requests: 5,
  })

  const showQuickStart = ref(false)

  const toggleQuickStart = () => {
    showQuickStart.value = !showQuickStart.value
  }

  return {
    currentUser,
    showQuickStart,
    toggleQuickStart,
  }
})
