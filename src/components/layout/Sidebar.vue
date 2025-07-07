<template>
  <div class="w-64 shadow-sm border-r bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
    <!-- Logo -->
    <div class="p-4 border-b border-gray-200 dark:border-gray-700">
      <div class="flex items-center space-x-2">
        <div class="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        <span class="font-semibold text-gray-900 dark:text-white">Any Router</span>
      </div>
    </div>

    <!-- 导航菜单 -->
    <nav class="p-4 space-y-2">
      <div class="text-xs uppercase tracking-wide mb-3 text-gray-500 dark:text-gray-400">控制台</div>
      
      <SidebarItem 
        v-for="item in consoleMenuItems" 
        :key="item.name"
        :item="item"
      />

      <div class="text-xs uppercase tracking-wide mb-3 mt-6 text-gray-500 dark:text-gray-400">个人中心</div>
      
      <SidebarItem 
        v-for="item in personalMenuItems" 
        :key="item.name"
        :item="item"
      />
    </nav>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SidebarItem from './SidebarItem.vue'

const route = useRoute()

const consoleMenuItems = computed(() => [
  {
    name: 'Dashboard',
    title: '数据看板',
    icon: '📊',
    path: '/dashboard',
    active: route.name === 'Dashboard'
  },
  {
    name: 'ApiTokens',
    title: 'API令牌',
    icon: '🔗',
    path: '/api-tokens',
    active: route.name === 'ApiTokens'
  },
  {
    name: 'UsageLogs',
    title: '使用日志',
    icon: '📋',
    path: '/usage-logs',
    active: route.name === 'UsageLogs'
  }
])

const personalMenuItems = computed(() => [
  {
    name: 'Wallet',
    title: '钱包',
    icon: '💰',
    path: '/wallet',
    active: route.name === 'Wallet'
  },
  {
    name: 'Settings',
    title: '个人设置',
    icon: '👤',
    path: '/settings',
    active: route.name === 'Settings'
  }
])
</script>
