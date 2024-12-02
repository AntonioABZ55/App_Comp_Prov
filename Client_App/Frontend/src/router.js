import { createRouter, createWebHistory } from "vue-router";    
import Navbar from "../src/components/Navbar.vue";
<<<<<<< HEAD
import Competecias from "../src/components/Competencias.vue";
import UserManagement from "../src/components/UserManagement.vue";
import Semaforos from "../src/components/Semaforos.vue";
=======
import Semaforos from "../src/views/Semaforos.vue";
import Home from "../src/views/Home.vue";
import Competencias from "../src/views/Competencias.vue";
import gestion from "../src/views/gestion.vue";
import Formulario from "../src/components/Formulario.vue";
import gestionadmin from "../src/views/gestionadmin.vue";
import UserManagement from "../src/views/UserManagement.vue"; 
>>>>>>> 04be2e1f99271c98346223e54af9acbdc6649f5e

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
<<<<<<< HEAD
      path: "/usermanagement",
      name: "usermanagement",
      component: UserManagement
    }
=======
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
      path: "/formulario",
      name: "formulario",
      component: Formulario
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

>>>>>>> 04be2e1f99271c98346223e54af9acbdc6649f5e
    
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  export default router;
  