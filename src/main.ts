import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Foo from "./components/Foo.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  { path: "/work", component: Foo }
];

new Vue({
  render: h => h(App),
  router: new VueRouter({ routes })
}).$mount("#app");
