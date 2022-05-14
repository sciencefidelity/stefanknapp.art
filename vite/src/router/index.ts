import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("views/Home.vue"),
      props: { title: "home" }
    },
    {
      path: "/art",
      name: "art",
      component: () => import("views/Art.vue"),
      props: { title: "counter" }
    },
    {
      path: "/estate",
      name: "estate",
      component: () => import("views/Estate.vue"),
      props: { title: "about" }
    },
    {
      path: "/life",
      name: "life",
      component: () => import("views/Life.vue"),
      props: { title: "about" }
    },
    {
      path: "/not-found",
      component: () => import("views/404.vue")
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/not-found"
    }
  ]
})

export default router
