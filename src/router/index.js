import Vue from 'vue';
import Router from 'vue-router';

import Home from '../views/Home.vue';

Vue.use(Router);

export const createRoutes = () => [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
  routes: createRoutes(),
});

export default router;
