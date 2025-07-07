import { createRouter, createWebHistory } from "vue-router"
import Layout from "@/layouts/MainLayout.vue"

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/views/Dashboard.vue"),
        meta: { title: "数据看板" },
      },
      {
        path: "/api-tokens",
        name: "ApiTokens",
        component: () => import("@/views/ApiTokens.vue"),
        meta: { title: "API令牌" },
      },
      {
        path: "/usage-logs",
        name: "UsageLogs",
        component: () => import("@/views/UsageLogs.vue"),
        meta: { title: "使用日志" },
      },
      {
        path: "/wallet",
        name: "Wallet",
        component: () => import("@/views/Wallet.vue"),
        meta: { title: "钱包" },
      },
      {
        path: "/settings",
        name: "Settings",
        component: () => import("@/views/Settings.vue"),
        meta: { title: "个人设置" },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
