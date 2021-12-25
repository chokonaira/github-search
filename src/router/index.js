import { createRouter, createWebHistory } from 'vue-router';
import RepositoriesPage from '../views/RepositoriesPage.vue';

const routes = [
  {
    path: '/',
    name: 'RepositoriesPage',
    component: RepositoriesPage,
  },
  {
    path: '/repo-details/:owner/:repo',
    name: 'RepositoryDetailsPage',
    component: () => import(/* webpackChunkName: "RepositoryDetailsPage" */ '../views/RepositoryDetailsPage.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
