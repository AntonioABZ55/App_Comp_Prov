import { createRouter, createWebHistory } from "vue-router";    
import Navbar from "../src/components/Navbar.vue";
import Semaforos from "../src/components/Semaforos.vue";

const routes = [
    
    {
      path: "/navbar",
      name: "navbar",
      component: Navbar
    },
    {
      path: "/semaforos",
      name: "semaforos",
      component: Semaforos
    },          
    
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;
  