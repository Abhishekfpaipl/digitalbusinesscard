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
  {
    path: "/register",
    name: 'RegistrationPage',
    component: () => import('@/pages/RegistrationPage.vue')
  },
  {
    path: "/legal-warning",
    name: 'LegalWarning',
    component: () => import('@/pages/LegalWarning.vue')
  },
  {
    path: "/privacy-policy",
    name: 'PrivacyPolicy',
    component: () => import('@/pages/PrivacyPolicy.vue')
  },
  {
    path: "/term-of-use",
    name: 'TermCondition',
    component: () => import('@/pages/TermCondition.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
