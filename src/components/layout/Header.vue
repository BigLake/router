<template>
  <header class="border-b px-6 py-4 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between">
      <!-- 面包屑导航 -->
      <div class="flex items-center space-x-4">
        <span class="text-gray-600 dark:text-gray-300">首页</span>
        <span class="text-gray-400 dark:text-gray-500">/</span>
        <span class="text-gray-600 dark:text-gray-300">控制台</span>
      </div>
      
      <!-- 右侧操作区 -->
      <div class="flex items-center space-x-4">
        <button class="p-2 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
          🔔
        </button>
        
        <!-- 主题切换按钮 -->
        <button 
          @click="themeStore.toggleTheme"
          class="p-2 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
        >
          {{ themeStore.isDarkMode ? '☀️' : '🌙' }}
        </button>
        
        <button class="p-2 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300">
          🌐
        </button>
        
        <button 
          @click="appStore.toggleQuickStart"
          class="p-2 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
        >
          使用指南
        </button>
        
        <!-- 用户信息 -->
        <UserDropdown />
      </div>
    </div>
  </header>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme'
import { useAppStore } from '@/stores/app'
import UserDropdown from '@/components/common/UserDropdown.vue'

const themeStore = useThemeStore()
const appStore = useAppStore()
</script>
