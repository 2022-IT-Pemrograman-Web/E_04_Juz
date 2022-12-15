import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: Playlist,
  // },
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
