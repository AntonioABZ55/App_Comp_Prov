import { createRouter, createWebHistory } from "vue-router";    
import Navbar from "../src/components/Navbar.vue";
import Competecias from "../src/components/Competencias.vue";
import UserManagement from "../src/components/UserManagement.vue";
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
    {
      path: "/competencias",
      name: "competencias",
      component: Competecias
    },
    {
      path: "/usermanagement",
      name: "usermanagement",
      component: UserManagement
    }
    
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;
  