import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Home from "../views/home/home.vue"

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/doc",
    name: "doc",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/doc/doc.vue"),
  },
  {
    path: "/module",
    name: "module",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/module/module.vue"),
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
