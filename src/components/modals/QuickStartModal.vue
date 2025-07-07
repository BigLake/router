<template>
  <div 
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click="appStore.toggleQuickStart"
  >
    <div 
      v-if="appStore.showQuickStart" 
      class="rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800"
      @click.stop
    >
      <div class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">系统公告</h3>
        <button 
          @click="appStore.toggleQuickStart"
          class="text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
        >
          ❌
        </button>
      </div>
      
      <div class="p-6">
        <div class="text-center mb-6">
          <div class="text-2xl mb-2">🚀快速开始</div>
          <p class="text-gray-600 dark:text-gray-300">
            点击右上角 系统公告 可再次查看 | 完整内容更多参考使用文档
          </p>
        </div>

        <div class="space-y-6">
          <div>
            <h4 class="font-medium mb-2 text-gray-900 dark:text-white">❓FAQ</h4>
            <p class="text-sm mb-4 text-gray-600 dark:text-gray-300">
              本站是基于官方 Claude Code 接口，无法体验 Claude Code 的 API 调用
            </p>
          </div>

          <div>
            <h4 class="font-medium mb-2 text-gray-900 dark:text-white">1️⃣安装 Node.js（已安装可跳过）</h4>
            <div class="rounded-lg p-3 text-sm font-mono bg-gray-100 dark:bg-gray-700">
              <p class="text-gray-900 dark:text-gray-300">确保 Node.js 版本 ≥ 18.0</p>
              <p class="text-gray-900 dark:text-gray-300">npm install -g @anthropic-ai/claude-code</p>
              <p class="text-gray-900 dark:text-gray-300">claude --version</p>
            </div>
          </div>

          <div>
            <h4 class="font-medium mb-2 text-gray-900 dark:text-white">2️⃣开始使用</h4>
            <div class="rounded-lg p-3 text-sm font-mono bg-gray-100 dark:bg-gray-700">
              <p class="text-gray-900 dark:text-gray-300">export ANTHROPIC_AUTH_TOKEN=sk-xxx...</p>
              <p class="text-gray-900 dark:text-gray-300">export ANTHROPIC_BASE_URL=https://anyrouter.top</p>
              <p class="text-gray-900 dark:text-gray-300">claude</p>
            </div>
          </div>
        </div>
      </div>

      <div class="flex justify-end space-x-3 p-6 border-t border-gray-200 dark:border-gray-700">
        <button 
          @click="appStore.toggleQuickStart"
          class="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
        >
          今日关闭
        </button>
        <button 
          @click="appStore.toggleQuickStart"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          关闭公告
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>
