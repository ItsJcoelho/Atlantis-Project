import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

//TESTE M
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/dashboard",
      name: "dashboard",
      
    },
    {
      path: "/ranking",
      name: "ranking",
      
    },
    {
      path: "/stats",
      name: "stats",
      
    },
    {
      path: "/myPage",
      name: "myPage",
      
    },
    {
      path: "/catalog",
      name: "catalog",
      
    },
    {
      path: "/insertEvent",
      name: "insertEvent",
      
    },
    {
      path: "/myEvents",
      name: "myEvents",
      
    },
    {
      path: "/backOffice",
      name: "backOffice",
      
    },
    {
      path: "/history",
      name: "history",
      
    },
    

  ]
});
