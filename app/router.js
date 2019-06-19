import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Homme from './components/Homme.vue';
import Regles from './components/Regles.vue';
import Chaos from './components/Chaos.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Homme',
      name: 'homme',
      component: Homme,
    },
    {
      path: '/Regles',
      name: 'regles',
      component: Regles,
    },
    {
      path: '/Chaos',
      name: 'chaos',
      component: Chaos,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
