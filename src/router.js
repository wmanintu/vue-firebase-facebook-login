import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/LoginPage.vue";
import Dashboard from "./views/DashboardPage.vue";
import { getCurrentUser } from "vuefire";

const routes = [
  { name: 'login', path: "/", component: Login },
  { name: 'dashboard', path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  // routes with `meta: { requiresAuth: true }` will check for
  // the users, others won't
  if (to.meta.requiresAuth) {
    const currentUser = await getCurrentUser();
    // if the user is not logged in, redirect to the login page
    if (!currentUser) {
      return {
        path: "/",
      };
    }
  }
});

export default router;
