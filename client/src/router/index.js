import { createRouter, createWebHistory } from "vue-router";
import Playlist from "../views/MyPlaylist.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: Playlist,
  // },
  {
    path: "/edit/:id",
    name: "edit",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EditPlaylist.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MainPlaylist.vue"),
  },
  {
    path: "/playlist/:id",
    name: "playlist",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DetailPlaylist.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
