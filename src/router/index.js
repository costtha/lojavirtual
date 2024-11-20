import { createRouter, createWebHistory } from 'vue-router';
import PaginaPrincipal from '../components/PaginaPrincipal.vue';
import CarrinhoCompras from '../components/CarrinhoCompras.vue';
import ProdutosMais from '../components/ProdutosMais.vue';

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
  {
    path: '/produtos-mais',
    name: 'ProdutosMais',
    component: ProdutosMais,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
