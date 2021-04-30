import Vue from 'vue'
import VueRouter from 'vue-router'
import Ex1 from '../views/Ex1.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Ex1",
    component: Ex1,
  },
  {
    path: "/e2",
    name: "Ex2",
    component: () => import("../views/Ex2.vue"),
  },
  {
    path: "/e4",
    component: () => import("../views/Ex4.vue"),
  },
  {
    path: "/e5",
    component: () => import("../views/Ex5.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
