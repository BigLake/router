<template>
  <div>
    <!-- 欢迎区域 -->
    <div class="mb-6">
      <h1 class="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
        👋早上好，{{ appStore.currentUser.username }}
      </h1>
      <div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
        <button class="p-1 hover:text-gray-700 dark:hover:text-gray-300">🔍</button>
        <button class="p-1 hover:text-gray-700 dark:hover:text-gray-300">🔄</button>
      </div>
    </div>

    <!-- 统计卡片 -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        title="账户数据"
        icon="👤"
        icon-bg-class="bg-blue-100"
        icon-class="text-blue-600"
        primary-label="当前余额"
        :primary-value="`$${appStore.currentUser.balance}`"
        secondary-label="历史消耗"
        :secondary-value="`$${appStore.currentUser.consumed}`"
        secondary-value-class="text-purple-600"
      />
      
      <StatCard
        title="使用统计"
        icon="📊"
        icon-bg-class="bg-green-100"
        icon-class="text-green-600"
        primary-label="请求次数"
        :primary-value="appStore.currentUser.requests.toString()"
        secondary-label="统计次数"
        secondary-value="5"
        secondary-value-class="text-teal-600"
      />
      
      <StatCard
        title="资源消耗"
        icon="⚡"
        icon-bg-class="bg-yellow-100"
        icon-class="text-yellow-600"
        primary-label="输入消耗"
        primary-value="$0.03"
        secondary-label="输出Tokens"
        secondary-value="455"
        secondary-value-class="text-red-600"
      />
      
      <StatCard
        title="性能指标"
        icon="📈"
        icon-bg-class="bg-purple-100"
        icon-class="text-purple-600"
        primary-label="平均RPM"
        primary-value="0.003"
        secondary-label="平均TPM"
        secondary-value="0.303"
        secondary-value-class="text-orange-600"
      />
    </div>

    <!-- 图表和信息区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
      <!-- 模型消耗分析 -->
      <ChartCard />
      
      <!-- API信息 -->
      <InfoCard 
        title="🔧 API信息"
        icon="🔧"
        empty-title="暂无API信息"
        empty-description="请联系管理员在系统设置中配置API信息"
      />
    </div>

    <!-- 底部信息区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <AnnouncementCard />
      
      <InfoCard 
        title="❓ 常见问答"
        icon="❓"
        empty-title="暂无常见问答"
        empty-description="请联系管理员在系统设置中配置常见问答"
      />
      
      <InfoCard 
        title="🔍 服务可用性"
        icon="📊"
        empty-title="暂无监控数据"
        empty-description="请联系管理员在系统设置中配置Uptime"
      />
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import StatCard from '@/components/common/StatCard.vue'
import ChartCard from '@/components/dashboard/ChartCard.vue'
import InfoCard from '@/components/dashboard/InfoCard.vue'
import AnnouncementCard from '@/components/dashboard/AnnouncementCard.vue'

const appStore = useAppStore()
</script>
