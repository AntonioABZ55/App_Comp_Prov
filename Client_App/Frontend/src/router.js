import { createRouter, createWebHistory } from "vue-router";    
import Navbar from "../components/Navbar.vue";
import Semaforos from "../components/Semaforos.vue";

const routes = [
    
    {
      path: "/navbar",
      name: "navbar",
      component: Navbar.vue,
    },
    {
      path: "/semaforos",
      name: "semaforos",
      component: Semaforos,  
    },          
    
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;
  