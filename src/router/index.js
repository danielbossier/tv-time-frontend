import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ShowsIndex from "../views/ShowsIndex.vue";
import ShowsNew from "../views/ShowsNew.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ShowsIndex",
    name: "ShowsIndex",
    component: ShowsIndex,
  },
  {
    path: "/ShowsNew",
    name: "ShowsNew",
    component: ShowsNew,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
