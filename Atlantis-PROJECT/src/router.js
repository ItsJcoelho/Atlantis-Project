import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: About
      
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
      path: "/catalog",
      name: "catalog",
      
    },
    {
      path: "/insertEvent",
      name: "insertEvent",
      
    },
    {
      path: "/backOffice",
      name: "backOffice",
      
    },
    {
      path: "/history",
      name: "history",
      
    },
    
    {
      path: "/profile",
      name: "profile",
      
    },
    
    {
      path: "/profile/:userId",
      name: "user-detail",
      children: [{
          path: "achievements",
          name: "actor-detail-achievements",
        },
        {
          path: "challenges",
          name: "user-detail-challenges",
        },
        {
          path: "/myEvents",
          name: "myEvents",
          
        },
      ]
    },
  ]
});

