import Vue from "vue";
import Router from "vue-router";
import VueSession from 'vue-session';

import Home from "./components/Home.vue";
import Homme from "./components/Homme.vue";
import Regles from "./components/Regles.vue";
import Chaos from "./components/Chaos.vue";
import Login from './components/Login';
import Dashboard from './components/Dashboard';

var options = {
  persist: true
}

Vue.use(Router);
Vue.use(VueSession, options);


const router = new Router({
  mode: "history",
  linkActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Homme",
      name: "homme",
      component: Homme
    },
    {
      path: "/Homme/:id",
      name: "homme",
      component: Homme
    },
    {
      path: "/Regles",
      name: "regles",
      component: Regles
    },
    { path: "/Regles/:id", component: Regles, name: "regles" },
    {
      path: "/Chaos",
      name: "chaos",
      component: Chaos
    },
    { path: "/Chaos/:id",  name: "chaos", component: Chaos, },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: "*",
      redirect: { name: "home" }
    }
  ]
});

export default router;
