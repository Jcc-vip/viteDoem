import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// import.meta.env.VITE_APP_URL as any
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../viwes/test/index.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../viwes/test/index.vue"),
  },
  {
    path: "/deom",
    name: "deom",
    component: () => import("../viwes/deom/index.vue"),
  },
  {
    path: "/Editor",
    name: "Editor",
    component: () => import("../viwes/wang-editor/index.vue"),
  },
];
// import.meta.env.VITE_APP_URL as any
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
