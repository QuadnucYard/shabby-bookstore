import { createRouter, createWebHistory, RouteRecordRaw, Router } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/views/index.vue"),
    meta: { keepalive: false },
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/home.vue"),
        meta: { keepalive: false },
      },
      {
        path: "/auth/login",
        name: "login",
        component: () => import("@/views/login.vue"),
        meta: { keepalive: false },
      },
      {
        path: "/auth/register",
        name: "register",
        component: () => import("@/views/register.vue"),
        meta: { keepalive: false },
      },
      {
        path: "/book/list",
        name: "booklist",
        component: () => import("@/views/booklist.vue"),
        meta: { keepalive: false },
      },
      {
        path: "/book/:bid(\\d+)",
        name: "bookdetail",
        component: () => import("@/views/bookdetail.vue"),
        meta: { keepalive: false },
      },
      {
        path: "/favorites",
        name: "favorites",
        component: () => import("@/views/favorites.vue"),
        meta: { keepalive: false, requireAuth: true },
      },
      {
        path: "/shopping_cart",
        name: "shopping_cart",
        component: () => import("@/views/shopping_cart.vue"),
        meta: { keepalive: false, requireAuth: true },
      },
      {
        path: "/shopping/checkout",
        name: "checkout",
        component: () => import("@/views/checkout.vue"),
        meta: { keepalive: false, requireAuth: true },
      },
      {
        path: "/:pathMatch(.*)",
        name: "error",
        component: () => import("@/views/pages/Error404.vue"),
      },
    ],
  },
];

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;

export const createDefaultRouter: (routes: Array<RouteRecordRaw>) => Router = routes =>
  createRouter({
    history: createWebHistory(),
    routes,
  });
