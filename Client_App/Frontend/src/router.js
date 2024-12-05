import { createRouter, createWebHistory } from "vue-router";    
import Navbar from "../src/components/Navbar.vue";
import Semaforos from "../src/views/Semaforos.vue";
import Home from "../src/views/Home.vue";
import Competencias from "../src/views/Competencias.vue";
import gestion from "../src/views/gestion.vue";
import gestionadmin from "../src/views/gestionadmin.vue";
import UserManagement from "../src/views/UserManagement.vue";
import Participation from "./views/Participation.vue";
import CompetenciasActivas from "./views/CompetenciasActivas.vue";
import MisProductos from "./views/MisProductos.vue";

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
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/competencias",
      name: "competencias",
      component: Competencias
    },
    {
      path: "/gestion",
      name: "gestion",
      component: gestion
    }, 
 
    {
      path: "/gestionadmin",
      name: "gestionadmin",
      component: gestionadmin
    },
    {
      path: "/user",
      name: "UserManagement",
      component: UserManagement
    },
    {
      path: "/participation",
      name: "Participation",
      component: Participation
    },
    { 
      path: "/competenciasactivas",
      name: "CompetenciasActivas",
      component: CompetenciasActivas
    },
    {
      path: "/misproductos",
      name: "MisProductos",
      component: MisProductos
    }

    
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;
  