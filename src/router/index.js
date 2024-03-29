import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue"
import RegisterView from "../views/RegisterView.vue"
import PurchaseView from "../views/PurchaseView.vue"
import CartView from "../views/CartView.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/login',
      component: LoginView,
    },
    {
      path: '/register',
      component: RegisterView,
    },
    {
      path: '/purchase',
      component: PurchaseView,
    },
    {
      path: '/cart',
      component: CartView,
    }
  ],
});

export default router;