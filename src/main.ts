import Vue from "vue";
import App from "./App.vue";
import Home from "./components/Home.vue";
import Work from "./components/Work.vue";
import Projects from "./components/Projects.vue";
import Hobbies from "./components/Hobbies.vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  { path: "/work", component: Work },
  { path: "/projects", component: Projects },
  { path: "/hobbies", component: Hobbies }
];

new Vue({
  render: h => h(App),
  router: new VueRouter({ routes })
}).$mount("#app");
