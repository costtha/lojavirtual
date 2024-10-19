import { createRouter, createWebHistory } from 'vue-router';
import PaginaPrincipal from '../components/PaginaPrincipal.vue';
import CarrinhoCompras from '../components/CarrinhoCompras.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PaginaPrincipal,
  },
  {
    path: '/carrinho',
    name: 'Carrinho',
    component: CarrinhoCompras, 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
