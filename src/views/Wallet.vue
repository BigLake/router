<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- 在线充值 -->
      <RechargeCard />
      
      <!-- 邀请奖励 -->
      <InviteCard />
    </div>
  </div>
</template>

<script setup>
import RechargeCard from '@/components/wallet/RechargeCard.vue'
import InviteCard from '@/components/wallet/InviteCard.vue'
</script>
