import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../components/Register.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../components/ForgotPassword.vue"),
  },
  {
    path: "/password-reset/:token",
    name: "ResetPassword",
    component: () => import("../components/ResetPassword.vue"),
  },
  {
    path: "/create-house",
    name: "CreateHouse",
    component: () => import("../components/CreateHouse.vue"),
  },
  {
    path: "/house/:id",
    name: "House",
    component: () => import("../components/House.vue"),
  },
  {
    path: "/user/ads",
    name: "UserAds",
    component: () => import("../components/UserAds.vue"),
  },
  {
    path: "/house/edit/:id",
    name: "EditHouse",
    component: () => import("../components/EditHouse.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
