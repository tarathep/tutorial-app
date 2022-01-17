import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    alias: "/tutorials",
    name: "/tutorials",
    component: () => import("../components/TutorialsList")
  },
  {
    path: "/tutorials/:id",
    name: "/tutorials-details",
    component: () => import("../components/Tutorial")
  },
  {
    path: "/add",
    name: "/add",
    component: () => import("../components/AddTutorial")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
