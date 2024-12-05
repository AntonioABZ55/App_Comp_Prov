<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top rounded-bottom">
    <div class="container">
      <!-- Logo -->
      <router-link to="/" class="btn-nav">
        Home
      </router-link>

      <!-- Botón toggle para dispositivos móviles -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links del navbar -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/competencias" class="btn-nav">
              Unirse
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/semaforos" class="btn-nav">
              Categorías
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/gestion" class="btn-nav">
              Saber más
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user" class="btn-nav">
              Contactos
            </router-link>
          </li>
        </ul>

        <!-- Botón de Acceso -->
        <button class="btn-nav ml-3" @click="showModal = true">Acceder</button>
      </div>
    </div>

    <!-- Modal de Acceso -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <h2 class="modal-title">{{ isLogin ? "Iniciar Sesión" : "Registrarse" }}</h2>
        <form v-if="isLogin">
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" placeholder="Ingresa tu correo" required />
          <label for="password">Contraseña:</label>
          <input type="password" id="password" placeholder="Ingresa tu contraseña" required />
          <button type="submit" class="btn-submit">Iniciar Sesión</button>
          <p class="switch-text">
            ¿No tienes una cuenta? 
            <button @click="toggleLogin" class="btn-switch">Regístrate</button>
          </p>
        </form>
        <form v-else>
          <label for="new-email">Correo Electrónico:</label>
          <input type="email" id="new-email" placeholder="Ingresa tu correo" required />
          <label for="new-password">Contraseña:</label>
          <input type="password" id="new-password" placeholder="Crea tu contraseña" required />
          <label for="confirm-password">Confirmar Contraseña:</label>
          <input type="password" id="confirm-password" placeholder="Repite tu contraseña" required />
          <button type="submit" class="btn-register">Crear Cuenta</button>
          <p class="switch-text">
            ¿Ya tienes una cuenta? 
            <button @click="toggleLogin" class="btn-switch">Inicia Sesión</button>
          </p>
        </form>
        <button class="btn-close" @click="closeModal">Cerrar</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showModal: false, // Estado del modal
      isLogin: true, // Alterna entre iniciar sesión y registrarse
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    },
    toggleLogin() {
      this.isLogin = !this.isLogin; // Cambia entre login y registro
    },
  },
};
</script>

<style scoped>
/* Navbar Styles */
.navbar {
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: #004173; /* Azul oscuro */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.btn-nav {
  padding: 10px 15px;
  background-color: transparent;
  border: 2px solid #0cb7f2; /* Azul vibrante */
  border-radius: 50px;
  font-size: 1rem;
  color: #ffffff;
  font-weight: bold;
  margin: 5px;
  transition: all 0.3s ease-in-out;
}

.btn-nav:hover {
  background-color: #0cb7f2; /* Azul vibrante */
  color: #004173; /* Azul oscuro */
  transform: scale(1.1);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-content {
  background-color: #f0faff;
  padding: 30px;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease-in-out;
}

.modal-title {
  color: #004173;
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
}

.modal-content label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #004173;
}

.modal-content input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 2px solid #0cb7f2;
  border-radius: 10px;
}

.btn-submit {
  width: 100%;
  padding: 12px;
  background-color: #0cb7f2;
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
}

.btn-submit:hover {
  background-color: #0979b0; /* Azul más oscuro */
}

.btn-register {
  width: 100%;
  padding: 15px;
  background-color: #004173; /* Azul oscuro */
  color: white;
  border: none;
  border-radius: 15px;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.btn-register:hover {
  background-color: #0cb7f2;
  transform: scale(1.05);
}

.btn-switch {
  background: none;
  border: none;
  color: #0cb7f2;
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
}

.switch-text {
  text-align: center;
  margin-top: 10px;
  color: #004173;
}

.btn-close {
  margin-top: 20px;
  background-color: #0cb7f2;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
}

.btn-close:hover {
  background-color: #0979b0;
}

/* Animación */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
