<template>
  <div class="space-y-6">
    <div class="rounded-lg shadow-sm border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      <!-- 用户信息 -->
      <UserProfile />

      <!-- 设置选项卡 -->
      <SettingsTabs v-model="activeTab" />

      <!-- 设置内容 -->
      <div class="p-6">
        <AccountBinding v-if="activeTab === 'account'" />
        <NotificationSettings v-if="activeTab === 'notifications'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UserProfile from '@/components/settings/UserProfile.vue'
import SettingsTabs from '@/components/settings/SettingsTabs.vue'
import AccountBinding from '@/components/settings/AccountBinding.vue'
import NotificationSettings from '@/components/settings/NotificationSettings.vue'

const activeTab = ref('account')
</script>
