import { createWebHistory, createRouter } from "vue-router";

// All Pages
import Iot from "../components/landing-pages/Iot";

const routes = [
  { path: "/", component: Iot },
  { path: "/:pathMatch(.*)*", component: Iot },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
