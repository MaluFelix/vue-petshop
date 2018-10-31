// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App";
import VueRouter from "vue-router";

import Home from "./components/Home";
import About from "./components/About";

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: App },
  { path: "/home", component: Home },
  { path: "/about", component: About }
];
const router = new VueRouter({ routes });

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router
});
