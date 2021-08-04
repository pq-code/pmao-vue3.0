import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import home from '../views/home/home.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: home,
    name: 'home',
    // leaf: true,//只有一个节点
    children: [
      { path: '/home',
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/home/home.vue"), },//默认首页
    ]
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () =>
  //       import(/* webpackChunkName: "about" */ "../views/home/home.vue"),
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
