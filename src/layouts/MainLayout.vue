<template>
  <div class="min-h-screen flex bg-gray-50 dark:bg-gray-900">
    <!-- 侧边栏 -->
    <Sidebar />
    
    <!-- 主内容区 -->
    <div class="flex-1">
      <!-- 顶部导航栏 -->
      <Header />
      
      <!-- 页面内容 -->
      <main class="p-6">
        <router-view />
      </main>
    </div>

    <!-- 快速开始弹窗 -->
    <QuickStartModal />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Sidebar from '@/components/layout/Sidebar.vue'
import Header from '@/components/layout/Header.vue'
import QuickStartModal from '@/components/modals/QuickStartModal.vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>
