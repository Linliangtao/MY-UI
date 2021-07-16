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
      import(/* webpackChunkName: "doc" */ "../views/doc/doc.vue"),
  },
  {
    path: "/module",
    name: "module",
    redirect: {
      name: 'avatar'
    },
    component: () => import(/* webpackChunkName: "module" */ "../views/module/module.vue"),
    children: [
      {
        name: 'template',
        path: 'template',
        component: () => import(/* webpackChunkName: "button" */ "../views/demos/module/template.vue")
      },
      {
        name: 'avatar',
        path: 'avatar',
        component: () => import(/* webpackChunkName: "button" */ "../views/demos/module/avatar.vue")
      },
      {
        name: 'button',
        path: 'button',
        component: () => import(/* webpackChunkName: "button" */ "../views/demos/module/button.vue")
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
