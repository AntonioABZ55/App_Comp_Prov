import { createRouter, createWebHistory } from "vue-router";    
import Navbar from "../src/components/Navbar.vue";
import Semaforos from "../src/components/Semaforos.vue";
import Formulario from "../src/components/Formulario.vue";
im

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
  