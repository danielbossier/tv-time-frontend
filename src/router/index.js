import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ShowsIndex from "../views/ShowsIndex.vue";
import ShowsNew from "../views/ShowsNew.vue";
import ShowsShow from "../views/ShowsShow.vue";
import ShowsEdit from "../views/ShowsEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shows",
    name: "shows-index",
    component: ShowsIndex,
  },
  {
    path: "/shows/new",
    name: "shows-new",
    component: ShowsNew,
  },
  {
    path: "/shows/:id",
    name: "shows-show",
    component: ShowsShow,
  },
  {
    path: "/shows/:id/edit",
    name: "shows-edit",
    component: ShowsEdit,
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
