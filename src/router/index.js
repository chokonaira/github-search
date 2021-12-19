import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/details',
    name: 'Details',
    component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
