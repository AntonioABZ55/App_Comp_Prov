// src/stores/userStore.js
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    role: null, // Inicialmente el rol es null
  }),
  actions: {
    setRole(role) {
      this.role = role; // Cambia el rol del usuario después del login
    },
  },
});
