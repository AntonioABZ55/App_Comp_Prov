import { createRouter, createWebHistory } from "vue-router";    
import Navbar from "../components/Navbar.vue";
import Semaforos from "../components/Semaforos.vue";

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
      path: "/formulario",
      name: "formulario",
      component: Formulario,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;
  