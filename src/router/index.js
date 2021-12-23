import { createRouter, createWebHistory } from 'vue-router';
import RepositoriesPage from '../views/RepositoriesPage.vue';

const routes = [
  {
    path: '/',
    name: 'RepositoriesPage',
    component: RepositoriesPage,
  },
  {
    path: '/repo-details/:id',
    name: 'RepositoryDetailsPage',
    component: () => import(/* webpackChunkName: "RepositoryDetailsPage" */ '../views/RepositoryDetailsPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
