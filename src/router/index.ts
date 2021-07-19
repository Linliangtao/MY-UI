import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/home.vue"),
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

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
