import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/digital-card",
    name: "DigitalCard",
    component: () => import('@/pages/DigitalCard.vue')
  },
  {
    path: "/",
    name: 'Dashboard',
    component: () => import('@/pages/Dashboard.vue')
  },
  {
    path: "/landing",
    name: 'LandingPage',
    component: () => import('@/pages/LandingPage.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
