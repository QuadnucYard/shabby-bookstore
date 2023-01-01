import { createRouter, createWebHistory, RouteRecordRaw, Router } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/index.vue"),
    meta: {
      keepalive: false,
    },
    children: [
      {
        path: "/auth/login",
        name: "login",
        component: () => import("@/views/login.vue"),
        meta: {
          keepalive: false,
        },
      },
      {
        path: "/auth/register",
        name: "register",
        component: () => import("@/views/register.vue"),
        meta: {
          keepalive: false,
        },
      },
    ],
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

export const createDefaultRouter: (routes: Array<RouteRecordRaw>) => Router = routes =>
  createRouter({
    history: createWebHistory(),
    routes,
  });